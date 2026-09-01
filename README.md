<p align="center">
  <img src="icon.png" alt="Collabora Online Logo" width="21%">
</p>

# Collabora Online on StartOS

> Everything not listed in this document should behave the same as upstream
> Collabora Online. If a feature, setting, or behavior is not mentioned here,
> the upstream documentation is accurate and fully applicable — see the
> Documentation section of `instructions.md` for links.

[Collabora Online](https://github.com/CollaboraOnline/online) is a LibreOffice-based online office suite. It renders and edits documents, spreadsheets and presentations for a host application that stores the files; on StartOS that host is Nextcloud, through the Nextcloud Office app.

This package runs the Collabora Online Development Edition (CODE) image and wires it to Nextcloud entirely over the internal container bridge. It exports no address of its own — Nextcloud serves the editor from whichever of its own origins the browser is already using.

---

## Table of Contents

- [Image and Container Runtime](#image-and-container-runtime)
- [Volume and Data Layout](#volume-and-data-layout)
- [File Models](#file-models)
- [Dependencies](#dependencies)
- [Network Access and Interfaces](#network-access-and-interfaces)
- [Installation and First-Run Flow](#installation-and-first-run-flow)
- [Actions](#actions)
- [Tasks](#tasks)
- [Health Checks](#health-checks)
- [Backups and Restore](#backups-and-restore)
- [Limitations and Differences](#limitations-and-differences)
- [Quick Reference for AI Consumers](#quick-reference-for-ai-consumers)

---

## Image and Container Runtime

The package wraps the upstream `collabora/code` image unmodified and runs its default entrypoint, which is the `coolwsd` binary itself rather than a shell script.

| | |
| --- | --- |
| Image source | Upstream `collabora/code`, unmodified |
| Architectures | x86_64, aarch64 |
| Entrypoint | Default (`coolwsd --use-env-vars …`) |
| Subcontainers | `cool` — the only container; runs `coolwsd` and the document-rendering children it forks |

The image carries **no shell**: `/bin/sh` does not exist in it, and the only executables are `coolwsd`, its forkit helpers, and `openssl`. Anything that would ordinarily be a `sh -c` oneshot or a shell health check has to be expressed some other way, and `start-cli package attach` cannot open an interactive prompt in it.

Configuration reaches `coolwsd` through environment variables, which its `--use-env-vars` flag maps onto config keys, plus an `extra_params` variable whose contents are appended to its command line.

## Volume and Data Layout

Collabora holds no state of its own. It renders documents that live in Nextcloud and keeps nothing between restarts, so the package mounts nothing into the container.

| Volume | Mount point | Contents |
| --- | --- | --- |
| `startos` | not mounted | `store.json` — read and written by the package, never by the container |

There is no database, no cache to preserve, and no upstream data directory. A document being edited lives in the container's ephemeral filesystem only for as long as the editing session; the authoritative copy is always Nextcloud's.

## File Models

The package owns one file, and it holds StartOS-side state rather than upstream configuration. Collabora itself has no configuration file on disk that this package writes — every setting is passed as an environment variable at daemon start.

| Model | File | How it is seeded | What rewrites it |
| --- | --- | --- | --- |
| `storeJson` | `store.json` on the `startos` volume | Empty at install | **Set Admin Password**, which is its only writer |

`store.json` carries `adminPassword` and nothing else. It is read at daemon start and turned into the `username`/`password` environment variables, so setting it restarts the container. Nothing else re-asserts it, and there is no hand-editable configuration for a user to lose.

`server_name` is deliberately never set. Left unset, `coolwsd` derives the host for its discovery document from each request — and Nextcloud strips those hosts out anyway, so pinning one would only limit which address the editor works on.

## Dependencies

None. Collabora is declared with no dependencies, and Nextcloud declares the dependency in the other direction — a package cannot be both the dependency and the dependent of the same service.

The package still needs Nextcloud to be useful, and reads one thing from it at runtime without declaring it: Nextcloud's bridge address, used to restrict which WOPI host Collabora will serve documents for. That read resolves to nothing when Nextcloud is absent, and the setting is then omitted rather than guessed at.

## Network Access and Interfaces

The package exports no interfaces. Port 9980 is bound so that other containers can reach it across the internal bridge, but nothing is exported onto the LAN, a Tor address, or a domain.

| Binding | Port | Exported | Purpose |
| --- | --- | --- | --- |
| `main` | 9980 | No — bridge only | WOPI discovery, the editor itself, and the admin console |

Everything a browser loads from Collabora arrives through Nextcloud, which proxies four path prefixes — `/browser`, `/cool`, `/coolws` and `/hosting` — from its own origin to this port. That is why Collabora needs no address, no certificate and no domain of its own, and why nothing on the LAN can reach it directly.

## Installation and First-Run Flow

Collabora fetches and saves documents over the host bridge, so Nextcloud has to trust that host — the Nextcloud package adds it to `trusted_domains` while a suite is selected. Without it every document opens to an error rather than a blank frame.

There is nothing to configure. Collabora starts as soon as it is installed and needs no address, no certificate and no pairing step of its own.

A single non-blocking task asks for an admin-console password. The console stays switched off until one is set, which is deliberate — an enabled console with no password configured is an open one. Editing works regardless.

The Nextcloud Office app itself is not installed by this package. The user installs it from Nextcloud's own app store, and Nextcloud's Office Suite action wires the two together.

## Actions

One action, which writes a single key to `store.json` and restarts the container. It does not touch document data and is safe to repeat.

**Set Admin Password** — run it to reach the admin console for the first time, to rotate the password, or to get back in after losing it. It generates a new password, stores it, and returns it once along with the path the console is served at. It changes `adminPassword` in `store.json` and enables the console if it was off. Costs a restart of the editor, so anyone with a document open loses the session, though not their saved work. Repeating it replaces the password rather than failing, so a second run invalidates the first.

## Tasks

The package raises one task, cleared by running the action it points at, and able to return if the stored password is cleared.

| Task | Severity | What raises it | What clears it |
| --- | --- | --- | --- |
| Set Admin Password | `important` | `adminPassword` unset in `store.json` | Running **Set Admin Password** |

Nothing here is `critical`, so the service's ordinary Start/Stop controls are always available.

## Health Checks

One check, on the daemon itself.

**Editor** (daemon `cool`) — fetches `/hosting/capabilities` over the container bridge. It proves `coolwsd` is serving WOPI discovery, not merely that something is listening on the port, which is the distinction that matters: a `coolwsd` that started but cannot fork its document children will accept a connection and fail every document.

A failure that clears within a minute or two of a start is ordinary — the process forks several children before it serves. A failure that persists points at the container being unable to fork (a kernel or seccomp problem, visible in the service logs) or at memory pressure. A red check here always means documents will not open; it is never cosmetic.

## Backups and Restore

The `startos` volume is copied wholesale (`ofVolumes`). Nothing is dumped, because there is no database.

What is captured is `store.json` — the admin-console password, which is the only state this package holds. What is deliberately excluded is everything else, because there is nothing else: documents belong to Nextcloud and are captured by Nextcloud's backup, not this one.

A restored instance is immediately usable and needs nothing re-entered, on any server, at any address.

## Limitations and Differences

1. **No address of its own.** Collabora is not reachable except through Nextcloud. The admin console is served at Nextcloud's address, and there is no way to reach the editor while Nextcloud is stopped.
2. **The admin console is off until a password is set.** Upstream ships the console enabled with empty credentials; this package disables it rather than exposing it unauthenticated.
3. **The image has no shell.** Diagnostics that would normally run a command inside the container are not available.
4. **Development Edition.** CODE is the freely redistributable edition. Collabora's supported enterprise builds, and the support contract that comes with them, are not what this package ships.
5. **Memory scales with concurrent documents.** Roughly 50–100 MB per open document on top of the base process. `coolwsd` reads the container's cgroup limit and starts shedding idle documents as it approaches it, so a small server degrades by closing idle sessions rather than by failing.

---

## Quick Reference for AI Consumers

```yaml
package_id: collabora-online
image: collabora/code
architectures: [x86_64, aarch64]
subcontainers: [cool]
volumes:
  startos: not mounted
file_models:
  - store.json
startos_managed_env_vars:
  - username
  - password
  - aliasgroup1
  - extra_params
  - DONT_GEN_SSL_CERT
dependencies: none
interfaces: {}
actions:
  - set-admin-password
tasks:
  - { action: set-admin-password, severity: important }
health_checks:
  - cool # the daemon id, which is what the check is named
```
