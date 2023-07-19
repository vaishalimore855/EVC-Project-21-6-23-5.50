import React, { useState, useEffect } from "react";
import Web3 from "web3";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Link } from "react-router-dom";
import busd from "../../assets/img/dashboard/icons/busd.png";
import Avatar1 from "../../assets/img/dashboard/img/avatar-1.png";
import Avatar2 from "../../assets/img/dashboard/img/avatar-2.png";
import Avatar3 from "../../assets/img/dashboard/img/avatar-3.png";
import Avatar4 from "../../assets/img/dashboard/img/avatar-4.png";
import Avatar5 from "../../assets/img/dashboard/img/avatar-5.png";
import Avatar6 from "../../assets/img/dashboard/img/avatar-6.png";
import Avatar7 from "../../assets/img/dashboard/img/avatar-7.png";
import Avatar8 from "../../assets/img/dashboard/img/avatar-8.png";
import level1 from "../Dashboard/Mint/Images/level1.png";
import level2 from "../Dashboard/Mint/Images/level2.png";
import level3 from "../Dashboard/Mint/Images/level3.png";
import level4 from "../Dashboard/Mint/Images/level4.png";
import level5 from "../Dashboard/Mint/Images/level5.png";
import level6 from "../Dashboard/Mint/Images/level6.png";
import level7 from "../Dashboard/Mint/Images/level7.png";
import level8 from "../Dashboard/Mint/Images/level8.png";

import { setMintNft } from "../../ContractAction/EVCNFTContractAction";
import { getHasToken } from "../../ContractAction/EVCNFTContractAction";

import { setBUSD_NFTApprove } from "../../ContractAction/BUSDContractAction";
import { abiBUSD } from "../../ContractAction/ABI/BUSD";

import BlankPage from "./BlankPage";

var ContractaddressBUSD = "0x3ed64D74A7191f404d53eddAC90cCb66Ee42e45C";
var ContractaddressEVCNft = "0xa807548370F0C7B2fD3731fc7F8Ff830B7689E1D";

//dev: EVC Avatars
const evc_avatars = [
  {
    thumb: level1,
    title: "Crypto Newbies",
    evc_no: "#EVC 1",
    price: "$110",
    bv: "$100",
  },
  {
    thumb: level2,
    title: "Crypto Enthusiast",
    evc_no: "#EVC 2",
    price: "$550",
    bv: "$500",
  },
  {
    thumb: level3,
    title: "Crypto Entrepreneur",
    evc_no: "#EVC 3",
    price: "$1,100",
    bv: "$1,000",
  },
  {
    thumb: level4,
    title: "Crypto Investor",
    evc_no: "#EVC 4",
    price: "$2,750",
    bv: "$2,5OO",
  },
  {
    thumb: level5,
    title: "Crypto King",
    evc_no: "#EVC 5",
    price: "$5,500",
    bv: "$5,000",
  },
  {
    thumb: level6,
    title: "Blockchain Mogul",
    evc_no: "#EVC 6",
    price: "$11,000",
    bv: "$10,000",
  },
  {
    thumb: level7,
    title: "Bitcoin Billionaire",
    evc_no: "#EVC 7",
    price: "$27,500",
    bv: "$25,000",
  },
  {
    thumb: level8,
    title: "CryptoCap Tycoon",
    evc_no: "#EVC 8",
    price: "$55,000",
    bv: "$50,000",
  },
];

