import React, { useState, useEffect } from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Route, Routes } from "react-router-dom";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Button, Typography } from "@mui/material";
import level1 from "../Mint/Images/level1.png";
import level2 from "../Mint/Images/level2.png";
import level3 from "../Mint/Images/level3.png";
import level4 from "../Mint/Images/level4.png";
import level5 from "../Mint/Images/level5.png";
import level6 from "../Mint/Images/level6.png";
import level7 from "../Mint/Images/level7.png";
import level8 from "../Mint/Images/level8.png";
import { Link } from "react-router-dom";
import { ethers } from "ethers";
import { styled, withStyles } from "@mui/material/styles";
import EvcChart from "../Charts/EvcChart";
import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Grid,
  Heading,
  HStack,
  Image,
  Input,
  Progress,
  Stack,
  Text,
} from "@chakra-ui/react";
import CircularProgress, {
  circularProgressClasses,
  CircularProgressProps,
} from "@mui/material/CircularProgress";
import ReactApexChart from "react-apexcharts";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import StakeNft from "./StakeNft";
import { getWalletOfOwner } from "../../../ContractAction/EVCNFTContractAction";
import {
  getTokensOfStaker,
  setClaimReward,
  getUnClaimableReward,
  getCurrentAPROfPlan,
  getNextClaimTime,
  getRewardPercentage
} from "../../../ContractAction/EVCNFTStakeContractAction";

import {
  setStakeNFT,
  setWithdrawNFT,
} from "../../../ContractAction/EVCNFTStakeContractAction";
import {
  getIsApprovedForAll,
  setNFTApprovalForAll,
} from "../../../ContractAction/EVCNFTContractAction";
import { wrap } from "framer-motion";
import { withTheme } from "@mui/styles";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "yellow" : "#308fe8",
  },
}));
//dev: Progressbar for  EVC NFT
const Progressbar = ({ bgcolor, progress, height }) => {
  const Parentdiv = {
    height: height,
    width: "100%",
    backgroundColor: "whitesmoke",
    borderRadius: 40,
    margin: 0,
   
  };

  const Childdiv = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: `${progress}%`,
    backgroundColor: bgcolor,
    borderRadius: 40,
    textAlign: "left",
  };

  const progresstext = {
    paddingLeft: "25px",
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
  };

  return (
    <div style={Parentdiv}>
      <div style={Childdiv}>
        <span style={progresstext}>{`${progress}%`}</span>
      </div>
    </div>
  );
};
// //dev: Progressbar for  EVC NFT
// const Progressbar = ({ bgcolor, progress, height }) => {
//   const Parentdiv = {
//     height: height,
//     width: "100%",
//     backgroundColor: "whitesmoke",
//     borderRadius: 40,
//     textAlign: "center",
//   };

//   const Childdiv = {
//     height: height,
//     width: `${progress}%`,
//     backgroundColor: bgcolor,
//     borderRadius: 40,
//   };

//   const progresstext = {
    
//   };

//   return (
//     <div style={Parentdiv}>
//       <div style={Childdiv}></div>
//         <span style={progresstext}>{`${progress}%`}</span>
//     </div>)
// };
    // {progress === 0 ? (
    //   <>
    //   <div style={Parentdiv}>
    //     <div style={Childdiv}>
    //       <span style={progresstext}>{`${progress}%`}</span>
    //     </div>
    //   </div>
    //    </>) :
    //    (<>
    //     <div style={Parentdiv}>
    //       <div style={Childdiv}>
    //         <span style={progresstext}>{`${progress}%`}</span>
    //       </div>
    //     </div>
    //   </>
    // )};

