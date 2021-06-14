pragma solidity ^0.8.0;

import "./ERC721.sol";

contract Music is ERC721{
    uint256 public tokenID;
    struct PriceStruct{
        uint256 buy;
        uint256 rent;
    }
    struct SubownerStruct{

    uint256 counter;
    
    mapping(uint256 =>address) Subowner;
    mapping (address =>uint256)IdFinder;
    }
    
    struct RenterStruct{
    uint256 counter;
    mapping(uint256 =>address) Renter; 
    mapping(address => uint) Deadline;
    mapping (address =>uint256)IdFinder;
    }

    mapping (uint256 => string) public _tokenURIs;
    mapping (uint256 => PriceStruct) Prices;
    mapping (uint256 => SubownerStruct) Subowners;
    mapping (uint256 => RenterStruct) Renters;
   
    
    constructor() public ERC721 ("Music", "MSC"){
        tokenID=0;
    }
    
    function _setTokenURI(uint256 tokenId, string memory _tokenURI) internal virtual {
            require(_exists(tokenId), "ERC721Metadata: URI set of nonexistent token");
            _tokenURIs[tokenId] = _tokenURI;
        }
    function _setTokenPrice(uint256 tokenId, uint256 targetprice, uint256 targetrent) internal virtual  {
            require(_exists(tokenID), "ERC721Metadata: Price set of nonexistent token");
          Prices[tokenId].buy=targetprice; 
          Prices[tokenId].rent=targetrent;
        }    
        
    function _getBuyPrice(uint256 tokenId) public view returns (uint256){
        require(_exists(tokenId), "ERC721Metadata: tokenId does not exist");
        return Prices[tokenId].buy;
        
    }  
    
     function _getRentPrice(uint256 tokenId) public view returns (uint256){
        require(_exists(tokenId), "ERC721Metadata: tokenId does not exist");
        return Prices[tokenId].rent;
        
    }  
    
   
    function createMusicToken(string memory tokenURI, uint256 targetprice, uint256 targetrent) public returns (uint256) {
        uint256 personalID=tokenID;
        _safeMint(msg.sender,personalID);
        _setTokenURI(personalID,tokenURI);
        _setTokenPrice(personalID,targetprice,targetrent);
        Subowners[personalID].counter=0;
        Renters[personalID].counter=0;
        tokenID=tokenID+1;
        return personalID;
    }
    
    function buyToken(uint256 tokenId) public payable returns (uint256){
        require(_exists(tokenId), "ERC721Metadata: tokenId does not exist");
        if(msg.value>=_getBuyPrice(tokenId)){
        payable(ownerOf(tokenId)).transfer(msg.value);
        
        uint256 _counter= Subowners[tokenId].counter;
        Subowners[tokenId].Subowner[_counter]=msg.sender;
        Subowners[tokenId].IdFinder[msg.sender]=_counter;
        Subowners[tokenId].counter=Subowners[tokenId].counter+1;
        return _counter;
        }
        else{
        payable(msg.sender).transfer(msg.value); 
        return 100000000000000000000;
        }
    }
    
    
    
    function rentToken(uint256 tokenId, uint256 _weeks) public payable returns (uint256){
        require(_exists(tokenId), "ERC721Metadata: tokenId does not exist");
        if(msg.value>= _weeks*_getRentPrice(tokenId)){
        payable(ownerOf(tokenId)).transfer(msg.value);
        uint256 _counter= Renters[tokenId].counter;
        Renters[tokenId].Renter[_counter]=msg.sender;
        Renters[tokenId].Deadline[msg.sender]=block.timestamp+_weeks*1 minutes;
        Renters[tokenId].IdFinder[msg.sender]=_counter;
        Renters[tokenId].counter=Renters[tokenId].counter+1;
        return _counter;
        }
        else{
        payable(msg.sender).transfer(msg.value);    
        return 100000000000000000000;
        }
        
    }
    
    function _getDeadline(uint256 tokenId, address target) public view returns (uint256){
        require(_exists(tokenId), "ERC721Metadata: tokenId does not exist");
        return Renters[tokenId].Deadline[target];
    }
    
    function _getSubOwners(uint256 tokenId, uint256 _index) public view returns (address){
        require(_exists(tokenId), "ERC721Metadata: tokenId does not exist");
        return Subowners[tokenId].Subowner[_index];
        
    } 
    
     function _getRenter(uint256 tokenId, uint256 _index) public view returns (address){
        require(_exists(tokenId), "ERC721Metadata: tokenId does not exist");
        return Renters[tokenId].Renter[_index];
        
    } 
    
     function _getMyOwnerId(uint256 tokenId) public view returns (uint256){
        require(_exists(tokenId), "ERC721Metadata: tokenId does not exist");
        return Subowners[tokenId].IdFinder[msg.sender];
        
    } 
    
    function _getMyRenterId(uint256 tokenId) public view returns (uint256){
        require(_exists(tokenId), "ERC721Metadata: tokenId does not exist");
        return Renters[tokenId].IdFinder[msg.sender];
        
    } 
    
    function _getOwnerAmmount(uint256 tokenId) public view returns (uint256){
        require(_exists(tokenId), "ERC721Metadata: tokenId does not exist");
        return Subowners[tokenId].counter;
        
    } 
    
    
   
     
    
    
    
    
} 