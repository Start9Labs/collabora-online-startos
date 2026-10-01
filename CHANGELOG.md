# Changelog

## 26.4.4.2.1:0

- Update Collabora CODE to 26.04.4.2.1, adding slide-note views in Impress and fixing XLSX pivot-table exports that could crash Excel.
- Preserve the complete upstream version instead of dropping build and patch components; existing installations upgrade without additional setup.
- Share the upstream version between the image pin and package version, and add regression tests for their agreement and upgrade paths.
