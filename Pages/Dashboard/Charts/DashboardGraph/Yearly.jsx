import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";

const Yearly = () => {
  //API Integration:

  const [seriesData, setSeriesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://199.247.3.230:8080/api/dashboards/getUsersByMintoneyear"
        );
        const data = await response.json();
        setSeriesData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  console.log(" Mint - Year", seriesData);
  const series = [
    {
      name: "Price",
      // data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
      data: seriesData.totalInvestment,
    },
  ];

  const options = {
    chart: {
      height: 350,
      type: "line",
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
      width: 3,
    },
    title: {
      // text: "NFT Sales",
      align: "left",
    },
    grid: {
      row: {
        opacity: 0.5,
      },
    },
    xaxis: {
      categories: seriesData.mintTime,
      //  [
      //   "Jan",
      //   "Feb",
      //   "Mar",
      //   "Apr",
      //   "May",
      //   "Jun",
      //   "Jul",
      //   "Aug",
      //   "Sep",
      // ],
    },
  };

  return (
    <div id="chart">
      <h5>Year</h5>
      <ReactApexChart
        options={options}
        series={series}
        type="line"
        height={350}
        style={{
          color: "black",
        }}
      />
    </div>
  );
};

export default Yearly;
