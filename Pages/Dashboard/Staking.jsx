import React, { useState, useEffect } from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Link } from "react-router-dom";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
//dev: staking Icons
import stakingIcon1 from "../../assets/img/dashboard/icons/staking-icon-1.svg";
import stakingIcon2 from "../../assets/img/dashboard/icons/staking-icon-2.svg";
import stakingIcon3 from "../../assets/img/dashboard/icons/staking-icon-3.svg";

import { ReactComponent as IconEx } from "../../assets/img/dashboard/icons/staking-icon-ex.svg";
//dev: Import the Functions
import {
  setStakeFlex,
  getStakedIdsFlexStake,
  getUserStakedFlex,
  setClaimRewardFlex,
  setUnstakeFlex,
  getApyFlex,
  getDepositInfoStakeFlex,
  getDepositAtStakeFlex,
  claimLockStakeFlex,
  getBalanceEVC,
  getFlexUnStakedBeforeTimeIds,
  getFlexUnStakedBeforeTimeInfo,
} from "../../ContractAction/EVCStakeContractAction";
import {
  setStakeFix,
  getStakedIdsFixStake,
  getUserStakedFix,
  getApyFix,
  setUnstakeFix,
  setClaimRewardFix,
} from "../../ContractAction/EVCStakeContractAction";
import { fontSize } from "@mui/system";
import { position } from "@chakra-ui/react";

