import React, { useEffect, useState } from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Link } from "react-router-dom";
import profilePic from "../../assets/img/dashboard/img/avatar-1.png";
import busd from "../../assets/img/dashboard/icons/busd.png";
import dashCardIcon1 from "../../assets/img/dashboard/icons/dash-card-icon-1.png";
import dashCardIcon2 from "../../assets/img/dashboard/icons/dash-card-icon-2.png";
import dashIcon1 from "../../assets/img/dashboard/icons/dash-icon-1.svg";
import dashIcon2 from "../../assets/img/dashboard/icons/dash-icon-2.svg";
import dashIcon3 from "../../assets/img/dashboard/icons/dash-icon-3.svg";
import dashIcon4 from "../../assets/img/dashboard/icons/dash-icon-4.svg";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import DehazeIcon from "@mui/icons-material/Dehaze";
import { Dropdown } from "react-bootstrap";
import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment } from "@mui/material";
import { IconButton, Grid } from "@mui/material";
import DashChart from "./Charts/OverviewChart";

import Daily from "../Dashboard/Charts/DashboardGraph/Daily";
import Weekly from "../Dashboard/Charts/DashboardGraph/Weekly";
import Yearly from "../Dashboard/Charts/DashboardGraph/Yearly";
import Monthly from "../Dashboard/Charts/DashboardGraph/Monthly";
import AllGraph from "../Dashboard/Charts/DashboardGraph/AllGraph";

import ApexChart from "./Charts/OverviewChart";
import StakeNft from "./Mint/StakeNft";
import CircularProgress from "@mui/material/CircularProgress";
import {
  getWalletOfOwner,
  getHasToken,
  getRecentlyJoined,
  getEvcRank,
} from "../../ContractAction/EVCNFTContractAction";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

// import {getHasToken} from "../../ContractAction/EVCNFTContractAction";

//dev: HighNftToken Array
const HighNftToken = [];
console.log("HighNftToken", HighNftToken);

var lastElement;

