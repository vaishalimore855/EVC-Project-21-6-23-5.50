import React, { useEffect, useState } from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Link } from "react-router-dom";

import evcLogo from "../../../assets/img/dashboard/icons/evc-logo.png";
import evcLogoLg from "../../../assets/img/dashboard/icons/evc-logo-lg.png";
// import BuyBurnChart from "./Charts/BuyBurnChart";
import Box from "@mui/material/Box";
import DehazeIcon from "@mui/icons-material/Dehaze";
import { Dropdown } from "react-bootstrap";
import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment } from "@mui/material";
import { IconButton, Grid } from "@mui/material";
import DailyBuyBurn from "./Graph/DailyBuyBurn";
import MonthlyBuyBurn from "./Graph/MonthlyBuyBurn";
import YearlyBuyBurn from "./Graph/YearlyBuyBurn";
import WeeklyBuyBurn from "./Graph/WeeklyBuyBurn";
import AllBuyBurn from "./Graph/AllBuyBurn";

const BuyBurn = ({ title }) => {
  //dev: get the Address for Local Storage
  const newAddress = window.localStorage.getItem("connectedAccount");

  useEffect(() => {
    document.title = title ? title : "EVC Avatars | Buy & Burn";
    document.querySelector(".page-title").innerText = "Buy & Burn";
  }, []);
  //dropdown
  const [selectedOption, setSelectedOption] = useState("day");

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const renderComponent = () => {
    switch (selectedOption) {
      case "day":
        return <DailyBuyBurn />;
      case "week":
        return <WeeklyBuyBurn />;

      case "month":
        return <MonthlyBuyBurn />;
      case "year":
        return <YearlyBuyBurn />;
      case "all":
        return <AllBuyBurn />;
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
          <Breadcrumb.Item active>Buy & Burn</Breadcrumb.Item>
        </Breadcrumb>

        <div className="dash-content-area">
          {/* <div className="h4 font-gilroy fw-semibold mt-3 mb-4 pb-3">Buy and Burn</div> */}
          <div className="h4  mt-3 mb-4 pb-3">Buy and Burn</div>
          <div className="dash-global-wrap">
            <p className="fw-semibold mb-2">Buy & Burn process</p>
            <p className="text-secondary col-lg-6">
              Buy & Burn reduces the overall supply of EVC and increases the
              price of remaining EVC, creating a deflationary system helps to
              drive up the value of EVC token over time
            </p>
          </div>

          <div className="h4 font-gilroy fw-semibold mt-4 pt-3 mb-4 d-flex gap-3 align-items-center">
            <img src={evcLogoLg} alt="" className="img-fluid" />{" "}
            <span>EVC</span>
          </div>
          <div className="dash-global-wrap">
            <p className="text-muted mb-2 text-md">EVC Burned</p>
            <div>
              <span className="fw-semibold font-gilroy">13,867,455.80</span>
              <span className="text-md text-muted ms-1">~367,558.00$</span>
            </div>
          </div>

          <div className="dash-global-wrap mt-5">
            <Box sx={{ width: "600%", marginLeft: "20px", height: 620 }}>
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                  <Grid item xs={2} style={{ fontSize: 16, marginTop: "10px" }}>
                    {/* dev: Dropdown */}

                    <Dropdown
                      style={{ marginBottom: "1%", marginInlineStart: "90%" }}
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
          </div>
          {/* dev: Transaction history */}
          <div className="h5 mt-5 mb-4 fw-semibold">Transaction history</div>
          <div className="table-responsive">
            <table className="table evc-table">
              <thead>
                <tr className="text-uppercase">
                  <th>Date</th>
                  <th>TxID</th>
                  <th>Amount</th>
                  <th>Token</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>07/02/2023 10:30</td>
                  <td>
                    <a href="#">0x3835..dd5b</a>
                  </td>
                  <td>572.45</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <img src={evcLogo} alt="" className="img-fluid me-2" />
                      <span className="text-md">EVC</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>07/02/2023 10:30</td>
                  <td>
                    <a href="#">0x3835..dd5b</a>
                  </td>
                  <td>572.45</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <img src={evcLogo} alt="" className="img-fluid me-2" />
                      <span className="text-md">EVC</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>07/02/2023 10:30</td>
                  <td>
                    <a href="#">0x3835..dd5b</a>
                  </td>
                  <td>572.45</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <img src={evcLogo} alt="" className="img-fluid me-2" />
                      <span className="text-md">EVC</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>07/02/2023 10:30</td>
                  <td>
                    <a href="#">0x3835..dd5b</a>
                  </td>
                  <td>572.45</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <img src={evcLogo} alt="" className="img-fluid me-2" />
                      <span className="text-md">EVC</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default BuyBurn;
