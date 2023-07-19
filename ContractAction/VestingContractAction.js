import Web3 from "web3";
import { abiVesting } from "./ABI/Vesting";
import { abiRedeem } from "./ABI/Redeem";

// RPC, Address & ABI
var RPCUrl = "https://data-seed-prebsc-1-s1.binance.org:8545";
var ContractaddressVesting = "0xFEb2CFE148bcc6b1103575b25706d1ae9Fc06749";
const abivesting = abiVesting;

// HttpProvider
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



//dev:  Vesting
//dev: set Claim Vested
export const setClaimVested = async () => {
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
        const contracts = new web3.eth.Contract(abivesting, ContractaddressVesting);
        console.log(contracts);
        const claimvested = await contracts.methods.claimVested().send({ from: account });
        console.log("claimvested", claimvested);

        if(claimvested){
                window.location.reload();
        }
    }
};
//dev: get Claimable Vested
// function defined but never used nor such function in contract.
export const getClaimableVested = async () => {
    console.log("getClaimableVested");
    let contracts = new web3.eth.Contract(abivesting, ContractaddressVesting);
    const accounts = await window.ethereum.request({
        method: "eth_accounts",
    });
    const account = accounts[0];
    console.log("getClaimableVested_account", account);
    const response = await contracts.methods.claimable(account).call();
    console.log("getClaimableVested", response);
    let claimableVested = await web3.utils.fromWei(response, "ether");
    console.log("claimableVested", response);
    let Claimablevested = parseFloat(claimableVested).toFixed(4);
    console.log("Claimablevested", response);
    return Claimablevested;
};
//dev: get Remaining Amount Vested
export const getRemainingAmountVested = async () => {
    console.log("getRemainingAmountVested");
    let contracts = new web3.eth.Contract(abivesting, ContractaddressVesting);
    const accounts = await window.ethereum.request({
        method: "eth_accounts",
    });
    const account = accounts[0];
    console.log("getRemainingAmountVested_account", account);
    const response = await contracts.methods.remainingAmount(account).call();
    console.log("getRemainingAmountVested", response);
    let remainingAmountVested = await web3.utils.fromWei(response, "ether");
    console.log("remainingAmountVested", response);
    let remainingAmountvested = parseFloat(remainingAmountVested).toFixed(4);
    console.log("remainingAmountvested", response);
    let remainingAmountVetsed = parseFloat(remainingAmountvested)
    return remainingAmountVetsed;
};

export const getNextRedeemTime = async () => {
    console.log("getNextRedeemTime");
    let contracts = new web3.eth.Contract(abivesting, ContractaddressVesting);
    const accounts = await window.ethereum.request({
        method: "eth_accounts",
    });
    const account = accounts[0];
    console.log("getNextRedeemTime_account", account);
    const response = await contracts.methods.nextRedeemTime(account).call();
    console.log("getNextRedeemTime", response);
    return response;
};