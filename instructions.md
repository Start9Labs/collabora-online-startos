# Collabora Online

Collabora has no address of its own and no interface to open. Nextcloud serves the editor, so everything below happens on your Nextcloud.

## Documentation

- [Nextcloud Office admin manual](https://docs.nextcloud.com/server/latest/admin_manual/office/*) — running and configuring Collabora Online behind Nextcloud.

## What you get on StartOS

Documents, spreadsheets and presentations you can open and edit in the browser, straight from Nextcloud Files, with several people editing the same file at once. Your files stay in Nextcloud; Collabora only renders them while a document is open and keeps nothing afterwards.

Because the editor is served from your Nextcloud's own address, it works wherever Nextcloud works — on your local network, through a public domain, or over Tor — with nothing to switch between them.

## Getting set up

Install Nextcloud first — Collabora does nothing without it.

1. In Nextcloud's web interface, open **Apps** and install **Nextcloud Office**. Leave it enabled.
2. Run Nextcloud's **Office Suite** action in StartOS and choose Collabora Online.
3. Optionally, run **Set Admin Password** here if you want the Collabora admin console. It is switched off until you set one.

Open any document in Nextcloud Files to check it works.

## Using Collabora Online

### Editing

You never open Collabora directly. In Nextcloud, click a document, spreadsheet or presentation and it opens in the editor. Create new ones from the **+** menu in Files.

Only enable one office app in Nextcloud. If the ONLYOFFICE app is enabled alongside Nextcloud Office, Word, Excel and PowerPoint files stop opening in either of them and download instead. Nextcloud's service page will tell you which app to disable.

### Actions

**Set Admin Password** — generates a password for the Collabora admin console, which shows the documents currently open and how much memory they are using. The password and the path to reach the console are shown once, when you run it; add that path to whichever Nextcloud address you normally use. Run it again to replace a password you have lost. Anyone with a document open will be interrupted while the editor restarts.
