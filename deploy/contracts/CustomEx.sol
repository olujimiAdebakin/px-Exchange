
// SPDX-License-Identifier: MIT

pragma solidity 0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract CustomToken is ERC20 {
    constructor(string memory name, string memory symbol) ERC20(name, symbol) {
        _mint(msg.sender, 10000000 * 10**18);
    }
}

contract CustomDex {
    // custom tokens to be initialized
    string[] public tokens = ["Tether USD", "BNB", "PAX Coin", "stETH", "TRON", "PASER", "PX", "Uniswap"];

    // map to maintain the token and its instances
    mapping(string => ERC20) public tokenInstanceMap;

    uint256 ethValue = 10000000000;

    struct History {
        uint256 historyId;
        string tokenA;
        string tokenB;
        uint256 inputValue;
        uint256 outputValue;
        address userAddress;
    }

    uint256 public _historyIndex;
    mapping(uint256 => History) public histories;

    constructor() {
        for (uint i=0; i<tokens.length; i++){
            CustomToken token = new CustomToken(tokens[i], tokens[i]);
            tokenInstanceMap[tokens[i]] = token;
        }
    }

    function getBalance(string memory tokenName, address _address) public view returns(uint256){
        return tokenInstanceMap[tokenName].balanceOf(_address);
    }

    function getTotalSupply(string memory tokenName) public view returns (uint256){
        return tokenInstanceMap[tokenName].totalSupply();
    }
   
    function getName(string memory tokenName) public view returns (string memory){
        return tokenInstanceMap[tokenName].name();
    }

    function getEthBalance(string memory tokenName, address _address) public view returns(uint256){
        return address(this).balance;
    }

    function _transactionHistory(string memory tokenA, string memory tokenB, uint256 inputValue, uint256 outputValue) internal {
        _historyIndex++;
        uint256 _historyId = _historyIndex;
        History storage history = histories[_historyId];

        history.historyId = _historyId;
        history.tokenA = tokenA;
        history.tokenB = tokenB;
        history.inputValue = inputValue;
        history.outputValue = outputValue;
        history.userAddress = msg.sender;
    }

    function swapEthToToken(string memory tokenName) public payable returns (uint256){
        uint256 inputValue = msg.value;
        uint256 outputValue = (inputValue / ethValue) * 10 ** 18; //convert to 18 decimal places
        require(tokenInstanceMap[tokenName].transfer(msg.sender, outputValue), "Transfer failed");

        string memory etherToken = "Ether";

        _transactionHistory(etherToken, tokenName, inputValue, outputValue);
        return outputValue;
    }

    function swapTokenToEth(string memory tokenName, uint256 _amount) public returns (uint256){
        // convert the token amount to (ethValue) to exact amount (10)
        uint256 exactAmount = _amount / 10 ** 18;
        uint256 ethToBeTransferred = exactAmount * ethValue;
        require(address(this).balance >= ethToBeTransferred, "DEX is running low on balance");

        payable(msg.sender).transfer(ethToBeTransferred);
        require(tokenInstanceMap[tokenName].transferFrom(msg.sender, address(this), _amount), "TransferFrom failed");

        string memory etherToken = "Ether";

        _transactionHistory(tokenName, etherToken, _amount, ethToBeTransferred);
        return ethToBeTransferred;
    }

    function swapTokenToToken(string memory srcTokenName, string memory destTokenName, uint256 _amount) public {
        require(tokenInstanceMap[srcTokenName].transferFrom(msg.sender, address(this), _amount), "Source token transfer failed");
        require(tokenInstanceMap[destTokenName].transfer(msg.sender, _amount), "Destination token transfer failed");

        _transactionHistory(srcTokenName, destTokenName, _amount, _amount);
    }

    function getAllHistory() public view returns (History[] memory){
        uint256 itemCount = _historyIndex;
        uint256 currentIndex = 0;

        History[] memory items = new History[](itemCount);
        for (uint256 i = 0; i < itemCount; i++){
            uint256 currentId = i + 1;
            History storage currentItem = histories[currentId];
            items[currentIndex] = currentItem;
            currentIndex++;
        }
        return items;
    }
}
