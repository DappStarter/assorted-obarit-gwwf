require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture oppose swift top edge rare remember unable gesture nation fringe ghost'; 
let testAccounts = [
"0x0801f54f6df0446d8f060d9f227f2b10fca2967846c096901346864234f6ffff",
"0x7877214b758bc887ea3a83fb8eedc3631f4ab4f5c92897a584740476b6593f06",
"0x1a1e7c31c5ab417be6ddb775d57cf0b8adec3cdf22d0722e6bd5a9d3a71b9c11",
"0xb60d5af5c0126143c6e7d4d0a7a36841429b4e45d461c83ac361c2ce3471d094",
"0xaf46b6be65ef260809b1e5ee850624cb63169627e20976872e61637dd8b6ea68",
"0x6cfed1c0f110166c03fab0a60d8f9442ba3d006e13d16ed5d8f8259a23c0dac7",
"0xd67642c25e852db8a7014570562fb5e33b81905e335ad85758b04d90882eed56",
"0xe51a21bf1501db84df80d61ed62de84afb83338bf5e4b06edc200faba8f021db",
"0x2a970b7be599cbc6c3530b2eee1ccf5cb581cb3e7e8692c440272429feed0783",
"0x254c54033a0e7f5945f2b7c09688d145312d6cb1c360c1930841939290ae1fb0"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


