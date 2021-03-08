require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy prize flee venture strong cost snow coconut hard light army gesture'; 
let testAccounts = [
"0xecf41d10cc29fdcea9896204e3cb51f00c07ef59d50b9d6954646198f9c4b340",
"0x7e6d26fa6d61c6d8fbf2c8b296ce0380e0dffae1f554339bd3406df54a3d6b5c",
"0x85e1c9da7e1097df9be5af813b468cf9e2e437d9b5d63a98bdcdad787a50ce6c",
"0xd5f098f57db658e0d28b724f3f9efa54b20c3a33d1c9f9e5a7207e75e132a6a7",
"0x1b5af9c4740e649194feca9dcbdcf44671b6c2620d20a54b4977004921c1a6df",
"0x7ad46bd56b58a427bf8e3b5232cde9f46efa69ecdac537c03a9337f598fb3b9b",
"0xb381b0ad0f291245e1d19d725b22868e294141a0b7b28f3c02f95b9b5870daf5",
"0xb84cd8534622b3282a995f260932d45321d8c4d21557fe26a6b64e8fe1472c63",
"0x11324b5ad918c5eeac5477872f912e174ec5fd775654c7f9b5599fe223ee8ff8",
"0xc723e30ff371279ddb76620c1d02e8116e79974e5b99ea907a7eb99521c0e916"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
