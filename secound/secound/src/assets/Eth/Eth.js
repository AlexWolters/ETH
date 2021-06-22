

var result2;
function foo(input){
result2=input;
console.log(input);
}

function boo(input){
result2=input.c[0];
console.log(typeof(input.c[0]));
}



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

async function createToken(abi,adr,uri,Web3,price,rent){
let web3 = new Web3(window.ethereum);
web3.eth.defaultAccount=web3.eth.accounts[0];
let contractInstance = web3.eth.contract(abi).at(adr);
let result=await contractInstance.createMusicToken.sendTransaction(uri,price,rent,{ from: web3.eth.defaultAccount },
  (err, res) => { return res; });
return result ;

}

async function OwnerOf(abi,adr,tokenId){

let web3 = new Web3(window.ethereum);
web3.eth.defaultAccount=web3.eth.accounts[0];
let contractInstance = web3.eth.contract(abi).at(adr);
let result="string";
contractInstance.ownerOf.call(tokenId,{ from: web3.eth.defaultAccount  },
  (err, res) => { console.log(res);
  return res;
  });

}



async function getTokenUri(abi,adr,tokenId){

let web3 = new Web3(window.ethereum);
web3.eth.defaultAccount=web3.eth.accounts[0];
let contractInstance = web3.eth.contract(abi).at(adr);
let result=await contractInstance._tokenURIs.call(tokenId,{ from: web3.eth.defaultAccount },
(err, res)=>{foo(res);
}
);

return result2;

}


//BUYING
async function buyToken(abi,adr,tokenId,price){

let web3 = new Web3(window.ethereum);
web3.eth.defaultAccount=web3.eth.accounts[0];
const contractInstance = web3.eth.contract(abi).at(adr);
let result=await contractInstance.buyToken.sendTransaction(tokenId,{ from: web3.eth.defaultAccount, value: price},
function(err, res){console.log(res);});
return result ;

}


async function getPrice(abi,adr,tokenId){

let web3 = new Web3(window.ethereum);
web3.eth.defaultAccount=web3.eth.accounts[0];
let contractInstance = web3.eth.contract(abi).at(adr);
let result="string";
contractInstance._getBuyPrice.call(tokenId,{ from: web3.eth.defaultAccount  },
  (err, res) => { foo(res);
  
  });
  return result2;
}


async function getMyOwnerId(abi,adr,tokenId){

let web3 = new Web3(window.ethereum);
web3.eth.defaultAccount=web3.eth.accounts[0];
let contractInstance = web3.eth.contract(abi).at(adr);
let result="string";
contractInstance._getMyOwnerId.call(tokenId,{ from: web3.eth.defaultAccount  },
  (err, res) => { foo(res);
  return res;
  });
  return result2;
}

async function getSubOwner(abi,adr,tokenId,index){

let web3 = new Web3(window.ethereum);
web3.eth.defaultAccount=web3.eth.accounts[0];
let contractInstance = web3.eth.contract(abi).at(adr);
let result="string";
contractInstance._getSubOwners.call(tokenId,index,{ from: web3.eth.defaultAccount  },
  (err, res) => { foo(res);
  return res;
  });
  return result2;

}
//RENTING
async function getRent(abi,adr,tokenId){

let web3 = new Web3(window.ethereum);
web3.eth.defaultAccount=web3.eth.accounts[0];
let contractInstance = web3.eth.contract(abi).at(adr);
let result="string";
contractInstance._getRentPrice.call(tokenId,{ from: web3.eth.defaultAccount  },
  (err, res) => { foo(res);
  return res;
  });
return result2;
}

async function getRenter(abi,adr,tokenId,index){

let web3 = new Web3(window.ethereum);
web3.eth.defaultAccount=web3.eth.accounts[0];
let contractInstance = web3.eth.contract(abi).at(adr);
let result="string";
contractInstance._getRenter.call(tokenId,index,{ from: web3.eth.defaultAccount  },
  (err, res) => { foo(res);
  return res;
  });
  return result2;

}



async function getDeadline(abi,adr,tokenId, target){

let web3 = new Web3(window.ethereum);
web3.eth.defaultAccount=web3.eth.accounts[0];
let contractInstance = web3.eth.contract(abi).at(adr);
let result="string";
contractInstance._getDeadline.call(tokenId,target,{ from: web3.eth.defaultAccount  },
  (err, res) => { foo(res);
  return res;
  });
  return result2;
}

async function getMyRenterId(abi,adr,tokenId){

let web3 = new Web3(window.ethereum);
web3.eth.defaultAccount=web3.eth.accounts[0];
let contractInstance = web3.eth.contract(abi).at(adr);
let result="string";
contractInstance._getMyRenterId.call(tokenId,{ from: web3.eth.defaultAccount  },
  (err, res) => { foo(res);
  return res;
  });
  return result2;
}


async function rentToken(abi,adr,tokenId,price, weeks){

let web3 = new Web3(window.ethereum);
web3.eth.defaultAccount=web3.eth.accounts[0];
const contractInstance = web3.eth.contract(abi).at(adr);
let result=await contractInstance.rentToken.sendTransaction(tokenId,weeks,{ from: web3.eth.defaultAccount, value: price},
function(err, res){console.log(res);});
return result ;

}


