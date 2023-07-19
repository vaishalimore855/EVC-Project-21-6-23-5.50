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
import UnstakeComp from "./UnstakeComp"

var rewardobj = {};
var claimTimeobj = {};
var rewardPercentageobj = {};

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
    height: "100%",
    width: `${progress}%`,
    backgroundColor: bgcolor,
    borderRadius: 40,
    textAlign: "right",
  };

  const progresstext = {
    padding: 10,
    color: "black",
    fontWeight: 900,
  };

  return (
    <div style={Parentdiv}>
      <div style={Childdiv}>
        <span style={progresstext}>{`${progress}%`}</span>
      </div>
    </div>
  );
};
//dev: Start Mint Page
function StakeComp() {
  //dev: Stake NFTs
  const [walletOwner, SetWalletOwner] = useState();

  console.log("walletOwner.....", walletOwner);
  //dev: Unstake NFTs
  const [stakeOfOwnerNFTIDs, setStakeOfOwnerNFTIDs] = useState();
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
    //set the walletOwner on Local Storage
    window.localStorage.setItem("walletOwner", walletOwner);
  }, []);
  const [progresBarState, setProgresBarState] = useState(33);

  //dev: EVC Chart Data
  const EvcChart = {
    series: [
      {
        name: "Claim Perc",
        data: [
          44, 55, 57, 56, 61, 58, 63, 60, 66, 40, 44, 55, 57, 44, 55, 57, 56,
          61, 58, 63, 60, 66, 40, 44, 55, 57, 44, 55, 57, 56, 61, 58, 63,
        ],
      },
      {
        name: "Total Perc",
        data: [
          3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 54,
          57, 60, 63, 66, 69, 72, 75, 78, 81, 84, 87, 90, 93, 96, 99,
        ],
      },
    ],
    options: {
      colors: ["#306FFF", "#30C9C9"],
      chart: {
        height: 250,
        type: "bar",
        background: "rgba(0, 0, 0, 0)",
        toolbar: {
          show: false,
        },
      },
      xaxis: {
        axisBorder: {
          show: false,
        },
        labels: {
          show: true,
        },
        axisTicks: {
          show: false,
        },
        categories: [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
          "18",
          "19",
          "20",
          "21",
          "22",
          "23",
          "24",
          "25",
          "26",
          "27",
          "28",
          "29",
          "30",
          "31",
          "32",
          "33",
        ],
      },
      yaxis: {
        categories: [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
          "18",
          "19",
          "20",
          "21",
          "22",
          "23",
          "24",
          "25",
          "26",
          "27",
          "28",
          "29",
          "30",
          "31",
          "32",
          "33",
        ],
        labels: {
          formatter: function (value) {
            return value.toFixed(2);
          },
        },
      },
      grid: {
        show: true,
        borderColor: "#1F1F2B",
        strokeDashArray: 3,
        xaxis: {
          lines: {
            show: false,
          },
        },
      },
      tooltip: {
        show: false,
      },
      theme: {
        mode: "dark",
        monochrome: {
          enabled: false,
          color: "#fff",
          shadeTo: "dark",
          shadeIntensity: 0,
        },
      },
      legend: {
        show: false,
      },
      stroke: {
        show: true,
        curve: "smooth",
        lineCap: "butt",
        colors: ["transparent"],
        width: 0,
        dashArray: 0,
      },
      dataLabels: {
        enabled: false,
      },
    },
  };
  
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
    };
    getNFTStakingData();
  }, []);

  

  //dev: Define  Next Claim Time
  const nextClaimTime = window.localStorage.getItem("nextClaim ");
  console.log("nextClaimTime", nextClaimTime);

  //dev: Show the Current Time
  const start = Date.now();
  let epoch = start / 1000;
  let myepoch = epoch.toFixed(0);
  console.log("epoch...", myepoch);

  useEffect(() => {
    //dev: get the  Reward
    //dev: get the  Reward
    const getReward = async () => {
      if (typeof stakeOfOwnerNFTIDs !== "undefined") {
        for (let i = 0; i < stakeOfOwnerNFTIDs.length; i++) {
          const rewardinfo = await getUnClaimableReward(stakeOfOwnerNFTIDs[i]);
          const rewardPercentage = await getRewardPercentage(stakeOfOwnerNFTIDs[i]);
          const timeInfo = await getNextClaimTime(stakeOfOwnerNFTIDs[i]);
          rewardobj[stakeOfOwnerNFTIDs[i]] = Number(rewardinfo).toLocaleString(undefined, { maximumFractionDigits: 2 });
          rewardPercentageobj[stakeOfOwnerNFTIDs[i]] = rewardPercentage;
          claimTimeobj[stakeOfOwnerNFTIDs[i]] = timeInfo;
        }
      }
    };
    getReward();
    console.log("rewardobj", rewardobj);
    console.log("claimTimeobj", claimTimeobj);
    console.log("rewardPercentageobj", rewardPercentageobj);
  }, [stakeOfOwnerNFTIDs]);

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
            <div className="dash-global-wrap"style={{marginLeft:"-120px",width:"100%",marginTop:"-10%"}}>
              <div className="row g-5">
              {walletOwner &&
                  walletOwner.map((data1, index) => (
                    <div className="col-md-5 col-xl-5" key={index} style={{marginLeft:"10px",width:"48%"}}>
                      <div
                        className="dash-card style-3 position-relative"
                        style={{
                          boxShadow: "rgba(57, 57, 57, 0.96) 0px 22px 70px 4px"
                        }}
                      >
                        <h6 style={{ textAlign: "center" }}>
                          Level{" "}
                          {data1 >= 1 && data1 <= 10
                            ? "1"
                            : data1 >= 21 && data1 <= 30
                            ? "2"
                            : data1 >= 31 && data1 <= 40
                            ? "3"
                            : data1 >= 41 && data1 <= 50
                            ? "4"
                            : data1 >= 51 && data1 <= 60
                            ? "5"
                            : data1 >= 61 && data1 <= 70
                            ? "6"
                            : data1 >= 71 && data1 <= 80
                            ? "7"
                            : data1 >= 81 && data1 <= 90
                            ? "8"
                            : null}
                        </h6>
                        <hr></hr>
                        <div>
                          <img
                            src={`${imgUrl}${data1}.png`}
                            alt=""
                            className="img-fluid"
                            style={{
                              height: "100%",
                              width: "100%",
                              borderRadius: "10px",
                            }}
                          />
                          <br></br>
                          <br></br>

                          {isApproved === true ? (
                            // dev: Stake Button
                            <Button
                              style={{
                                width: "102.637px",
                                height: "40px",
                                marginLeft: "33%",
                                marginTop: "2%",
                              }}
                              onClick={() => setStakeNFT(data1)}
                              variant="contained"
                            >
                              Stake
                            </Button>
                          ) : (
                            // dev:  Approve Button
                            <Button
                              onClick={() => getApproved()}
                              variant="contained"
                              style={{
                                width: "35%",
                                height: "40px",
                                marginLeft: "40%",
                                marginTop: "2%",
                              }}
                            >
                              Approve
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
 
              </div>
            </div>
          </div>
        )}
        
      </div>
  {/* <UnstakeComp rewardobj="rewardobj" claimTimeobj="claimTimeobj" rewardPercentageobj="rewardPercentageobj"/> */}
    </>
    
  );
}

export default StakeComp;
