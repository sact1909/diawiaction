# Diawi application action distribute

This action allow to distribute your APK and IPA files throught Diawi

## Inputs

### `api-key`

**Required** The api key provided from Diawi.

### `file-route`

**Required** The file route from the APK or IPA.

## Example usage

```yaml
uses: actions/diawi-distribute@v1
with:
  api-key: '<your api key>'
  file-route: 'myapp/myapp.apk'
```
