import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
//dev: TokenomicsChart Component
function TokenomicsChart() {
  //dev: Chart Data in array of object format(json)
  const [Area, setArea] = useState({
    series: [40, 20, 20, 5, 8, 5, 2],

    options: {
      colors: [
        "#5CABED",
        "#AECCFE",
        "#8DCED8",
        "#BDEEAE",
        "#FFABAB",
        "#FFF2CE",
        "#F66AA2",
        "#CFE0E3",
        "#76FB4B",
      ],

      chart: {
        width: 380,
      },
      labels: [
        "NFT Rewards",
        "Staking rewards/Farming",
        "Ecosystem/Products",
        "Tech Team",
        "Marketing",
        "Partnerships/Exchange Listings",
        "LP",
      ],

      stroke: {
        show: false,
      },

      legend: {
        show: false,
        position: "bottom",
      },
    },
  });

  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="mb-5 mb-lg-0">
            {/*dev: Use ReactApexChart   */}
            <ReactApexChart
              options={Area.options}
              series={Area.series}
              type="pie"
            />
          </div>
        </div>

        <div className="col-lg-6">
          <ul className="tokenomics-legends">
            <span style={{ fontSize: "16px", marginLeft: "16%" }}>
              Max Supply - 1,000,000,000{" "}
            </span>
            {Area.series.map((el, i) => {
              return (
                <li
                  className="d-flex align-items-center gap-4"
                  key={i}
                  style={{ marginTop: "2%" }}
                >
                  <div style={{ backgroundColor: Area.options.colors[i] }}>
                    {el + "%"}
                  </div>
                  <span>{Area.options.labels[i]}</span>
                </li>
                
              );
            })}
          </ul>
          
        </div>
      </div>
    </div>
  );
}

export default TokenomicsChart;