//dev: start Dashboard Page
const Dashboard = ({ title }) => {
  //Dev: Get the address for Local Storage
  const newAddress = window.localStorage.getItem("connectedAccount");

  //dev: Image URL
  const imgUrl =
    "https://ipfs.io/ipfs/QmcMJqnnQeZeNnnnDh4Dar2HuxrnibFzLxjG9BanHPcGq4/";

  const img1 =
    "https://ipfs.io/ipfs/QmcMJqnnQeZeNnnnDh4Dar2HuxrnibFzLxjG9BanHPcGq4/1.png";
  const img2 =
    "https://ipfs.io/ipfs/QmcMJqnnQeZeNnnnDh4Dar2HuxrnibFzLxjG9BanHPcGq4/21.png";
  const img3 =
    "https://ipfs.io/ipfs/QmcMJqnnQeZeNnnnDh4Dar2HuxrnibFzLxjG9BanHPcGq4/31.png";
  const img4 =
    "https://ipfs.io/ipfs/QmcMJqnnQeZeNnnnDh4Dar2HuxrnibFzLxjG9BanHPcGq4/41.png";
  const img5 =
    "https://ipfs.io/ipfs/QmcMJqnnQeZeNnnnDh4Dar2HuxrnibFzLxjG9BanHPcGq4/51.png";
  const img6 =
    "https://ipfs.io/ipfs/QmcMJqnnQeZeNnnnDh4Dar2HuxrnibFzLxjG9BanHPcGq4/61.png";
  const img7 =
    "https://ipfs.io/ipfs/QmcMJqnnQeZeNnnnDh4Dar2HuxrnibFzLxjG9BanHPcGq4/71.png";
  const img8 =
    "https://ipfs.io/ipfs/QmcMJqnnQeZeNnnnDh4Dar2HuxrnibFzLxjG9BanHPcGq4/81.png";

  const [walletOwner, SetWalletOwner] = useState();
  console.log("walletOwner.....**********************", walletOwner);

  const [highNft, setHighNft] = useState();
  console.log("highNft.....**********************", highNft);
  const maxNft = Math.max(walletOwner);
  console.log("maxNft", maxNft);
  // const [recentlyJoined, setRecentlyJoined] = useState([]);
  const [evcRank, setEvcRank] = useState();
  const [latestJoiner, setLatestJoiner] = useState([]);
  const [userRank, setUserRank] = useState([]);
  const [monthlyTurnover, setMonthlyTurnover] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    //dev: Get the  NFT Staking Data
    const getNFTStakingData = async () => {
      const WalletOfOwner = await getWalletOfOwner();
      const recentlyJoinedInfo = await getRecentlyJoined();
      // const evcRankInfo = await getEvcRank();
      SetWalletOwner(WalletOfOwner);
      getmonthlyTurnover();
      // setRecentlyJoined(recentlyJoinedInfo);
      // setEvcRank(evcRankInfo)
    };
    getNFTStakingData();

    //dev: Find Highest NFT
    const Token = async () => {
      const hastoken = await getHasToken();

      // setHighNft(nft1);
      for (let i = 0; i <= hastoken.length; i++) {
        if (hastoken[i] === true) {
          HighNftToken.push(i + 1);
        }
      }

      // dev: find last element of an array
      lastElement = HighNftToken.slice(-1);
      setHighNft(lastElement);
      console.log("lastElement", lastElement);
      console.log("HighNftToken", HighNftToken);
    };
    Token();
    UserRank();
    LatestJoiner();
    document.title = title ? title : "EVC Avatars | Dashboard";
    document.querySelector(".page-title").innerText = "NFT MINTING REWARDS";
  }, []);

  // console.log("recentlyJoined", recentlyJoined);
  console.log("evcRank", evcRank);
  //Post API for UserRank
  const UserRank = async() => {
    const data = {
      // The data you want to send in the request
      useraddress: newAddress,
    };

    await fetch("http://199.247.3.230:8080/api/users/getuserrank", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        setUserRank(data);
        setIsLoading(false);
        console.log("  UserRank", data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  console.log(" User Rank", userRank);
  //POST API :Latest Joiner
  const   LatestJoiner = async() => {
    const data = {
      useraddress: newAddress,
    };

   await fetch("http://199.247.3.230:8080/api/users/getlatestjoiners", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        setLatestJoiner(data);
        console.log("latest Joiner", data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  console.log("latestJoiner", latestJoiner);

  //Monthly Turnover
  const getmonthlyTurnover = () => {
    const data = {
      useraddress: newAddress,
    };

    fetch("http://199.247.3.230:8080/api/users/getmonthlyteamturnover", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        setMonthlyTurnover(data);
        console.log(" monthlyTurnover", data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  //dropdown
  const [selectedOption, setSelectedOption] = useState("day");

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const renderComponent = () => {
    switch (selectedOption) {
      case "day":
        return <Daily />;
      case "week":
        return <Weekly />;

      case "month":
        return <Monthly />;
      case "year":
        return <Yearly />;
      case "all":
        return <AllGraph />;

      default:
        return null;
    }
  };

  return (
    <>
      <div className="dashboard-wrap">
        <Breadcrumb>
          <li className="breadcrumb-item">
            <Link to="/">HOME</Link>
          </li>
          <Breadcrumb.Item active>Dashboard</Breadcrumb.Item>
        </Breadcrumb>
        {/* Dev: Dashboard Page */}
        <div className="dash-content-area">
          <div className="row">
            <div className="col-lg-12 col-xl-12 col-xxxl-3">
              <div className="row">
                {walletOwner && (
                  <div className="col-xxxl-12 col-xl-4 col-md-6">
                    <div className="card-evc style-2 d-flex flex-column mb-4">
                      <div className="evc-avatar">
                        {lastElement &&
                          (() => {
                            if (lastElement == 8)
                              return (
                                <img
                                  src={img8}
                                  alt=""
                                  className="img-fluid w-100"
                                />
                              );
                            if (lastElement == 7)
                              return (
                                <img
                                  src={img7}
                                  alt=""
                                  className="img-fluid w-100"
                                />
                              );
                            if (lastElement == 6)
                              return (
                                <img
                                  src={img6}
                                  alt=""
                                  className="img-fluid w-100"
                                />
                              );
                            if (lastElement == 5)
                              return (
                                <img
                                  src={img5}
                                  alt=""
                                  className="img-fluid w-100"
                                />
                              );
                            if (lastElement == 4)
                              return (
                                <img
                                  src={img4}
                                  alt=""
                                  className="img-fluid w-100"
                                />
                              );
                            if (lastElement == 3)
                              return (
                                <img
                                  src={img3}
                                  alt=""
                                  className="img-fluid w-100"
                                />
                              );
                            if (lastElement == 2)
                              return (
                                <img
                                  src={img2}
                                  alt=""
                                  className="img-fluid w-100"
                                />
                              );
                            if (lastElement == 1)
                              return (
                                <img
                                  src={img1}
                                  alt=""
                                  className="img-fluid w-100"
                                />
                              );
                            else
                              return (
                                <img
                                  src={profilePic}
                                  alt=""
                                  className="img-fluid w-100"
                                />
                              );
                          })()}
                      </div>
                      <div className="evc-info p-3 pb-0 h-100 d-flex flex-column justify-content-between">
                        <div className="d-flex gap-2 flex-wrap justify-content-between mb-4">
                          <a href="#" className="evc-title">
                            {lastElement == 8
                              ? "CryptoCap Tycoon"
                              : lastElement == 7
                              ? "Bitcoin Billionaire"
                              : lastElement == 6
                              ? "Blockchain Mogul"
                              : lastElement == 5
                              ? "Crypto King"
                              : lastElement == 4
                              ? "Crypto Investor"
                              : lastElement == 3
                              ? "Crypto Entrepreneur"
                              : lastElement == 2
                              ? "Crypto Enthusiast"
                              : lastElement == 1
                              ? "Crypto Newbies"
                              : null}
                          </a>
                          {/* <div className="evc-no">#EVC 5</div> */}
                        </div>
                        <div className="d-flex justify-content-between">
                          <div className="evc-price">
                            <div className="evc-price-title">PRICE</div>
                            <div className="evc-price-amount">
                              <img src={busd} alt="" className="img-fluid" />$
                              {""}
                              {lastElement == 8
                                ? "55,000"
                                : lastElement == 7
                                ? "27,500"
                                : lastElement == 6
                                ? "11,000"
                                : lastElement == 5
                                ? "5,500"
                                : lastElement == 4
                                ? "2,750"
                                : lastElement == 3
                                ? "1,100"
                                : lastElement == 2
                                ? "550"
                                : lastElement == 1
                                ? "110"
                                : null}
                            </div>
                          </div>
                          <div className="evc-bv">
                            <div className="evc-bv-title">BV</div>
                            <div className="evc-bv-amount">
                              <img src={busd} alt="" className="img-fluid" />$
                              {""}
                              {lastElement == 8
                                ? "50,000"
                                : lastElement == 7
                                ? "25,000"
                                : lastElement == 6
                                ? "10,000"
                                : lastElement == 5
                                ? "5,000"
                                : lastElement == 4
                                ? "2,500"
                                : lastElement == 3
                                ? "1,000"
                                : lastElement == 2
                                ? "500"
                                : lastElement == 1
                                ? "100"
                                : null}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div className="col-xxxl-12 col-xl-8 col-md-6">
                  <div
                    className="w-100 overflow-auto example"
                    style={{ height: "68%" }}
                  >
                    <div className="evc-rank mt-xxxl-2 w-100">
                      {/* <div className="evc-rank-top">RANK- EVC 5</div> */}
                      <div className="h4 evc-rank-top">
                        RANK-EVC{" "}
                        {isLoading ? (
                          <CircularProgress />
                        ) : (
                          <> {userRank.RankData}</>
                        )}
                      </div>{" "}
                      {latestJoiner &&
                        latestJoiner.map((data, i) => (
                          <div className="evc-rank-list" key={i}>
                            <Link to="/dashboard/main/#">
                              <span className="rank">{data.nftlevel}</span>
                              <div className="dp d-flex align-items-center">
                                <div className="icon-square icon-circle overflow-hidden">
                                  <img src="" alt="" />
                                </div>
                                <div className="username">
                                  {data.affiliateaddress}
                                </div>
                              </div>
                              <div className="point">{data.nftprice}</div>
                            </Link>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12 col-xl-12 col-xxxl-9">
              <div className="row g-4">
                <div className="col-md-6">
                  <div className="dash-card">
                    <div className="icon-square icon-md mb-3">
                      <img src={dashIcon1} alt="" className="img-fluid" />
                    </div>
                    <p>Total EVC Minted</p>
                    <div className="d-flex flex-wrap align-items-center gap-2 dash-card-amount">
                      <div>
                        <img src={dashCardIcon1} alt="" className="img-fluid" />
                      </div>
                      <div>40,000 ($4000)</div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="dash-card">
                    <div className="icon-square icon-md mb-3">
                      <img src={dashIcon2} alt="" className="img-fluid" />
                    </div>
                    <p>Personal EVC Staked Amount</p>
                    <div className="d-flex flex-wrap align-items-center gap-2 dash-card-amount">
                      <div>
                        <img src={dashCardIcon1} alt="" className="img-fluid" />
                      </div>
                      <div>1000</div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="dash-card">
                    <div className="icon-square icon-md mb-3">
                      <img src={dashIcon3} alt="" className="img-fluid" />
                    </div>
                    <p>Total Commission Earned</p>
                    <div className="d-flex flex-wrap align-items-center gap-2 dash-card-amount">
                      <div>
                        <img src={dashCardIcon2} alt="" className="img-fluid" />
                      </div>
                      <div>10,000</div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="dash-card">
                    <div className="icon-square icon-md mb-3">
                      <img src={dashIcon4} alt="" className="img-fluid" />
                    </div>
                    <p>Personal Farming Amount</p>
                    <div className="d-flex flex-wrap align-items-center gap-2 dash-card-amount">
                      <div>$ 8,000</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* dev: DashChart  */}
              <div className="mt-5">
                <div className="dash-global-wrap pb-2">
                  <Box sx={{ width: "600%", marginLeft: "20px", height: 620 }}>
                    <Box sx={{ flexGrow: 1 }}>
                      <Grid container spacing={2}>
                        <Grid
                          item
                          xs={2}
                          style={{ fontSize: 16, marginTop: "10px" }}
                        >
                          {/* dev: Dropdown */}

                          <Dropdown
                            style={{
                              marginBottom: "1%",
                              marginInlineStart: "90%",
                            }}
                          >
                            <Dropdown.Toggle variant="" id="dropdown-basic">
                              {/*dev: icon */}
                              <DehazeIcon sx={{ color: "white" }}></DehazeIcon>
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                              <Dropdown.Item
                                onClick={() => handleOptionSelect("day")}
                              >
                                Day
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => handleOptionSelect("week")}
                              >
                                Week
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => handleOptionSelect("month")}
                              >
                                Month
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => handleOptionSelect("year")}
                              >
                                Year
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => handleOptionSelect("all")}
                              >
                                All
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                          {renderComponent()}
                        </Grid>
                      </Grid>
                    </Box>
                  </Box>
                  {/* <ApexChart /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
