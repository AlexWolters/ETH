





async function getAccount(){
if (typeof window.ethereum !=='undefined'){
console.log('Metamask is installed');
}else{
console.log("install Metamask");
}
const accounts = await ethereum.request({method: 'eth_requestAccounts'});
const account = accounts[0];
console.log(typeof(account));
return account;
}

async function getBalance(acc){
const balance= await ethereum.request({
method: 'eth_getBalance',
params: [acc, "latest"],
});
const read= parseInt(balance)/10**18;
return read;
}

async function createToken(abi,adr,uri,Web3){

const web3 = new Web3(window.ethereum);
web3.eth.defaultAccount=web3.eth.accounts[0];
const contractInstance = web3.eth.contract(abi).at(adr);
return contractInstance.createMusicToken.sendTransaction(uri,{ from: web3.eth.defaultAccount  },
  (err, res) => { return res; });

}


