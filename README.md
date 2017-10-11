# web3-ethereum-api-test
Express app for testing connection with web3 to Ethereum private test network over RPCpath

# Usage
npm install

npm start

Get list of accounts (and logged balances in console):
``http://localhost:3100/api/accounts``

Notes:
Start mist: mist --rpc ~/eth/priv/data/geth.ipc
Don't forget to start ethereum with script (./START\_BLOCKCHAIN_DEAMON)

# Credits
Credits to Kevin Leyssens for doing research and providing code examples.
