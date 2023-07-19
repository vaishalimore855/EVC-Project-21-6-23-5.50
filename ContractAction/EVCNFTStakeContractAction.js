
import Web3 from "web3";
import { abiEVCNFTStake } from "./ABI/EVCNFTStake"

//dev: RPC, Address & ABI
var RPCUrl = "https://data-seed-prebsc-2-s2.binance.org:8545";
var ContractaddressEVCNftStake = "0xD73d15FB41c66F792F93b931695E836Bc19f7064";
const abiEVCNftStake = abiEVCNFTStake;

//dev: HttpProvider
var web3 = new Web3(new Web3.providers.HttpProvider(RPCUrl));

//dev: CurrentProvider
const detectCurrentProvider = () => {
    let provider;
    if (window.ethereum) {
        provider = window.ethereum;
    } else if (window.web3) {
        provider = window.web3.currentProvider;
    } else {
        console.log("Non-ethereum browser detected. You should install Metamask");
    }
    return provider;
};



//dev: NFT Stake

export const setStakeNFT = async (_id) => {
    console.log("_idStakeNFT", _id);
    if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        await window.ethereum.request({ method: "eth_requestAccounts" });
        //dev: Get the selected account
        const accounts = await window.ethereum.request({ method: "eth_accounts" });
        const account = accounts[0];
        const currentChainId = await web3.eth.net.getId();
        if (currentChainId !== 97) {
            await web3.currentProvider.request({
                method: "wallet_switchEthereumChain",
                params: [{ chainId: Web3.utils.toHex(97) }],
            });
        }
        const contracts = new web3.eth.Contract(abiEVCNftStake, ContractaddressEVCNftStake);
        console.log(contracts);
        const planId = 1;
        console.log("planId", planId);
        const id = _id.split(",")
        console.log("_idStakeNFT", id);
        const nftStake = await contracts.methods.stakeNFT(planId, id).send({ from: account });
        console.log("nftStake", nftStake);
    }
};
//dev: Set Withdraw NFT
export const setWithdrawNFT = async (_id) => {
    console.log("_idNFTUnStake", _id);
    if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        await window.ethereum.request({ method: "eth_requestAccounts" });
        // Get the selected account
        const accounts = await window.ethereum.request({ method: "eth_accounts" });
        const account = accounts[0];
        const currentChainId = await web3.eth.net.getId();
        if (currentChainId !== 97) {
            await web3.currentProvider.request({
                method: "wallet_switchEthereumChain",
                params: [{ chainId: Web3.utils.toHex(97) }],
            });
        }
        const contracts = new web3.eth.Contract(abiEVCNftStake, ContractaddressEVCNftStake);
        console.log(contracts);
        const id = _id.split(",")
        console.log("_idWithdrawNFT", id);
        const nftUnStake = await contracts.methods.withdrawNFT(id).send({ from: account });
        console.log("nftUnStake", nftUnStake);
        if (nftUnStake) {
            window.location.reload();
        }
        console.log("nftUnStake", nftUnStake);
    }
};

//dev: Set Claim Rewards
export const setClaimReward = async (_id) => {
    console.log("_NFTidClaim", _id);
    if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        await window.ethereum.request({ method: "eth_requestAccounts" });
        // Get the selected account
        const accounts = await window.ethereum.request({ method: "eth_accounts" });
        const account = accounts[0];
        const currentChainId = await web3.eth.net.getId();
        if (currentChainId !== 97) {
            await web3.currentProvider.request({
                method: "wallet_switchEthereumChain",
                params: [{ chainId: Web3.utils.toHex(97) }],
            });
        }
        const contracts = new web3.eth.Contract(abiEVCNftStake, ContractaddressEVCNftStake);
        console.log(contracts);
        const id = _id.split(",");
        console.log("_NFTidClaim", id);
        const idClaimValue = await contracts.methods.claimReward(id).send({ from: account });

        if (idClaimValue) {
            window.location.reload();
        }
        console.log("setClaimNFTReward", idClaimValue);
    }
};

//dev: Get Tokens of Staker
export const getTokensOfStaker = async () => {
    console.log("getTokensOfStaker");
    let contracts = new web3.eth.Contract(abiEVCNftStake, ContractaddressEVCNftStake);
    const accounts = await window.ethereum.request({
        method: "eth_accounts",
    });
    const account = accounts[0];
    console.log("gettokensOfStakerNFTIDs_account", account);
    const tokensOfStakerNFTIDs = await contracts.methods.tokensOfStaker(account).call();
    console.log("tokensOfStakerNFTIDs", tokensOfStakerNFTIDs);
    return tokensOfStakerNFTIDs;
};

export const getRewardPercentage = async (_id) => {
    console.log("getRewardPercentage");
    let contracts = new web3.eth.Contract(abiEVCNftStake, ContractaddressEVCNftStake);
    const accounts = await window.ethereum.request({
        method: "eth_accounts",
    });
    const account = accounts[0];
    console.log("getRewardPercentage_account", account);
    const rewardPercentage = await contracts.methods.getRewardPercentage(account, _id).call();
    console.log("rewardPercentage", rewardPercentage);
    return rewardPercentage;
};

