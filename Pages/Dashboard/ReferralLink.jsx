import React, { useState, useEffect } from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Link } from "react-router-dom";
import { AiOutlineCopy } from "react-icons/ai";
import { Tooltip } from "@mui/material";
import { IconButton, Grid } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { getMyReferrer } from "../../ContractAction/EVCNFTContractAction";

//dev: Postthe  data for API
const postData = () => {
  const affiliateaddress = window.localStorage.getItem("connectedAccount");
  const sponsoraddress = window.localStorage.getItem("sponsorAddress");
  console.log("sponsoraddress: ", sponsoraddress);
  const data = {
    affiliateaddress: affiliateaddress,
    sponsoraddress: sponsoraddress,
  };

  //dev: Fetch the API Data
  fetch("http://199.247.3.230:8080/api/users/userreferral", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((result) => {
      console.log("result....", result);
      return result.json();
    })
    .catch((err) => console.log(err));
};

const ReferralLink = ({ title }) => {

  const [myreferrer, setMyReferrer] = useState();
  useEffect(() => {
    const getData = async () => {
      let referrerInfo = await getMyReferrer()
      setMyReferrer(referrerInfo);
    }
    getData();
  }, []);
  console.log("myreferrer", myreferrer)

  const text = "http://localhost:3000/dashboard?ref=$";

  const affiliateaddress = window.localStorage.getItem("connectedAccount");
  const sponsoraddress = window.localStorage.getItem("sponsorAddress");
  // useEffect(() => {
  postData();
  // }, []);


  //dev: Copy text
  const handleCopy = (text) => {
    navigator.clipboard.writeText(`${text}${affiliateaddress}`);
    toast.success ("Copied!", { autoClose: 1000});
  };
  useEffect(() => {
    document.title = title ? title : "EVC Avatars | Referral Link";
    document.querySelector(".page-title").innerText = "Referral Link";
  }, []);

  console.log("add", affiliateaddress);

  return (
    <div className="dashboard-wrap">
      <Breadcrumb>
        <li className="breadcrumb-item">
          <Link to="/">HOME</Link>
        </li>
        <Breadcrumb.Item active>Referral Link</Breadcrumb.Item>
      </Breadcrumb>

      <div className="dash-content-area">
        <div className="h1 font-gilroy fw-semibold mt-3 mb-4 pb-3"></div>
        <div
          className="dash-global-wrap"
          style={{
            borderRadius: "12px",
            border: "1px solid gray",
            position: "absolute",
            top: "35%",
            left: "30%",
            height: "250px",
            width: "57%",
          }}
        >
          <span style={{ marginLeft: "90%", fontSize: "20px" }}>
            <AiOutlineCopy onClick={() => handleCopy(text)} />
          </span>

          {/*dev:Show the Sponsor Address */}
          <p style={{ fontSize: "18px", margin: "1% 2%",width:"auto"}}>
            Sponsor Address : <Link style={{width:"auto"}}>{myreferrer != "0x0000000000000000000000000000000000000000" ? myreferrer : "-"}</Link>
          </p>

          {/*dev:Show the  Reference Address */}
          <p style={{ fontSize: "18px", margin: "5% 2%" ,width:"auto"}}>
            {" "}
            Your Link :{" "}
            <Link>http://localhost:3000/dashboard?ref=${affiliateaddress}</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReferralLink;
  


// import React, { useState, useEffect } from "react";
// import Breadcrumb from "react-bootstrap/Breadcrumb";
// import { Link } from "react-router-dom";
// import { AiOutlineCopy } from "react-icons/ai";
// import { Tooltip } from "@mui/material";
// import { IconButton, Grid } from "@mui/material";
// import Snackbar from "@mui/material/Snackbar";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// import { getMyReferrer } from "../../ContractAction/EVCNFTContractAction";

// //dev: Postthe  data for API
// const postData = () => {
//   const affiliateaddress = window.localStorage.getItem("connectedAccount");
//   const sponsoraddress = window.localStorage.getItem("sponsorAddress");
//   console.log("sponsoraddress: ", sponsoraddress);
//   const data = {
//     affiliateaddress: affiliateaddress,
//     sponsoraddress: sponsoraddress,
//   };

//   //dev: Fetch the API Data
//   fetch("http://199.247.3.230:8080/api/users/userreferral", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   })
//     .then((result) => {
//       console.log("result....", result);
//       return result.json();
//     })
//     .catch((err) => console.log(err));
// };

// const ReferralLink = ({ title }) => {

//   const [myreferrer, setMyReferrer] = useState();
//   useEffect(() => {
//     const getData = async () => {
//       let referrerInfo = await getMyReferrer()
//       setMyReferrer(referrerInfo);
//     }
//     getData();
//   }, []);
//   console.log("myreferrer", myreferrer)

//   const text = "http://localhost:3000/dashboard?ref=$";

//   const affiliateaddress = window.localStorage.getItem("connectedAccount");
//   const sponsoraddress = window.localStorage.getItem("sponsorAddress");
//   // useEffect(() => {
//   postData();
//   // }, []);


//   //dev: Copy text
//   const handleCopy = (text) => {
//     navigator.clipboard.writeText(`${text}${affiliateaddress}`);
//     toast.success ("Copied!", { autoClose: 1000});
//   };
//   useEffect(() => {
//     document.title = title ? title : "EVC Avatars | Referral Link";
//     document.querySelector(".page-title").innerText = "Referral Link";
//   }, []);

//   console.log("add", affiliateaddress);

//   return (
//     <div className="dashboard-wrap">
//       <Breadcrumb>
//         <li className="breadcrumb-item">
//           <Link to="/">HOME</Link>
//         </li>
//         <Breadcrumb.Item active>Referral Link</Breadcrumb.Item>
//       </Breadcrumb>

//       <div className="dash-content-area">
//         <div className="h1 font-gilroy fw-semibold mt-3 mb-4 pb-3"></div>
//         <div
//           className="dash-global-wrap"
//           style={{
//             borderRadius: "12px",
//             border: "1px solid gray",
//             position: "absolute",
//             top: "35%",
//             left: "30%",
//             height: "250px",
//             width: "57%",
//           }}
//         >
//           <span style={{ marginLeft: "90%", fontSize: "20px" }}>
//             <AiOutlineCopy onClick={() => handleCopy(text)} />
//           </span>

//           {/*dev:Show the Sponsor Address */}
//           <p style={{ fontSize: "18px", margin: "1% 2%",width:"auto"}}>
//             Sponsor Address : <Link style={{width:"auto"}}>{myreferrer != "0x0000000000000000000000000000000000000000" ? myreferrer : "-"}</Link>
//           </p>

//           {/*dev:Show the  Reference Address */}
//           <p style={{ fontSize: "18px", margin: "5% 2%" ,width:"auto"}}>
//             {" "}
//             Your Link :{" "}
//             <Link>http://localhost:3000/dashboard?ref=${affiliateaddress}</Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ReferralLink;
