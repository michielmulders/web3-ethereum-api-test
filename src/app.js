const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const web3service =require('./services/web3.service.js');
const Web3 = require('web3');
const accounts = require('./routes/accounts');

const port = process.env.port || 3100;

app.use(bodyParser.json());


app.use('/api/accounts',accounts);

app.get('/', (req, res) =>{
 res.send('Service is running');
})

app.listen(port, () => {
 console.log('started on port: ' + port );
 web3service.init();
});

// Start mist: mist --rpc ~/eth/priv/data/geth.ipc
// Don't forget to start ethereum with script (./START..)