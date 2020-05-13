pragma solidity >=0.4.21 <0.7.0;

contract MyDapp {
  uint count = 0;

  function increment() public {
    count = count + 1;
  }

  function get() public view returns (uint _count) {
    return count;
  }
}