//dev: EVC Avtaras
const EvcAvatars = ({ title }) => {
  const newAddress = window.localStorage.getItem("connectedAccount");
  const [approveBUSDValue, setApproveBUSDValue] = useState();
  const [mintNftData, setMintNftData] = useState([]);
  console.log("approveBUSDValue.................", approveBUSDValue);
  const [hasToken, setHasToken] = useState([]);

  console.log("hasToken", hasToken);
  const allowanceBUSD = async () => {
    try {
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        //await window.ethereum.request({ method: "eth_requestAccounts" });
        // Get the selected account
        const accounts = await window.ethereum.request({
          method: "eth_accounts",
        });
        const account = accounts[0];
        const contracts = new web3.eth.Contract(abiBUSD, ContractaddressBUSD);
        console.log("i'm here", contracts.methods);
        console.log("account", account);
        console.log("ContractaddressEVCNft", ContractaddressEVCNft);
        const allowance = await contracts.methods
          .allowance(account, ContractaddressEVCNft)
          .call();
        console.log("allowanceBUSD", allowance);
        setApproveBUSDValue(allowance);
      }
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    allowanceBUSD();
    // setBUSD_NFTApprove();
    //dev: get Data
    const getData = async () => {
      let hasTokenInfo = await getHasToken();
      setHasToken(hasTokenInfo);
    };
    getData();
    // MintNFTData();
  }, []);

  useEffect(() => {
    document.title = title ? title : "EVC Avatars | Buy Evc Avatars";
    document.querySelector(".page-title").innerText = "Buy Evc Avatars";
  }, []);

  // POST API :Mint NFT
  // const MintNFTData = () => {
  //   const data = {
  //     useraddress: newAddress,
  //     level: "1",
  //     mintprice: "110",
  //     nftprice: "100",
  //   };

  //   fetch("http://199.247.3.230:8080/api/mintnfts", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(data),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {   
  //       setMintNftData(data);
  //       console.log(" mintnft", data);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // };
  // console.log(" minNftData", mintNftData);

  return (
    <>
      <div className="dashboard-wrap">
        <Breadcrumb>
          <li className="breadcrumb-item">
            <Link to="/">HOME</Link>
          </li>
          <Breadcrumb.Item active>Buy EVC Avatars</Breadcrumb.Item>
        </Breadcrumb>

        <div className="dash-content-area">
          <div className="text-center mb-5">
            <div className="h4">EVC AVATARS</div>
            <p className="text-secondary mb-0">
              To Buy NFT and Stake, Connect your Wallet.
            </p>
          </div>
          <div className="w-100">
            <div className="row justify-content-center g-32">
              {/*dev: Level_1 */}
              <div className="col-sm-6 col-xl-4 col-xxl-3">
                <div className="card-evc h-100 d-flex flex-column">
                  <div className="evc-avatar">
                    <img
                      src={evc_avatars[0].thumb}
                      alt=""
                      className="img-fluid w-100"
                    />
                  </div>
                  <div className="evc-info p-3 px-0 px-xs-3 pb-0 h-100 d-flex flex-column justify-content-between">
                    <div className="d-flex gap-2 flex-wrap justify-content-between mb-2">
                      <a href="#" className="evc-title">
                        {evc_avatars[0].title}
                      </a>
                      {/* <div className="evc-no">{evc_avatars[0].evc_no}</div> */}
                    </div>
                    <div className="d-flex justify-content-between">
                      <div className="evc-price">
                        <div className="evc-price-title">PRICE</div>
                        <div className="evc-price-amount">
                          <img src={busd} alt="" className="img-fluid" />
                          {evc_avatars[0].price}
                        </div>
                      </div>
                      <div className="evc-bv">
                        <div className="evc-bv-title">BV</div>
                        <div className="evc-bv-amount">
                          <img src={busd} alt="" className="img-fluid" />
                          {evc_avatars[0].bv}
                        </div>
                      </div>
                    </div>
                    {approveBUSDValue === "0" ? (
                      <div className="d-grid gap-2">
                        {/* dev: Approve Button */}
                        <button
                          className="btn btn-primary"
                          type="button"
                          onClick={() => setBUSD_NFTApprove()}
                        >
                          Approve
                        </button>
                      </div>
                    ) : hasToken[0] === true ? (
                      //dev: Buy Button
                      <div className="d-grid gap-2">
                        <button className="btn btn-dark" type="button" disabled>
                          Buy
                        </button>
                      </div>
                    ) : (
                      <div className="d-grid gap-2">
                        <button
                          className="btn btn-primary"
                          type="button"
                          onClick={() => setMintNft(1)}
                        >
                          Buy
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              {/*dev:Level_2 */}
              <div className="col-sm-6 col-xl-4 col-xxl-3">
                <div className="card-evc h-100 d-flex flex-column">
                  <div className="evc-avatar">
                    <img
                      src={evc_avatars[1].thumb}
                      alt=""
                      className="img-fluid w-100"
                    />
                  </div>
                  <div className="evc-info p-3 px-0 px-xs-3 pb-0 h-100 d-flex flex-column justify-content-between">
                    <div className="d-flex gap-2 flex-wrap justify-content-between mb-2">
                      <a href="#" className="evc-title">
                        {evc_avatars[1].title}
                      </a>
                      {/* <div className="evc-no">{evc_avatars[1].evc_no}</div> */}
                    </div>
                    <div className="d-flex justify-content-between">
                      <div className="evc-price">
                        <div className="evc-price-title">PRICE</div>
                        <div className="evc-price-amount">
                          <img src={busd} alt="" className="img-fluid" />
                          {evc_avatars[1].price}
                        </div>
                      </div>
                      <div className="evc-bv">
                        <div className="evc-bv-title">BV</div>
                        <div className="evc-bv-amount">
                          <img src={busd} alt="" className="img-fluid" />
                          {evc_avatars[1].bv}
                        </div>
                      </div>
                    </div>
                    {approveBUSDValue === "0" ? (
                      <div className="d-grid gap-2">
                        {/* dev:Approve Button   */}
                        <button
                          className="btn btn-primary"
                          type="button"
                          onClick={() => setBUSD_NFTApprove()}
                        >
                          Approve
                        </button>
                      </div>
                    ) : hasToken[1] === true ? (
                      <div className="d-grid gap-2">
                        {/* Dev:  Buy Button */}
                        <button className="btn btn-dark" type="button" disabled>
                          Buy
                        </button>
                      </div>
                    ) : (
                      <div className="d-grid gap-2">
                        <button
                          className="btn btn-primary"
                          type="button"
                          onClick={() => setMintNft(2)}
                        >
                          Buy
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              {/*dev: Level_3 */}
              <div className="col-sm-6 col-xl-4 col-xxl-3">
                <div className="card-evc h-100 d-flex flex-column">
                  <div className="evc-avatar">
                    <img
                      src={evc_avatars[2].thumb}
                      alt=""
                      className="img-fluid w-100"
                    />
                  </div>
                  <div className="evc-info p-3 px-0 px-xs-3 pb-0 h-100 d-flex flex-column justify-content-between">
                    <div className="d-flex gap-2 flex-wrap justify-content-between mb-2">
                      <a href="#" className="evc-title">
                        {evc_avatars[2].title}
                      </a>
                      {/* <div className="evc-no">{evc_avatars[2].evc_no}</div> */}
                    </div>
                    <div className="d-flex justify-content-between">
                      <div className="evc-price">
                        <div className="evc-price-title">PRICE</div>
                        <div className="evc-price-amount">
                          <img src={busd} alt="" className="img-fluid" />
                          {evc_avatars[2].price}
                        </div>
                      </div>
                      <div className="evc-bv">
                        <div className="evc-bv-title">BV</div>
                        <div className="evc-bv-amount">
                          <img src={busd} alt="" className="img-fluid" />
                          {evc_avatars[2].bv}
                        </div>
                      </div>
                    </div>
                    {approveBUSDValue === "0" ? (
                      <div className="d-grid gap-2">
                        <button
                          className="btn btn-primary"
                          type="button"
                          onClick={() => setBUSD_NFTApprove()}
                        >
                          Approve
                        </button>
                      </div>
                    ) : hasToken[2] === true ? (
                      <div className="d-grid gap-2">
                        <button className="btn btn-dark" type="button" disabled>
                          Buy
                        </button>
                      </div>
                    ) : (
                      <div className="d-grid gap-2">
                        <button
                          className="btn btn-primary"
                          type="button"
                          onClick={() => setMintNft(3)}
                        >
                          Buy
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              {/*dev: Level_4 */}
              <div className="col-sm-6 col-xl-4 col-xxl-3">
                <div className="card-evc h-100 d-flex flex-column">
                  <div className="evc-avatar">
                    <img
                      src={evc_avatars[3].thumb}
                      alt=""
                      className="img-fluid w-100"
                    />
                  </div>
                  <div className="evc-info p-3 px-0 px-xs-3 pb-0 h-100 d-flex flex-column justify-content-between">
                    <div className="d-flex gap-2 flex-wrap justify-content-between mb-2">
                      <a href="#" className="evc-title">
                        {evc_avatars[3].title}
                      </a>
                      {/* <div className="evc-no">{evc_avatars[3].evc_no}</div> */}
                    </div>
                    <div className="d-flex justify-content-between">
                      <div className="evc-price">
                        <div className="evc-price-title">PRICE</div>
                        <div className="evc-price-amount">
                          <img src={busd} alt="" className="img-fluid" />
                          {evc_avatars[3].price}
                        </div>
                      </div>
                      <div className="evc-bv">
                        <div className="evc-bv-title">BV</div>
                        <div className="evc-bv-amount">
                          <img src={busd} alt="" className="img-fluid" />
                          {evc_avatars[3].bv}
                        </div>
                      </div>
                    </div>
                    {approveBUSDValue === "0" ? (
                      <div className="d-grid gap-2">
                        <button
                          className="btn btn-primary"
                          type="button"
                          onClick={() => setBUSD_NFTApprove()}
                        >
                          Approve
                        </button>
                      </div>
                    ) : hasToken[3] === true ? (
                      <div className="d-grid gap-2">
                        <button className="btn btn-dark" type="button" disabled>
                          Buy
                        </button>
                      </div>
                    ) : (
                      <div className="d-grid gap-2">
                        <button
                          className="btn btn-primary"
                          type="button"
                          onClick={() => setMintNft(4)}
                        >
                          Buy
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              {/*dev: Level_5 */}
              <div className="col-sm-6 col-xl-4 col-xxl-3">
                <div className="card-evc h-100 d-flex flex-column">
                  <div className="evc-avatar">
                    <img
                      src={evc_avatars[4].thumb}
                      alt=""
                      className="img-fluid w-100"
                    />
                  </div>
                  <div className="evc-info p-3 px-0 px-xs-3 pb-0 h-100 d-flex flex-column justify-content-between">
                    <div className="d-flex gap-2 flex-wrap justify-content-between mb-2">
                      <a href="#" className="evc-title">
                        {evc_avatars[4].title}
                      </a>
                      {/* <div className="evc-no">{evc_avatars[4].evc_no}</div> */}
                    </div>
                    <div className="d-flex justify-content-between">
                      <div className="evc-price">
                        <div className="evc-price-title">PRICE</div>
                        <div className="evc-price-amount">
                          <img src={busd} alt="" className="img-fluid" />
                          {evc_avatars[4].price}
                        </div>
                      </div>
                      <div className="evc-bv">
                        <div className="evc-bv-title">BV</div>
                        <div className="evc-bv-amount">
                          <img src={busd} alt="" className="img-fluid" />
                          {evc_avatars[4].bv}
                        </div>
                      </div>
                    </div>
                    {approveBUSDValue === "0" ? (
                      <div className="d-grid gap-2">
                        <button
                          className="btn btn-primary"
                          type="button"
                          onClick={() => setBUSD_NFTApprove()}
                        >
                          Approve
                        </button>
                      </div>
                    ) : hasToken[4] === true ? (
                      <div className="d-grid gap-2">
                        <button className="btn btn-dark" type="button" disabled>
                          Buy
                        </button>
                      </div>
                    ) : (
                      <div className="d-grid gap-2">
                        <button
                          className="btn btn-primary"
                          type="button"
                          onClick={() => setMintNft(5)}
                        >
                          Buy
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              {/*dev: Level_6 */}
              <div className="col-sm-6 col-xl-4 col-xxl-3">
                <div className="card-evc h-100 d-flex flex-column">
                  <div className="evc-avatar">
                    <img
                      src={evc_avatars[5].thumb}
                      alt=""
                      className="img-fluid w-100"
                    />
                  </div>
                  <div className="evc-info p-3 px-0 px-xs-3 pb-0 h-100 d-flex flex-column justify-content-between">
                    <div className="d-flex gap-2 flex-wrap justify-content-between mb-2">
                      <a href="#" className="evc-title">
                        {evc_avatars[5].title}
                      </a>
                      {/* <div className="evc-no">{evc_avatars[5].evc_no}</div> */}
                    </div>
                    <div className="d-flex justify-content-between">
                      <div className="evc-price">
                        <div className="evc-price-title">PRICE</div>
                        <div className="evc-price-amount">
                          <img src={busd} alt="" className="img-fluid" />
                          {evc_avatars[5].price}
                        </div>
                      </div>
                      <div className="evc-bv">
                        <div className="evc-bv-title">BV</div>
                        <div className="evc-bv-amount">
                          <img src={busd} alt="" className="img-fluid" />
                          {evc_avatars[5].bv}
                        </div>
                      </div>
                    </div>
                    {approveBUSDValue === "0" ? (
                      <div className="d-grid gap-2">
                        <button
                          className="btn btn-primary"
                          type="button"
                          onClick={() => setBUSD_NFTApprove()}
                        >
                          Approve
                        </button>
                      </div>
                    ) : hasToken[5] === true ? (
                      <div className="d-grid gap-2">
                        <button className="btn btn-dark" type="button" disabled>
                          Buy
                        </button>
                      </div>
                    ) : (
                      <div className="d-grid gap-2">
                        <button
                          className="btn btn-primary"
                          type="button"
                          onClick={() => setMintNft(6)}
                        >
                          Buy
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              {/*dev: Level_7 */}
              <div className="col-sm-6 col-xl-4 col-xxl-3">
                <div className="card-evc h-100 d-flex flex-column">
                  <div className="evc-avatar">
                    <img
                      src={evc_avatars[6].thumb}
                      alt=""
                      className="img-fluid w-100"
                    />
                  </div>
                  <div className="evc-info p-3 px-0 px-xs-3 pb-0 h-100 d-flex flex-column justify-content-between">
                    <div className="d-flex gap-2 flex-wrap justify-content-between mb-2">
                      <a href="#" className="evc-title">
                        {evc_avatars[6].title}
                      </a>
                      {/* <div className="evc-no">{evc_avatars[6].evc_no}</div> */}
                    </div>
                    <div className="d-flex justify-content-between">
                      <div className="evc-price">
                        <div className="evc-price-title">PRICE</div>
                        <div className="evc-price-amount">
                          <img src={busd} alt="" className="img-fluid" />
                          {evc_avatars[6].price}
                        </div>
                      </div>
                      <div className="evc-bv">
                        <div className="evc-bv-title">BV</div>
                        <div className="evc-bv-amount">
                          <img src={busd} alt="" className="img-fluid" />
                          {evc_avatars[6].bv}
                        </div>
                      </div>
                    </div>
                    {approveBUSDValue === "0" ? (
                      <div className="d-grid gap-2">
                        <button
                          className="btn btn-primary"
                          type="button"
                          onClick={() => setBUSD_NFTApprove()}
                        >
                          Approve
                        </button>
                      </div>
                    ) : hasToken[6] === true ? (
                      <div className="d-grid gap-2">
                        <button className="btn btn-dark" type="button" disabled>
                          Buy
                        </button>
                      </div>
                    ) : (
                      <div className="d-grid gap-2">
                        {/* dev: Buy Button */}
                        <button
                          className="btn btn-primary"
                          type="button"
                          onClick={() => setMintNft(7)}
                        >
                          Buy
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              {/*dev: Level_8 */}
              <div className="col-sm-6 col-xl-4 col-xxl-3">
                <div className="card-evc h-100 d-flex flex-column">
                  <div className="evc-avatar">
                    <img
                      src={evc_avatars[7].thumb}
                      alt=""
                      className="img-fluid w-100"
                    />
                  </div>
                  <div className="evc-info p-3 px-0 px-xs-3 pb-0 h-100 d-flex flex-column justify-content-between">
                    <div className="d-flex gap-2 flex-wrap justify-content-between mb-2">
                      <a href="#" className="evc-title">
                        {evc_avatars[7].title}
                      </a>
                      {/* <div className="evc-no">{evc_avatars[7].evc_no}</div> */}
                    </div>
                    <div className="d-flex justify-content-between">
                      <div className="evc-price">
                        <div className="evc-price-title">PRICE</div>
                        <div className="evc-price-amount">
                          <img src={busd} alt="" className="img-fluid" />
                          {evc_avatars[7].price}
                        </div>
                      </div>
                      <div className="evc-bv">
                        <div className="evc-bv-title">BV</div>
                        <div className="evc-bv-amount">
                          <img src={busd} alt="" className="img-fluid" />
                          {evc_avatars[7].bv}
                        </div>
                      </div>
                    </div>
                    {approveBUSDValue === "0" ? (
                      <div className="d-grid gap-2">
                        {/* Approve Button */}
                        <button
                          className="btn btn-primary"
                          type="button"
                          onClick={() => setBUSD_NFTApprove()}
                        >
                          Approve
                        </button>
                      </div>
                    ) : hasToken[7] === true ? (
                      <div className="d-grid gap-2">
                        <button className="btn btn-dark" type="button" disabled>
                          Buy
                        </button>
                      </div>
                    ) : (
                      <div className="d-grid gap-2">
                        <button
                          className="btn btn-primary"
                          type="button"
                          onClick={() => setMintNft(8)}
                        >
                          Buy
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EvcAvatars;
