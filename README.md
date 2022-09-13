# extract private key from keystore

## prerequisites
* have node and npm of recent versions installed

## steps
* run 
```bash 
npm install
```
* replace keystore.json with the needed file
* specify correct password in the app.ts
* run  
```bash 
npm start
```
* private key should be printed in the console, for example
```bash
npm start

> app@1.0.0 start
> ts-node ./app.ts

private key: 55a3160577979ec014a2ce85c430e1ff0ff06efd230b7ce41aeae2ef00edf175
``` 