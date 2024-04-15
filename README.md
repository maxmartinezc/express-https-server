# express-https-server
A repository with an https server implementation which is published in https://maxmartinez.dev

## Run http server
```bash
npm run start
```

## Run https server
```bash
npm run start:https
```

## Test server instances with CURL
```bash
# http server
curl -I http://localhost:9001/health-check
```

```bash
# https server
curl --verbose https://localhost:9001/health-check
```