//dev: Get Unclaimable Reward
export const getUnClaimableReward = async (_id) => {
    console.log("_NFTidClaim", _id);
    const contracts = new web3.eth.Contract(abiEVCNftStake, ContractaddressEVCNftStake);
    console.log(contracts);
    // const id = _id.split(",")
    // console.log("_NFTidClaim", id);
    const idUnClaimValue = await contracts.methods.getUnClaimedReward(_id).call();
    console.log("getUnClaimedReward", idUnClaimValue);
    let claimableNFTreward = await web3.utils.fromWei(idUnClaimValue, "ether");
    let UnClaimedReward = parseFloat(claimableNFTreward).toFixed(4);
    console.log("UnClaimedReward", UnClaimedReward);
    return UnClaimedReward;
};

//dev: get Next ClaimTime
export const getNextClaimTime = async (_id) => {
    console.log("_NFTidNextClaim", _id);
    const contracts = new web3.eth.Contract(abiEVCNftStake, ContractaddressEVCNftStake);
    console.log(contracts);
    const accounts = await window.ethereum.request({
        method: "eth_accounts",
    });
    const account = accounts[0];
    console.log("getNFTNextClaim_account", account);
    // const id =( _id.split(",")).toString();
    // console.log("_NFTidNextClaim", id);
    const nextClaim = await contracts.methods.nextClaimTime(account, _id).call();
    console.log("NextClaim111", nextClaim);
    const ClaimTime = window.localStorage.setItem("nextClaim ", nextClaim);
    console.log("ClaimTime", ClaimTime)
    return nextClaim;
};
//dev: get Current APR Of Plan
export const getCurrentAPROfPlan = async (_id) => {
    console.log("_NFTidClaim", _id);
    const contracts = new web3.eth.Contract(abiEVCNftStake, ContractaddressEVCNftStake);
    const planId = 1;
    console.log("planId", planId);
    const CurrentAPR = await contracts.methods.getCurrentAPR(planId).call();
    console.log("CurrentAPR", CurrentAPR);
    const CurrentAprPerc = CurrentAPR / 100;
    console.log("CurrentAprPerc", CurrentAprPerc);
    return CurrentAprPerc;
};

// export const setClaimNFTReward = async () => {
//     if (window.ethereum) {
//         const web3 = new Web3(window.ethereum);
//         await window.ethereum.request({ method: "eth_requestAccounts" });
//         // Get the selected account
//         const accounts = await window.ethereum.request({ method: "eth_accounts" });
//         const account = accounts[0];
//         const currentChainId = await web3.eth.net.getId();
//         if (currentChainId !== 97) {
//             await web3.currentProvider.request({
//                 method: "wallet_switchEthereumChain",
//                 params: [{ chainId: Web3.utils.toHex(97) }],
//             });
//         }
//         const contracts = new web3.eth.Contract(abiEVCNftStake, ContractaddressEVCNftStake);
//         console.log(contracts);
//         const claimNFTReward = await contracts.methods.claim().send({ from: account });
//         console.log("claimNFTReward", claimNFTReward);
//     }
// };

//dev: get Stake Balances NFTs
// defined but never used nor such view function in contract.
export const getStakeBalancesNFTs = async () => {
    console.log("getStakeBalancesNFTs");
    let contracts = new web3.eth.Contract(abiEVCNftStake, ContractaddressEVCNftStake);
    const accounts = await window.ethereum.request({
        method: "eth_accounts",
    });
    const account = accounts[0];
    console.log("getStakeBalancesNFTs_account", account);
    const stakeBalancesNFTs = await contracts.methods.stakeBalances(account).call();
    console.log("stakeBalancesNFTs", stakeBalancesNFTs);
    return stakeBalancesNFTs;
};

// export const getTotalClaimableNFTReward = async () => {
//     console.log("getTotalClaimableNFTReward");
//     let contracts = new web3.eth.Contract(abiEVCNftStake, ContractaddressEVCNftStake);
//     const accounts = await window.ethereum.request({
//         method: "eth_accounts",
//     });
//     const account = accounts[0];
//     console.log("getTotalClaimableNFTReward_account", account);
//     const totalClaimableReward = await contracts.methods.getTotalClaimable(account).call();
//     let totalClaimableNFTreward = await web3.utils.fromWei(totalClaimableReward, "ether");
//     let totalClaimableNFTReward = parseFloat(totalClaimableNFTreward).toFixed(4);
//     console.log("totalClaimableNFTReward", totalClaimableNFTReward);
//     return totalClaimableNFTReward;
// };

//dev: get Stake Balances NFTs
// defined but never used nor such view function in contract.
export const getFinalWithdraw = async (_id) => {
    console.log("_NFTidFinalWithdraw", _id);
    const contracts = new web3.eth.Contract(abiEVCNftStake, ContractaddressEVCNftStake);
    console.log(contracts);
    const accounts = await window.ethereum.request({
        method: "eth_accounts",
    });
    const account = accounts[0];
    console.log("getNFTFinalWithdraw_account", account);
    const id = _id.split(",")
    console.log("_NFTidFinalWithdraw", id);
    const nextClaim = await contracts.methods.final_ID_withdraw(account, id).call();
    console.log("getFinalWithdraw", nextClaim);
    return nextClaim;
};