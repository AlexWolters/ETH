### Getting Started for Testing
1. Install remixd on your pc
```console
$ npm install -g @remix-project/remixd
```
2. run 
```console
$ remixd -s <path to this folder>
```
3. open http://remix.ethereum.org/
4. Select under Workspaces "conect to localhost"
5. Find Music.sol which is located under ERC\openzeppelin-contracts\contracts\token\ERC721 and open it
6. Under "Solidity Compiler", compile Music.sol
7. Under "Deploy and Run Contracts" change from "JacaScript VM" to "Injected Web3". Metamask should pop out. Sign in or install Metamask
8. We used the Ropsten Test Net, if you dont have any Test Ether, visit https://faucet.ropsten.be/
9. Deploy the contract Music.sol and you are ready to interact with it!
Note: When executing payable functions as eg. BuyToken(...) , define a value. This value is the additional Ether you send beside the Gas Price. For some reason the selected value is sometimes less then the value send via Metamask, so some execution may fail. Slightly increase this value then.
### Testing Example
1. Create first NFT, define a purchase and subscription price and a TokenURi, which is just a string. (The First NFT TokenId is 1)
2. Use Getters to check these values.
3. Try Purchasing or Renting from an other Account.
4. Check if the Ether has been transfered and if the buyers Address is listed under _getSubOwners()  (The First Buyer or Renter Id is 1)
5. Try the remaining Functions and have Fun!