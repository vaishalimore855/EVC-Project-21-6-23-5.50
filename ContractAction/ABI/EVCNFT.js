//dev:  ABI- EVCNFT  Data
export const abiEVCNFT = [{
    "inputs": [{
        "internalType": "string",
        "name": "_name",
        "type": "string"
    }, {
        "internalType": "string",
        "name": "_symbol",
        "type": "string"
    }],
    "stateMutability": "nonpayable",
    "type": "constructor"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
    }, {
        "indexed": true,
        "internalType": "address",
        "name": "approved",
        "type": "address"
    }, {
        "indexed": true,
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
    }],
    "name": "Approval",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
    }, {
        "indexed": true,
        "internalType": "address",
        "name": "operator",
        "type": "address"
    }, {
        "indexed": false,
        "internalType": "bool",
        "name": "approved",
        "type": "bool"
    }],
    "name": "ApprovalForAll",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "internalType": "address",
        "name": "recipient",
        "type": "address"
    }, {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
    }],
    "name": "Burn",
    "type": "event"
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
        "indexed": true,
        "internalType": "address",
        "name": "from",
        "type": "address"
    }, {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
    }, {
        "indexed": true,
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
    }],
    "name": "Transfer",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": false,
        "internalType": "uint256",
        "name": "_amountA",
        "type": "uint256"
    }],
    "name": "amountA",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": false,
        "internalType": "uint256",
        "name": "_amountB",
        "type": "uint256"
    }],
    "name": "amountB",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": false,
        "internalType": "address",
        "name": "user",
        "type": "address"
    }, {
        "indexed": false,
        "internalType": "address",
        "name": "directReferrer",
        "type": "address"
    }, {
        "indexed": false,
        "internalType": "uint256",
        "name": "rewardAmount",
        "type": "uint256"
    }],
    "name": "directReferralRewardTransferred",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": false,
        "internalType": "address",
        "name": "user",
        "type": "address"
    }, {
        "indexed": false,
        "internalType": "address",
        "name": "indirectReferrer",
        "type": "address"
    }, {
        "indexed": false,
        "internalType": "uint256",
        "name": "rewardAmount",
        "type": "uint256"
    }],
    "name": "indirectReferralRewardTransferred",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": false,
        "internalType": "uint256",
        "name": "evc",
        "type": "uint256"
    }],
    "name": "test",
    "type": "event"
}, {
    "inputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "name": "NFT_Counters",
    "outputs": [{
        "internalType": "uint256",
        "name": "_value",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "name": "NFT_Quantities",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "_token",
    "outputs": [{
        "internalType": "address",
        "name": "",
        "type": "address"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "to",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
    }],
    "name": "approve",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "owner",
        "type": "address"
    }],
    "name": "balanceOf",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "baseExtension",
    "outputs": [{
        "internalType": "string",
        "name": "",
        "type": "string"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "baseURI",
    "outputs": [{
        "internalType": "string",
        "name": "",
        "type": "string"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address[]",
        "name": "_persons",
        "type": "address[]"
    }, {
        "internalType": "uint256[]",
        "name": "RBpercentages",
        "type": "uint256[]"
    }, {
        "internalType": "uint256",
        "name": "_mintAmount",
        "type": "uint256"
    }],
    "name": "busdAndEvcRB",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "uint256",
        "name": "_perc",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "_mintAmount",
        "type": "uint256"
    }],
    "name": "buyandBurnPercAdmin",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "_user",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "_value",
        "type": "uint256"
    }],
    "name": "changeInvestment",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "_ref",
        "type": "address"
    }, {
        "internalType": "address[]",
        "name": "to",
        "type": "address[]"
    }],
    "name": "createReferralArray",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [],
    "name": "delegate",
    "outputs": [{
        "internalType": "bool",
        "name": "",
        "type": "bool"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "delegateAddress",
    "outputs": [{
        "internalType": "address",
        "name": "",
        "type": "address"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "name": "evcBurnDetails",
    "outputs": [{
        "internalType": "uint256",
        "name": "cumulativeBurnAmount",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "timestamp",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "name": "evcBurnKeys",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
    }],
    "name": "getApproved",
    "outputs": [{
        "internalType": "address",
        "name": "",
        "type": "address"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "user",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "timeFrom",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "timeTo",
        "type": "uint256"
    }],
    "name": "getMintedLevelsByTime",
    "outputs": [{
        "components": [{
            "internalType": "uint256",
            "name": "level",
            "type": "uint256"
        }, {
            "internalType": "uint256",
            "name": "timestamp",
            "type": "uint256"
        }],
        "internalType": "struct Avtars.LevelMint[]",
        "name": "",
        "type": "tuple[]"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "_user",
        "type": "address"
    }],
    "name": "getMyReferrer",
    "outputs": [{
        "internalType": "address",
        "name": "",
        "type": "address"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "uint256",
        "name": "_level",
        "type": "uint256"
    }],
    "name": "getNFTCost",
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
        "name": "referrer",
        "type": "address"
    }],
    "name": "getReferrals",
    "outputs": [{
        "internalType": "address[]",
        "name": "",
        "type": "address[]"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "user",
        "type": "address"
    }],
    "name": "getTeamSaleVolume",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "uint256",
        "name": "timeFrom",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "timeTo",
        "type": "uint256"
    }],
    "name": "getTotalBurnByTime",
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
        "name": "_user",
        "type": "address"
    }],
    "name": "getTotalPartners",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "uint256",
        "name": "timeFrom",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "timeTo",
        "type": "uint256"
    }],
    "name": "getUsersByMintTime",
    "outputs": [{
        "internalType": "address[]",
        "name": "",
        "type": "address[]"
    }, {
        "internalType": "uint256[]",
        "name": "",
        "type": "uint256[]"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }, {
        "internalType": "address",
        "name": "",
        "type": "address"
    }],
    "name": "hasTokens",
    "outputs": [{
        "internalType": "bool",
        "name": "",
        "type": "bool"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "",
        "type": "address"
    }],
    "name": "individualEVCswapVesting",
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
    }, {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "name": "individualOwnedNFT",
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
    "name": "individualRbEarning",
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
    "name": "individualunilevelEarning",
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
        "name": "owner",
        "type": "address"
    }, {
        "internalType": "address",
        "name": "operator",
        "type": "address"
    }],
    "name": "isApprovedForAll",
    "outputs": [{
        "internalType": "bool",
        "name": "",
        "type": "bool"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "",
        "type": "address"
    }],
    "name": "joinTimestamp",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "uint256",
        "name": "_level",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "_mintPrice",
        "type": "uint256"
    }, {
        "internalType": "bool",
        "name": "_delegate",
        "type": "bool"
    }, {
        "internalType": "address",
        "name": "_referrer",
        "type": "address"
    }],
    "name": "mintNFT",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "uint256",
        "name": "_level",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "_mintPrice",
        "type": "uint256"
    }, {
        "internalType": "bool",
        "name": "_delegate",
        "type": "bool"
    }, {
        "internalType": "address",
        "name": "_referrer",
        "type": "address"
    }, {
        "internalType": "address[]",
        "name": "rbmembers",
        "type": "address[]"
    }, {
        "internalType": "uint256[]",
        "name": "rbpercentages",
        "type": "uint256[]"
    }],
    "name": "mintNFT1",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "name": "mintUserDetails",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "name",
    "outputs": [{
        "internalType": "string",
        "name": "",
        "type": "string"
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
    "inputs": [{
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
    }],
    "name": "ownerOf",
    "outputs": [{
        "internalType": "address",
        "name": "",
        "type": "address"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "pancakeRouterAdress",
    "outputs": [{
        "internalType": "address",
        "name": "",
        "type": "address"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "bool",
        "name": "_state",
        "type": "bool"
    }],
    "name": "pause",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [],
    "name": "paused",
    "outputs": [{
        "internalType": "bool",
        "name": "",
        "type": "bool"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "_account",
        "type": "address"
    }],
    "name": "recentlyJoined",
    "outputs": [{
        "internalType": "address[]",
        "name": "",
        "type": "address[]"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "",
        "type": "address"
    }],
    "name": "referralCount",
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
        "name": "_user",
        "type": "address"
    }],
    "name": "removeWhitelistUser",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "from",
        "type": "address"
    }, {
        "internalType": "address",
        "name": "to",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
    }],
    "name": "safeTransferFrom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "from",
        "type": "address"
    }, {
        "internalType": "address",
        "name": "to",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
    }, {
        "internalType": "bytes",
        "name": "data",
        "type": "bytes"
    }],
    "name": "safeTransferFrom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "operator",
        "type": "address"
    }, {
        "internalType": "bool",
        "name": "approved",
        "type": "bool"
    }],
    "name": "setApprovalForAll",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "string",
        "name": "_newBaseExtension",
        "type": "string"
    }],
    "name": "setBaseExtension",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "string",
        "name": "_baseURI",
        "type": "string"
    }],
    "name": "setBaseURI",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "uint256[]",
        "name": "newCosts",
        "type": "uint256[]"
    }],
    "name": "setCost",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "_delegateAddress",
        "type": "address"
    }],
    "name": "setDelegateAddress",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "_user",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
    }],
    "name": "setIndividualevcswaped",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "_useradd",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "_level",
        "type": "uint256"
    }],
    "name": "setNftLevel",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "_newpancakeRouterAdress",
        "type": "address"
    }],
    "name": "setPancakeRouterAdress",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "_newtoken",
        "type": "address"
    }],
    "name": "setToken",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "_newtoken0",
        "type": "address"
    }],
    "name": "setToken0",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "_newtoken1",
        "type": "address"
    }],
    "name": "setToken1",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "_vestingcontract",
        "type": "address"
    }],
    "name": "setVestingContract",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "bytes4",
        "name": "interfaceId",
        "type": "bytes4"
    }],
    "name": "supportsInterface",
    "outputs": [{
        "internalType": "bool",
        "name": "",
        "type": "bool"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "symbol",
    "outputs": [{
        "internalType": "string",
        "name": "",
        "type": "string"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "token0",
    "outputs": [{
        "internalType": "address",
        "name": "",
        "type": "address"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "token1",
    "outputs": [{
        "internalType": "address",
        "name": "",
        "type": "address"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "uint256",
        "name": "index",
        "type": "uint256"
    }],
    "name": "tokenByIndex",
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
        "name": "owner",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "index",
        "type": "uint256"
    }],
    "name": "tokenOfOwnerByIndex",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
    }],
    "name": "tokenURI",
    "outputs": [{
        "internalType": "string",
        "name": "",
        "type": "string"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "totalSupply",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "uint256",
        "name": "_level",
        "type": "uint256"
    }],
    "name": "totalSupplyOfLevel",
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
        "name": "from",
        "type": "address"
    }, {
        "internalType": "address",
        "name": "to",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
    }],
    "name": "transferFrom",
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
}, {
    "inputs": [{
        "internalType": "address",
        "name": "",
        "type": "address"
    }],
    "name": "userInvestment",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "vestingContract",
    "outputs": [{
        "internalType": "address",
        "name": "",
        "type": "address"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "",
        "type": "address"
    }],
    "name": "vestingTransfers",
    "outputs": [{
        "internalType": "address",
        "name": "referrer",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "evcTransferAmount",
        "type": "uint256"
    }, {
        "internalType": "address",
        "name": "vestingContract",
        "type": "address"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "_owner",
        "type": "address"
    }],
    "name": "walletOfOwner",
    "outputs": [{
        "internalType": "uint256[]",
        "name": "",
        "type": "uint256[]"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "_user",
        "type": "address"
    }],
    "name": "whitelistUser",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "",
        "type": "address"
    }],
    "name": "whitelisted",
    "outputs": [{
        "internalType": "bool",
        "name": "",
        "type": "bool"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "withdraw",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
}]