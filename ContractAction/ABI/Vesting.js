//dev: ABI- abiVesting data
export const abiVesting = [{
  "inputs": [{
      "internalType": "address",
      "name": "_preevcAddress",
      "type": "address"
  }, {
      "internalType": "address",
      "name": "_evcAddress",
      "type": "address"
  }],
  "stateMutability": "nonpayable",
  "type": "constructor"
}, {
  "anonymous": false,
  "inputs": [{
      "indexed": true,
      "internalType": "address",
      "name": "previousOwner",
      "type": "address"
  }, {
      "indexed": true,
      "internalType": "address",
      "name": "newOwner",
      "type": "address"
  }],
  "name": "OwnershipTransferred",
  "type": "event"
}, {
  "anonymous": false,
  "inputs": [{
      "indexed": false,
      "internalType": "address",
      "name": "sender",
      "type": "address"
  }, {
      "indexed": false,
      "internalType": "uint256",
      "name": "amount",
      "type": "uint256"
  }],
  "name": "RedeemVested",
  "type": "event"
}, {
  "inputs": [],
  "name": "EVCToken",
  "outputs": [{
      "internalType": "contract IERC20",
      "name": "",
      "type": "address"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [],
  "name": "claimVestPercentage",
  "outputs": [{
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [],
  "name": "claimVestTime",
  "outputs": [{
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [],
  "name": "claimVested",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [{
      "internalType": "address",
      "name": "_address",
      "type": "address"
  }],
  "name": "claimableAmount",
  "outputs": [{
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{
      "internalType": "address",
      "name": "",
      "type": "address"
  }],
  "name": "nextRedeemTime",
  "outputs": [{
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [],
  "name": "owner",
  "outputs": [{
      "internalType": "address",
      "name": "",
      "type": "address"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [],
  "name": "preevcToken",
  "outputs": [{
      "internalType": "contract preEVCToken",
      "name": "",
      "type": "address"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{
      "internalType": "address",
      "name": "_address",
      "type": "address"
  }],
  "name": "remainingAmount",
  "outputs": [{
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [],
  "name": "renounceOwnership",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [{
      "internalType": "uint256",
      "name": "_claimVestPercentage",
      "type": "uint256"
  }],
  "name": "setClaimVestPercentage",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [{
      "internalType": "uint256",
      "name": "_claimVestTime",
      "type": "uint256"
  }],
  "name": "setClaimVestTime",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [{
      "internalType": "address",
      "name": "newOwner",
      "type": "address"
  }],
  "name": "transferOwnership",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}]