# Updating Collabora Online

## Where the version comes from

Collabora publishes the CODE image to Docker Hub as [`collabora/code`](https://hub.docker.com/r/collabora/code). Tags are `YY.MM.<micro>.<build>.<patch>` — the year and month of the release series, then Collabora's own counters. `latest` tracks the newest of these.

New tags land roughly weekly, so the newest tag is usually a bugfix on the current series rather than a new one. List them with:

```bash
curl -s "https://hub.docker.com/v2/repositories/collabora/code/tags?page_size=25" \
  | jq -r '.results[] | select(.name | test("^[0-9]")) | "\(.name)  \(.last_updated)"'
```

Confirm the tag ships both architectures before pinning it:

```bash
docker manifest inspect collabora/code:<tag> | jq -r '.manifests[].platform.architecture'
```

## Making the bump

1. Set the new tag on `images.collabora.source.dockerTag` in `startos/manifest/index.ts`.
2. Set `version` in `startos/versions/current.ts`. The package version tracks the upstream series as `YY.M.<micro>:<revision>` — a `26.04.3.x.y` image becomes `26.4.3:0`, and a packaging-only change bumps the revision after the colon.
3. Write release notes describing what the user will notice, not what changed upstream in full. Collabora's own release notes cover the editor.

## What to watch for

Collabora changes the hashed path segment in its editor URLs (`/browser/<hash>/cool.html`) on most releases. Nextcloud re-reads it from WOPI discovery, so this is normally invisible — but a Nextcloud that has cached discovery may serve the old path until its cache expires, which looks like documents failing to open right after an update.

The environment variables this package sets — `username`, `password`, `aliasgroup1`, `extra_params`, `DONT_GEN_SSL_CERT` — are read by `coolwsd --use-env-vars`. That mapping has been stable, but it is upstream's and not covered by semver; if a bump breaks startup, check `coolwsd --help` in the new image before looking anywhere else.

The Nextcloud package rewrites `urlsrc` out of the discovery response to make the editor
load same-origin, which is what lets it work on every address Nextcloud is reachable at.
That is a workaround for nextcloud/richdocuments#6019 — if upstream gains a way to serve a
root-relative `urlsrc`, the `mod_substitute` rule in `nextcloud-startos` can go.

Discovery must keep being served as uncompressed `text/xml`. Nextcloud's Apache rewrites the absolute hosts out of it with `mod_substitute`, which cannot read a compressed body — if a release starts compressing `/hosting/discovery`, every document opens to a blank frame on any address but one.
