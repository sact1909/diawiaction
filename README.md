# Diawi application action distribute

This action allow to distribute your APK and IPA files throught Diawi

## Inputs

### `api-key`

**Required** The api key provided from Diawi.

### `file-route`

**Required** The file route from the APK or IPA.

## Example usage

```yaml
uses: sact1909/diawiaction@v1
with:
  api-key: ${{API_KEY}}
  file-route: 'myapp/myapp.apk'
```
## Deliver your app through email up to 5 accounts for starter/premium/enterprise Diawi accounts or just one for Free Accounts

Using Environment Variables, you just has to paste the accounts one below the other

```yaml
uses: sact1909/diawiaction@v1
with:
  api-key: ${{API_KEY}}
  file-route: 'myapp/myapp.apk',
  emails-to-deliver: ${{EMAILS}}
```

Or just setting directly, but separated by commas

```yaml
uses: sact1909/diawiaction@v1
with:
  api-key: ${{API_KEY}}
  file-route: 'myapp/myapp.apk',
  emails-to-deliver: 'example@contoso.com,example_two@contoso.com'
```

## You can also set build comments

```yaml
uses: sact1909/diawiaction@v1
with:
  api-key: ${{API_KEY}}
  file-route: 'myapp/myapp.apk',
  comment: 'This build is just a test'
```

## Set a installation password to protect your files

```yaml
uses: sact1909/diawiaction@v1
with:
  api-key: ${{API_KEY}}
  file-route: 'myapp/myapp.apk',
  installation-password: "this-is-a-password"
```