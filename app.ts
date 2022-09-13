const fs = require('fs');
const {Crypto} = require("./utils/crypto");

const password = "1234567890";
const keystore = JSON.parse(fs.readFileSync("./keystore.json", 'utf8'));

const privateKey = Crypto.getPrivateKeyFromKeyStore(keystore, password);

console.log("private key:", privateKey);