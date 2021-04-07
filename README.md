# GitHub Action: Download last artifact

Downloads the last created artifact by name, regardless of which workflow or branch it was created in.

## Example usage

```yml
steps:
- uses: actions/checkout@v2

- name: Download last artifact
  uses: levonet/action-download-last-artifact@master
  with:
    name: my-artifact

- name: Display structure of downloaded files
  run: ls -R
```

## Inputs