const Staking = ({ title }) => {
  //dev: get the user address for local storage
  const newAddress = window.localStorage.getItem("connectedAccount");

  const [stakeFlexValue, setStakeFlexValue] = useState("");
  const [depositAt, setDepositAt] = useState();
  const [claimLock, setClaimLock] = useState();
  const [EVCBalanceOf, setEVCBalanceOf] = useState();
  const [stakeFixValue, setStakeFixValue] = useState("");
  const [period, setPeriod] = useState("");
  const [key, setKey] = useState("stake");
  const [fixStakedDetails, setFixStakedDetails] = useState();
  const [flexStakedDetails, setFlexStakedDetails] = useState();
  const [fixStakedIds, setFixStakedIds] = useState();
  const [flexStakedIds, setFlexStakedIds] = useState("");
  const [periodApy, setPeriodApy] = useState([]);
  const [flexApy, setFlexApy] = useState();
  const [flexUnStakedBeforeTimeIds, setFlexUnStakeBeforeTimeIds] = useState([]);
  const [flexUnStakedBeforeTimeInfo, setFlexUnStakeBeforeTimeInfo] = useState();

  useEffect(() => {
    document.title = title ? title : "EVC Avatars | Staking";
    document.querySelector(".page-title").innerText = "Staking";
    const getData = async () => {
      // let flexAmountStake = await getDepositInfoStakeFlex();
      // let depositAt = await getDepositAtStakeFlex();
      let claimLockInfo = await claimLockStakeFlex();
      let evcbalance = await getBalanceEVC();
      let stakedIds = await getStakedIdsFixStake();
      let flexStakedIdsInfo = await getStakedIdsFlexStake();
      let stakedDetailsFix = await getUserStakedFix();
      let stakedDetailsFlex = await getUserStakedFlex();
      let periodApyInfo = await getApyFix();
      let flexApyInfo = await getApyFlex();
      let flexUnStakedBeforeTimeIds = await getFlexUnStakedBeforeTimeIds();
      let flexUnStakedBeforeTimeInfo = await getFlexUnStakedBeforeTimeInfo();
      // setFlexStakeAmount(flexAmountStake);
      // setDepositAt(depositAt);
      setClaimLock(claimLockInfo);
      setEVCBalanceOf(evcbalance);
      setFixStakedIds(stakedIds);
      setFlexStakedIds(flexStakedIdsInfo);
      setFixStakedDetails(stakedDetailsFix);
      setFlexStakedDetails(stakedDetailsFlex);
      setPeriodApy(periodApyInfo);
      setFlexApy(flexApyInfo);
      setFlexUnStakeBeforeTimeIds(flexUnStakedBeforeTimeIds);
      setFlexUnStakeBeforeTimeInfo(flexUnStakedBeforeTimeInfo);
    };
    getData();
  }, []);

  //dev: Flexible unstake date
  var _Date = 1679296688 + parseInt(claimLock);
  console.log("epoc", _Date);
  let _date = new Date(parseInt(_Date) * 1000).toDateString();
  // console.log("date", _date)
  // console.log("datetype", typeof _date)

  // console.log("date", unstakeDate)

  // array of Fix Unstake date
  let _unStakeDateFix = [];
  if (fixStakedDetails) {
    for (let i = 0; i < fixStakedDetails.length; i++) {
      if (fixStakedDetails[i].planid === "1") {
        const epoc = parseInt(fixStakedDetails[i].depositAttime) + 15866400;
        const _date = new Date(epoc * 1000).toDateString();
        _unStakeDateFix.push(_date);
      } else if (fixStakedDetails[i].planid === "2") {
        const epoc = parseInt(fixStakedDetails[i].depositAttime) + 31560000;
        const _date = new Date(epoc * 1000).toDateString();
        _unStakeDateFix.push(_date);
      } else if (fixStakedDetails[i].planid === "3") {
        const epoc = parseInt(fixStakedDetails[i].depositAttime) + 63120000;
        const _date = new Date(epoc * 1000).toDateString();
        _unStakeDateFix.push(_date);
      }
    }
    console.log("unstakedate", _unStakeDateFix);
  }

  //dev: Fix stake amount total
  let fixStakeAmount = 0;
  if (fixStakedDetails) {
    for (let i = 0; i < fixStakedDetails.length; i++) {
      fixStakeAmount += fixStakedDetails[i].amount / 10 ** 18;
    }
  }

  //dev:  array of Flex Unstake date
  let _unStakeDateFlex = [];
  if (flexStakedDetails) {
    for (let i = 0; i < flexStakedDetails.length; i++) {
      const epoc = parseInt(flexStakedDetails[i].depositAttime) + 604800;
      const _date = new Date(epoc * 1000).toDateString();
      _unStakeDateFlex.push(_date);
      console.log("_unStakeDateFlex", _unStakeDateFlex);
    }
  }

  let flexUnStakeDateBeforeTime = [];
  if (flexUnStakedBeforeTimeInfo) {
    for (let i = 0; i < flexUnStakedBeforeTimeInfo.length; i++) {
      const epoc = parseInt(flexUnStakedBeforeTimeInfo[i].amountDepositedAt) + 604800;
      const _date = new Date(epoc * 1000).toDateString();
      flexUnStakeDateBeforeTime.push(_date);
      console.log("flexUnStakeDateBeforeTime", flexUnStakeDateBeforeTime);
    }
  }
  //dev: Flexible stake Amount total
  let flexStakeAmount = 0;
  if (flexStakedDetails) {
    for (let i = 0; i < flexStakedDetails.length; i++) {
      flexStakeAmount += flexStakedDetails[i].amountdeposited / 10 ** 18;
    }
  }

  //dev: array of fix Stake Details object (created but not used)
  const fixStakeDetails = [];
  if (fixStakedDetails) {
    console.log("check", "inside");
    for (let i = 0; i < fixStakedDetails.length; i++) {
      fixStakeDetails.push({
        amount: fixStakedDetails[i].amount,
        unstakeDate: _unStakeDateFix[i],
        ids: fixStakedIds[i],
      });
    }
  }

  console.log("unstakedate1", _unStakeDateFix);
  console.log("fixStakeDetails1", fixStakeDetails);
  console.log("fixStakedDetails1", fixStakedDetails);
  console.log("flexStakeAmount", flexStakeAmount);
  console.log("flexStakedDetails", flexStakedDetails);
  console.log("fixStakedIds", fixStakedIds);
  console.log("flexUnStakedBeforeTimeIds", flexUnStakedBeforeTimeIds)
  console.log("flexUnStakedBeforeTimeInfo", flexUnStakedBeforeTimeInfo)

  return (
    <>
      <div className="dashboard-wrap">
        <Breadcrumb>
          <li className="breadcrumb-item">
            <Link to="/">HOME</Link>
          </li>
          <Breadcrumb.Item active>Staking</Breadcrumb.Item>
        </Breadcrumb>
        {/* dev: Stake Your EVC Tokens */}
        <div className="dash-content-area">
          <div className="h4">Stake Your EVC Tokens</div>

          <div className="dash-global-wrap">
            <div className="row g-4">
              <div className="col-md-6 col-xl-4">
                <div className="dash-card style-2 position-relative">
                  <div className="icon-square icon-md mb-3">
                    <img src={stakingIcon1} alt="" className="img-fluid" />
                  </div>
                  <p>Token In Your Wallet</p>
                  <div className="d-flex align-items-center gap-2 dash-card-amount">
                    <div>$ {EVCBalanceOf} EVC</div>
                  </div>
                  <div className="position-absolute top-0 end-0 m-4">
                    <OverlayTrigger
                      placement={`top`}
                      overlay={<Tooltip>Token In Your Wallet</Tooltip>}
                    >
                      <div className="d-inline-flex">
                        <IconEx />
                      </div>
                    </OverlayTrigger>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-4">
                <div className="dash-card style-2 position-relative">
                  <div className="icon-square icon-md mb-3">
                    <img src={stakingIcon2} alt="" className="img-fluid" />
                  </div>
                  <p>Locked in staking</p>
                  <div className="d-flex align-items-center gap-2 dash-card-amount">
                    <div>
                      ${" "}
                      {(fixStakeAmount + parseFloat(flexStakeAmount)).toFixed(
                        2
                      )}{" "}
                      EVC
                    </div>
                  </div>
                  <div className="position-absolute top-0 end-0 m-4">
                    <OverlayTrigger
                      placement={`top`}
                      overlay={<Tooltip>Locked in staking</Tooltip>}
                    >
                      <div className="d-inline-flex">
                        <IconEx />
                      </div>
                    </OverlayTrigger>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-4">
                <div className="dash-card style-2 position-relative">
                  <div className="icon-square icon-md mb-3">
                    <img src={stakingIcon3} alt="" className="img-fluid" />
                  </div>
                  <p>Available For Transfer</p>
                  <div className="d-flex align-items-center gap-2 dash-card-amount">
                    <div>$ {EVCBalanceOf} EVC</div>
                  </div>
                  <div className="position-absolute top-0 end-0 m-4">
                    <OverlayTrigger
                      placement={`top`}
                      overlay={<Tooltip>Available For Transfer</Tooltip>}
                    >
                      <div className="d-inline-flex">
                        <IconEx />
                      </div>
                    </OverlayTrigger>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-8">
              <div className="h5 font-gilroy fw-semibold mt-5 mb-3 pb-3">
                Stake
              </div>
              <div className="dash-global-wrap">
                <Tabs
                  defaultActiveKey="stake"
                  id="fill-tab-example"
                  className="staking-tabs"
                  onSelect={(k) => {
                    setKey(k);
                    setStakeFlexValue("");
                    setStakeFixValue("");
                  }}
                  fill
                >
                  <Tab eventKey="stake" title="Fix Stake">
                    <div>
                      <div className="h5 font-gilroy fw-semibold mt-4 mb-3">
                        Amount
                      </div>
                      <div className="staking-from-wrap">
                        <input
                          type="number"
                          className="from-control"
                          placeholder="1.000000"
                          value={stakeFixValue}
                          onChange={(e) => setStakeFixValue(e.target.value)}
                        />
                        {/* dev: Max Button */}
                        <button onClick={() => setStakeFixValue("10000")}>
                          MAX
                        </button>
                      </div>
                      <div className="h5 font-gilroy fw-semibold mt-4 mb-3">
                        Choose Period (Months)
                      </div>
                      <div
                        className="d-flex gap-3"
                        onChange={(e) => setPeriod(e.target.value)}
                      >
                        <div className="staking-form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="exampleRadios"
                            id="exampleRadios1"
                            value="1"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="exampleRadios1"
                          >
                            06
                          </label>
                        </div>
                        <div className="staking-form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="exampleRadios"
                            id="exampleRadios2"
                            value="2"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="exampleRadios2"
                          >
                            12
                          </label>
                        </div>
                        <div className="staking-form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="exampleRadios"
                            id="exampleRadios3"
                            value="3"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="exampleRadios3"
                          >
                            24
                          </label>
                        </div>
                      </div>
                      <div className="h5 text-secondary font-gilroy mt-4 mb-5 d-flex justify-content-between">
                        <span>
                          APR{" "}
                          {period === "1"
                            ? periodApy[0]
                            : period === "2"
                              ? periodApy[1]
                              : period === "3"
                                ? periodApy[2]
                                : ""}
                          %
                        </span>
                        <span>10000 EVC</span>
                      </div>
                      {/* dev: Stake Now Button */}
                      <button
                        onClick={() => setStakeFix(stakeFixValue, period)}
                        className="btn btn-primary w-100 fw-semibold"
                      >
                        STAKE NOW
                      </button>
                    </div>
                  </Tab>
                  <Tab eventKey="f-stake" title="Flexible Stake">
                    <div>
                      <div className="h5 font-gilroy fw-semibold mt-4 mb-3">
                        Amount
                      </div>
                      <div className="staking-from-wrap">
                        <input
                          type="number"
                          min="0.01"
                          className="from-control"
                          id="amt"
                          placeholder="1.000000"
                          value={stakeFlexValue >= 0.01 && stakeFlexValue}
                          onChange={(e) => setStakeFlexValue(e.target.value)}
                        />
                        <button onClick={() => setStakeFlexValue("10000")}>
                          MAX
                        </button>
                        {/* {!max && (
                                                <input type="text" className="from-control" placeholder="1.000000"
                                                    value={stakeFlexValue}
                                                    onChange={(e) => setStakeFlexValue(e.target.value)} />
                                                //<button onClick={maxFlexValue}>MAX</button>
                                            )}
                                            {max && (
                                                <input type="text" className="from-control" placeholder="1.000000"
                                                    defaultValue={max}
                                                />
                                            )}<button onClick={maxFlexValue}>MAX</button> */}
                      </div>
                      <div className="h5 text-secondary font-gilroy my-4 d-flex justify-content-between">
                        <span>APR {flexApy} %</span>
                        <span>10000 EVC</span>
                      </div>

                      <div className="mb-5">
                        <div className="text-md">Note:</div>
                        <div className="text-md">
                          -Unstake anytime with 7 days unstaking period.
                        </div>
                        <div className="text-md">-Minimum Amount 0.01 EVC.</div>
                      </div>
                      {/* dev: Stake Now Button */}
                      <button
                        onClick={() => setStakeFlex(stakeFlexValue)}
                        className="btn btn-primary w-100 fw-semibold"
                      >
                        STAKE NOW
                      </button>
                    </div>
                  </Tab>
                  <Tab eventKey="unstake" title="Unstake">
                    {" "}
                    <br></br>
                    <Tabs
                      defaultActiveKey="fix"
                      id="fill-tab-example"
                      className="staking-tabs"
                      fill
                    >
                      <Tab eventKey="fix" title="Fix">
                        {fixStakeAmount > 0 ? (
                          <div
                            className="dash-global-wrap overflow-auto example d-flex flex-column"
                            style={{ height: "400px" }}
                          >
                            <div className="d-flex align-items-center justify-content-between text-uppercase staking-deposit-title mb-4">
                              <div style={{ textAlign: "center" }}>
                                <div>Amount</div>
                                <br></br>
                                {fixStakedDetails.map((detail, i) => {
                                  return (
                                    <div
                                      key={i}
                                      style={{
                                        marginTop: "15px",
                                        marginBottom: "5px",
                                      }}
                                    >
                                      {detail.amount / 10 ** 18}
                                    </div>
                                  );
                                })}
                              </div>
                              <div style={{ textAlign: "center" }}>
                                <div> UnStake Date</div>
                                <br></br>
                                {_unStakeDateFix.map((date, i) => {
                                  return (
                                    <div
                                      key={i}
                                      style={{
                                        marginTop: "15px",
                                        marginBottom: "5px",
                                      }}
                                    >
                                      {date}
                                    </div>
                                  );
                                })}
                              </div>
                              <div style={{ textAlign: "center" }}>
                                <div> Action </div>
                                <br></br>
                                {fixStakedIds.map((id, i) => {
                                  return (
                                    <div
                                      className="d-grid gap-2 d-md-flex justify-content-md-end"
                                      key={i}
                                    >
                                      {/* dev: UnStake Button */}
                                      <button
                                        className="btn btn-primary btn-sm me-md-2"
                                        style={{
                                          fontSize: "15px",
                                          marginBottom: "2px",
                                        }}
                                        type="button"
                                        onClick={() => setUnstakeFix(id)}
                                      >
                                        Unstake
                                      </button>
                                      {/* Cliam Button */}
                                      <button
                                        className="btn btn-primary btn-sm"
                                        style={{
                                          fontSize: "15px",
                                          marginBottom: "2px",
                                        }}
                                        type="button"
                                        onClick={() => setClaimRewardFix(id)}
                                      >
                                        Claim
                                      </button>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className="dash-global-wrap d-flex flex-column h-100">
                            <div className="d-flex align-items-center justify-content-between text-uppercase staking-deposit-title mb-4">
                              <div style={{ textAlign: "center" }}>
                                <div>Amount</div>
                                <br></br>
                              </div>
                              <div style={{ textAlign: "center" }}>
                                <div> Claimable date</div>
                                <br></br>
                              </div>
                              <div style={{ textAlign: "center" }}>
                                <div> Action </div>
                                <br></br>
                              </div>
                            </div>
                            <div className="flex-shrink-0 h-100">
                              <div className="staking-deposit">No Stake</div>
                            </div>
                          </div>
                        )}
                        {/* <div className="h5 font-gilroy fw-semibold mt-4 mb-3">Id</div>
                                            <div className="staking-from-wrap">
                                                <input type="number" className="from-control" placeholder='Insert Id'
                                                    value={fixUnstakeIds}
                                                    onChange={(e) => setFixUnstakeIds(e.target.value)} />
                                            </div><br></br>
                                            <div>
                                                <button onClick={() => setUnstakeFix(fixUnstakeIds)} className="btn btn-primary w-100 fw-semibold">UNSTAKE</button>
                                            </div><br></br>
                                            <button onClick={() => setClaimRewardFix(fixUnstakeIds)} className="btn btn-primary w-100 fw-semibold">CLAIM</button> */}
                      </Tab>
                      <Tab eventKey="flexible" title="Flexible">
                        <div>
                          {/* <div className="h5 text-secondary font-gilroy my-4 d-flex justify-content-between">
                            <span>APR (12%)</span>
                          </div> */}
                          <div className="my-4">
                            <div className="text-md">Note:</div>
                            <div className="text-md">
                              Unstake anytime with 7 days unstaking period.
                            </div>
                          </div>
                          {flexStakeAmount > 0 || flexUnStakedBeforeTimeIds.length > 0? (
                            <div
                              className="dash-global-wrap overflow-auto example d-flex flex-column"
                              style={{ height: "400px" }}
                            >
                              <div className="d-flex align-items-center justify-content-between text-uppercase staking-deposit-title mb-4">
                                <div style={{ textAlign: "center" }}>
                                  <div>Amount</div>
                                  <br></br>
                                  {flexUnStakedBeforeTimeInfo.map((details, i) => {
                                    return (<div key={i} style={{ marginTop: "15px", marginBottom: "5px" }}>
                                      {details.flexAmountDeposited / 10 ** 18}
                                    </div>);
                                  })}
                                  {flexStakedDetails.map((detail, i) => {
                                    return (
                                      <div key={i} style={{ marginTop: "15px", marginBottom: "5px" }}>
                                        {detail.amountdeposited / 10 ** 18}
                                      </div>);
                                  })}
                                </div>
                                <div style={{ textAlign: "center" }}>
                                  <div> UnStake Date</div>
                                  <br></br>
                                  {flexUnStakeDateBeforeTime.map((date, i) => {
                                    return (
                                      <div key={i} style={{ marginTop: "15px", marginBottom: "5px" }}>
                                        {date}
                                      </div>);
                                  })}
                                  {_unStakeDateFlex.map((date, i) => {
                                    return (
                                      <div key={i} style={{ marginTop: "15px", marginBottom: "5px" }}>
                                        {date}
                                      </div>);
                                  })}
                                </div>
                                <div style={{ textAlign: "center" }}>
                                  <div> Action </div>
                                  <br></br>
                                  {flexUnStakedBeforeTimeInfo.map((details, i) => {
                                    return (
                                      <div className="d-grid gap-2" key={i}>
                                        <button className="btn btn-primary btn-sm" style={{ fontSize: "15px", marginBottom: "2px" }}
                                          type="button"
                                          onClick={() => setClaimRewardFlex(details.id)}>
                                          Claim
                                        </button>
                                      </div>);
                                  })}
                                  {flexStakedIds.map((id, i) => {
                                    return (
                                      <div className="d-grid gap-2 d-md-flex justify-content-md-end" key={i}>
                                        <button className="btn btn-primary btn-sm me-md-2" style={{ fontSize: "15px", marginBottom: "2px" }}
                                          type="button"
                                          onClick={() => setUnstakeFlex(id)}>
                                          Unstake
                                        </button>
                                        <button className="btn btn-primary btn-sm" style={{ fontSize: "15px", marginBottom: "2px" }}
                                          type="button"
                                          onClick={() => setClaimRewardFlex(id)}>
                                          Claim
                                        </button>
                                      </div>);
                                  })}
                                </div>
                              </div>
                            </div>
                          ) : (
                            <div className="dash-global-wrap d-flex flex-column h-100">
                              <div className="d-flex align-items-center justify-content-between text-uppercase staking-deposit-title mb-4">
                                <div style={{ textAlign: "center" }}>
                                  <div>Amount</div>
                                  <br></br>
                                </div>
                                <div style={{ textAlign: "center" }}>
                                  <div> Claimable date</div>
                                  <br></br>
                                </div>
                                <div style={{ textAlign: "center" }}>
                                  <div> Action </div>
                                  <br></br>
                                </div>
                              </div>
                              <div className="flex-shrink-0 h-100">
                                <div className="staking-deposit">No Stake</div>
                              </div>
                            </div>
                          )}
                          {/* <div>
                                                    <button onClick={() => setUnstakeFlex()} className="btn btn-primary w-100 fw-semibold">UNSTAKE</button>
                                                </div><br></br>
                                                <button onClick={() => setClaimRewardFlex()} className="btn btn-primary w-100 fw-semibold">CLAIM</button> */}
                        </div>
                      </Tab>
                    </Tabs>
                    {/* <div>
                                        <div className="h5 font-gilroy fw-semibold mt-4 mb-3">Fix</div>
                                        <div className="staking-from-wrap">
                                            <input type="number" className="from-control" id="amt"
                                                value={stakeFlexValue >= 0.01 && stakeFlexValue}
                                                onChange={(e) => setStakeFlexValue(e.target.value)} />
                                        </div>
                                        <div className="h5 text-secondary font-gilroy my-4 d-flex justify-content-between">
                                            <span>APR (12%)</span>
                                        </div>
                                        <div className="mb-5">
                                            <div className="text-md">Note:</div>
                                            <div className="text-md">Unstake anytime with 7 days unstaking period.</div>
                                        </div>
                                        <div>
                                            <button onClick={() => setUnstakeFlex()} className="btn btn-primary w-100 fw-semibold">UNSTAKE</button>
                                        </div><br></br>
                                        <button onClick={() => setClaimRewardFlex()} className="btn btn-primary w-100 fw-semibold">CLAIM</button>
                                    </div> */}
                  </Tab>
                </Tabs>
              </div>
            </div>

            {key === "stake" && (
              <div className="col-lg-4">
                <div className="d-flex flex-column h-100">
                  <div className="h5 font-gilroy fw-semibold mt-5 mb-3 pb-3">
                    Fix Stake Details
                  </div>
                  {fixStakeAmount > 0 ? (
                    <div
                      className="dash-global-wrap overflow-auto example flex-column"
                      style={{ height: "510px" }}
                    >
                      <div className="d-flex align-items-center justify-content-between text-uppercase staking-deposit-title mb-4">
                        <div style={{ textAlign: "center" }}>
                          <div>Amount</div>
                          <br></br>
                          {fixStakedDetails.map((detail, i) => {
                            return (
                              <div key={i} style={{ marginTop: "5px" }}>
                                {detail.amount / 10 ** 18}
                              </div>
                            );
                          })}
                        </div>
                        <div style={{ textAlign: "center" }}>
                          <div> UnStake Date</div>
                          <br></br>
                          {_unStakeDateFix.map((date, i) => {
                            return (
                              <div key={i} style={{ marginTop: "5px" }}>
                                {date}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="dash-global-wrap d-flex flex-column h-100">
                      <div className="d-flex align-items-center justify-content-between text-uppercase staking-deposit-title mb-4">
                        <div style={{ textAlign: "center" }}>
                          <div>Amount</div>
                          <br></br>
                        </div>
                        <div style={{ textAlign: "center" }}>
                          <div> Claimable date</div>
                          <br></br>
                        </div>
                      </div>
                      <div className="flex-shrink-0 h-100">
                        <div className="staking-deposit">No Stake</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {key === "f-stake" && (
              <div className="col-lg-4">
                <div className="d-flex flex-column h-100">
                  <div className="h5 font-gilroy fw-semibold mt-5 mb-3 pb-3">
                    Flexible Stake Details
                  </div>
                  {flexStakeAmount > 0 ? (
                    <div
                      className="dash-global-wrap overflow-auto example d-flex flex-column"
                      style={{ height: "465px" }}
                    >
                      <div className="d-flex align-items-center justify-content-between text-uppercase staking-deposit-title mb-4">
                        <div style={{ textAlign: "center" }}>
                          <div>Amount</div>
                          <br></br>
                          {/* {flexUnStakedBeforeTimeInfo.map((details, i) => {
                            return (<div key={i} style={{ marginTop:"5px" }}>
                              {details.flexAmountDeposited / 10 ** 18}
                            </div>);
                          })} */}
                          {flexStakedDetails.map((detail, i) => {
                            return (
                              <div key={i} style={{ marginTop: "5px" }}>
                                {detail.amountdeposited / 10 ** 18}
                              </div>
                            );
                          })}
                        </div>
                        <div style={{ textAlign: "center" }}>
                          <div> Claimable date</div>
                          <br></br>
                          {/* {flexUnStakeDateBeforeTime.map((date, i) => {
                            return (
                              <div key={i} style={{ marginTop:"5px" }}>
                                {date}
                              </div>);
                          })} */}
                          {_unStakeDateFlex.map((date, i) => {
                            return (
                              <div key={i} style={{ marginTop: "5px" }}>
                                {date}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="dash-global-wrap d-flex flex-column h-100">
                      <div className="d-flex align-items-center justify-content-between text-uppercase staking-deposit-title mb-4">
                        <div style={{ textAlign: "center" }}>
                          <div>Amount</div>
                          <br></br>
                        </div>
                        <div style={{ textAlign: "center" }}>
                          <div> Claimable date</div>
                          <br></br>
                        </div>
                      </div>
                      <div className="flex-shrink-0 h-100">
                        <div className="staking-deposit">No Stake</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Staking;
