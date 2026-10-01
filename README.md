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

None. Collabora renders documents that live in Nextcloud and keeps nothing between restarts, so the package declares no volumes and mounts nothing into the container.

## File Models

None. Every setting reaches `coolwsd` as an environment variable, derived at daemon start; nothing is written to disk.

## Dependencies

None. Collabora is declared with no dependencies, and Nextcloud declares the dependency in the other direction — a package cannot be both the dependency and the dependent of the same service.

The package still needs Nextcloud to be useful, and reads one thing from it at runtime without declaring it: Nextcloud's bridge address, used to restrict which WOPI host Collabora will serve documents for. That read resolves to nothing when Nextcloud is absent, and the setting is then omitted rather than guessed at.

## Network Access and Interfaces

The package exports no interfaces. Port 9980 is bound so that other containers can reach it across the internal bridge, but nothing is exported onto the LAN, a Tor address, or a domain.

| Binding | Port | Exported | Purpose |
| --- | --- | --- | --- |
| `main` | 9980 | No — bridge only | WOPI discovery and the editor itself |

Everything a browser loads from Collabora arrives through Nextcloud, which proxies `/browser`, `/cool` and the two `/hosting` endpoints — `/hosting/discovery` and `/hosting/capabilities` — from its own origin to this port. `/cool` carries the websockets as well as the editor's HTTP traffic. That is why Collabora needs no address, no certificate and no domain of its own, and why nothing on the LAN can reach it directly.

## Installation and First-Run Flow

Collabora fetches and saves documents over the host bridge, so Nextcloud has to trust that host — the Nextcloud package adds it to `trusted_domains` while a suite is selected. Without it every document opens to an error rather than a blank frame.

There is nothing to configure. Collabora starts as soon as it is installed and needs no address, no certificate and no pairing step of its own.

The Nextcloud Office (Collabora) app is installed by the **Nextcloud** package when a user selects this service as their office suite, and Nextcloud points itself at this one. Nothing on this side participates.

## Actions

None. Nothing about this service is configurable: it takes no credentials, has no address of its own, and derives everything it needs at runtime.

## Tasks

None. The service is never held on a prompt, and its ordinary controls are always available.

## Health Checks

One check, on the daemon itself.

**Editor** (daemon `cool`) — fetches `/hosting/capabilities` over the container bridge. It proves `coolwsd` is serving WOPI discovery, not merely that something is listening on the port, which is the distinction that matters: a `coolwsd` that started but cannot fork its document children will accept a connection and fail every document.

It carries a two-minute grace period, so an ordinary start reads as *starting* rather than failed: `coolwsd` preloads fonts, icons, dictionaries and the break iterator and forks its first kit before it binds the port, which takes 10-20 seconds on modest x86 hardware and longer on a cold cache.

A failure that survives the grace period points at the container being unable to fork (a kernel or seccomp problem, visible in the service logs) or at memory pressure. A red check here always means documents will not open; it is never cosmetic.

## Backups and Restore

Nothing is backed up, because nothing is stored. `createBackup` is declared over an empty volume set. Documents belong to Nextcloud and are captured by Nextcloud's backup; a restored server needs nothing re-entered here.

## Limitations and Differences

1. **No address of its own, and nothing to configure.** Collabora is reachable only through Nextcloud, and there is no way to reach the editor while Nextcloud is stopped. The package has no actions, no tasks and no settings; everything it needs is derived at daemon start.
2. **The admin console is disabled.** Upstream ships it enabled with no credentials configured. Nothing here serves it and no credential is stored, so it is switched off rather than left open — which also means there is no view of open documents or memory use.
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
volumes: {}
file_models: []
startos_managed_env_vars:
  - aliasgroup1
  - extra_params
  - DONT_GEN_SSL_CERT
dependencies: none
interfaces: {}
actions: []
tasks: []
health_checks:
  - cool # the daemon id, which is what the check is named
```