//dev: Start Mint Page
function UnstakeComp({}) {

  //dev: Stake NFTs
  const [walletOwner, SetWalletOwner] = useState();
  const [test, setTest] = useState(false);

  const [rewardObj, setRewardObj] = useState({});
  const [rewardPercentageObj, setRewardPercentageObj] = useState({});
  const [claimTimeObj, setClaimTimeObj] = useState({});


  console.log("walletOwner.....", walletOwner);
  //dev: Unstake NFTs
  const [stakeOfOwnerNFTIDs, setStakeOfOwnerNFTIDs] = useState([]);
  console.log("stakeOfOwnerNFTIDs......................", stakeOfOwnerNFTIDs);

  //dev: Img URL
  const imgUrl =
    "https://ipfs.io/ipfs/QmcMJqnnQeZeNnnnDh4Dar2HuxrnibFzLxjG9BanHPcGq4/";

  const [isApproved, setApproved] = useState();
  console.log("isApproved", isApproved);

  const [stakeNFT, setstakeNFT] = useState();
  console.log("stakeNFT...", stakeNFT);
  const [apy, setApy] = useState();
  //dev: Get the Wallet Address using Local Storage
  const newAddress = window.localStorage.getItem("connectedAccount");

  useEffect(() => {
    //dev: Get the  NFT Staking Data
    const getNFTStakingData = async () => {
      const WalletOfOwner = await getWalletOfOwner();
      const StakeOfOwnerNFTIDs = await getTokensOfStaker();
      const approved = await getIsApprovedForAll();
      //const claimReward = await getUnClaimableReward();
      const apyInfo = await getCurrentAPROfPlan();
      SetWalletOwner(WalletOfOwner);
      setStakeOfOwnerNFTIDs(StakeOfOwnerNFTIDs);
      setApproved(approved);
      // setReward(claimReward);
      setApy(apyInfo);
      setTest(true);
    };
    getNFTStakingData();
  }, []);

  useEffect(() => {
    //dev: get the Reward
    const getReward = async () => {
      if (typeof stakeOfOwnerNFTIDs !== "undefined") {
        for (let i = 0; i < stakeOfOwnerNFTIDs.length; i++) {
          const rewardinfo = await getUnClaimableReward(stakeOfOwnerNFTIDs[i]);
          const rewardPercentage = await getRewardPercentage(stakeOfOwnerNFTIDs[i]);
          const timeInfo = await getNextClaimTime(stakeOfOwnerNFTIDs[i]);
          setRewardObj((prevRewardObj) => ({
            ...prevRewardObj,
            [stakeOfOwnerNFTIDs[i]]: Number(rewardinfo).toLocaleString(undefined, { maximumFractionDigits: 2 }),
          }));
          setRewardPercentageObj((prevRewardPercentageObj) => ({
            ...prevRewardPercentageObj,
            [stakeOfOwnerNFTIDs[i]]: rewardPercentage,
          }));
          setClaimTimeObj((prevClaimTimeObj) => ({
            ...prevClaimTimeObj,
            [stakeOfOwnerNFTIDs[i]]: timeInfo,
          }));
        }
      }
    };
    getReward();
  }, [stakeOfOwnerNFTIDs]);
  

  useEffect(() => {

    //set the walletOwner on Local Storage
    window.localStorage.setItem("walletOwner", walletOwner);
  }, []);

  const [progresBarState, setProgresBarState] = useState();


  //dev: Define  Next Claim Time
  const nextClaimTime = window.localStorage.getItem("nextClaim ");
  console.log("nextClaimTime", nextClaimTime);

  //dev: Show the Current Time
  const start = Date.now();
  let epoch = start / 1000;
  let myepoch = epoch.toFixed(0);
  console.log("epoch...", myepoch);

  const [stake, setStake] = useState(false);

  const Click = () => {
    setStake(true);
  };

  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
    },
  }));

  const getApproved = async () => {
    setNFTApprovalForAll();
  };

  return (
    <>
      <div>
        {stake ? (
          // dev: Render the StakeNft Component
          <StakeNft />
        ) : (
          <div className="dashboard-wrap">
            <div className="dash-global-wrap" style={{ marginLeft: "-120px", width: "100%", marginTop: "-10%" }} >
              <div className="row g-5"  >
                {stakeOfOwnerNFTIDs &&
                  stakeOfOwnerNFTIDs.map((data2, index) => (
                    <div className="col-md-5 col-xl-5" key={index} style={{marginLeft:"10px",width:"48%"}}>
                      <div
                        className="dash-card style-3 position-relative"
                        style={{
                          boxShadow: "rgba(57, 57, 57, 0.96) 0px 22px 70px 4px",

                        }}
                      >
                        <Card>
                          <h6 style={{ textAlign: "center" }}>
                            Level{" "}
                            {data2 >= 1 && data2 <= 10
                              ? "1"
                              : data2 >= 21 && data2 <= 30
                                ? "2"
                                : data2 >= 31 && data2 <= 40
                                  ? "3"
                                  : data2 >= 41 && data2 <= 50
                                    ? "4"
                                    : data2 >= 51 && data2 <= 60
                                      ? "5"
                                      : data2 >= 61 && data2 <= 70
                                        ? "6"
                                        : data2 >= 71 && data2 <= 80
                                          ? "7"
                                          : data2 >= 81 && data2 <= 90
                                            ? "8"
                                            : null}
                          </h6>
                          <hr></hr>
                          <div>
                            <img
                              src={`${imgUrl}${data2}.png`}
                              alt=""
                              className="img-fluid"
                              style={{
                                height: "100%",
                                width: "100%",
                                borderRadius: "10px",
                                marginBottom:"5%"
                              }}
                            />
                            <br></br>

                            <span
                              style={{
                                textAlign: "center",
                                marginLeft: "85%",
                                height: 25,
                                width: 40,
                                border: "1px solid gray",
                              }}
                            >
                              x
                              {data2 >= 1 && data2 <= 10
                                ? "1"
                                : data2 >= 21 && data2 <= 30
                                  ? "5"
                                  : data2 >= 31 && data2 <= 40
                                    ? "10"
                                    : data2 >= 41 && data2 <= 50
                                      ? "25"
                                      : data2 >= 51 && data2 <= 60
                                        ? "50"
                                        : data2 >= 61 && data2 <= 70
                                          ? "100"
                                          : data2 >= 71 && data2 <= 80
                                            ? "250"
                                            : data2 >= 81 && data2 <= 90
                                              ? "500"
                                              : ""}
                            </span>
                            <h6 style={{ marginTop: "1%" }}>
                              APR :{" "}
                              <span>
                                {apy.toLocaleString(undefined, {
                                  maximumFractionDigits: 2,
                                })}
                                %{" "}
                              </span>
                            </h6>
                            <h6> EVC Earned : </h6>
                            <h5>{rewardObj[data2]} </h5>
                          </div>

                          <Box sx={{ flexGrow: 1 }}>

                            <Progressbar
                              bgcolor="#64dd17"
                              progress={rewardPercentageObj[data2]}
                              // progress={progresBarState}
                              height={20}
                            />
                          </Box>
                                <br></br>
                          <div className="d-grid gap-1 d-md-flex" style={{marginLeft:"40px"}}>
                            
                            <button className="btn btn-primary" type="button"
                              onClick={() => claimTimeObj[data2] <= epoch ?
                                setClaimReward(data2)
                                : alert("wait till next claimable timing")
                              }
                              style={{marginLeft:"-45px",width:"65%"}}>Claim</button>
                            
                            <button className="btn btn-primary" type="button"
                            style={{width:"65%"}}
                              onClick={() => setWithdrawNFT(data2)} 
                            
                            
                            >Unstake</button>
                          </div>
                        </Card>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default UnstakeComp;
