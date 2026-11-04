# Updating Collabora Online

## Determining the upstream version

Collabora publishes the CODE image to Docker Hub as [`collabora/code`](https://hub.docker.com/r/collabora/code). Tags are `YY.MM.<micro>.<build>.<patch>` — the year and month of the release series, then Collabora's own counters. `latest` tracks the newest of these.

New tags land roughly weekly, so the newest tag is usually a bugfix on the current series rather than a new one. List them with:

```bash
curl -fsSL "https://hub.docker.com/v2/repositories/collabora/code/tags?page_size=100&ordering=last_updated" \
  | jq -r '.results[] | select(.name | test("^[0-9]+(\\.[0-9]+)*$")) | "\(.name)  \(.last_updated)"'
```

Confirm the tag ships both architectures before pinning it:

```bash
docker manifest inspect collabora/code:<tag> | jq -r '.manifests[].platform.architecture'
```

The release scheme is CalVer, not SemVer. Classify the impact from the CODE release notes for the target series (`https://www.collaboraonline.com/code-<yy>-<mm>-release-notes/`), not from a changed counter.

The application source is mirrored at [CollaboraOnline/online.mirror](https://github.com/CollaboraOnline/online.mirror); `CollaboraOnline/online` is the issue tracker. Image `26.04.5.1.1` corresponds to source tag `cp-26.04.5-1`. Read `docker/from-packages/Dockerfile`, `coolwsd.xml.in`, and the relevant `wsd/` implementations at the target tag when checking runtime assumptions.

## Applying the bump

1. Set the new tag on `images.collabora.source.dockerTag` in `startos/manifest/index.ts`.
2. Set `version` in `startos/versions/current.ts` to the full tag with the month's leading zero dropped, then `:0` — `26.04.4.2.1` becomes `26.4.4.2.1:0`.

## What to watch for

The environment variables this package sets — `aliasgroup1`, `extra_params`, `DONT_GEN_SSL_CERT` — are read by `coolwsd --use-env-vars`. That mapping has been stable, but it is upstream's and not covered by semver; if a bump breaks startup, check `coolwsd --help` in the new image before looking anywhere else.

Discovery must keep being served as uncompressed `text/xml`. Nextcloud's Apache rewrites the absolute hosts out of it with `mod_substitute`, which cannot read a compressed body — if a release starts compressing `/hosting/discovery`, every document opens to a blank frame on any address but one.
