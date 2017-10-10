const Web3 = require('web3');
var web3 = new Web3();
 
 
module.exports = {
  init: function(){
    web3.setProvider(new web3.providers.HttpProvider('http://localhost:8000', 0, "0x8d2e50cd0e654399229cF88cb05E0F3074928FCe", "michiel"));
  },
 
  getAccounts: function(){
    return web3.eth.getAccounts(function(err, accs) {
      if (err != null) {
        return 'There was an error fetching your accounts.';
      }else if (accs.length == 0) {
        return 'Couldn\'t get any accounts! Make sure your Ethereum client is configured correctly. Or make some accounts on your node.';
      } else {

        accs.forEach(acc => {
          web3.eth.getBalance(acc)
            .then(balance => {
              console.log(balance)
            })
        })

      }
    });
  }
}
