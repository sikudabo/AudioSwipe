// SPDX-License-Identifier: UNLICENSED
pragma solidity <=0.8.19;

contract CoinExample {
  address public minter;
  mapping (address => uint) public balances;
  constructor() public {
    minter = msg.sender;
  }
  event Sent(address from, address to, uint amount);

  function mint(address receiver, uint amount) public {
    require(msg.sender == minter, "Only the Minter can mine coins");
    balances[receiver] += amount;
  }

  function send(address from, address to, uint amount) public {
    if (amount > balances[msg.sender]) {
      revert("Insufficient Balance");
    }

    balances[from] -= amount;
    balances[to] += amount;
    emit Sent(from, to, amount);
  }

  function getBalance() public view returns (uint) {
    return balances[msg.sender];
  }
}