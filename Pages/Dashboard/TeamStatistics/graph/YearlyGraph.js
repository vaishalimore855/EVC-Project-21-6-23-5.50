import React,{useState,useEffect} from "react";
import ReactApexChart from "react-apexcharts";

const YearlyGraph = () => {
  //API Integration:

  const [seriesData, setSeriesData] = useState([]);
  const newAddress = window.localStorage.getItem("connectedAccount");
  useEffect(() => {
    const fetchData = async () => {
      const data = {
        useraddress: newAddress,
      };

      fetch("http://199.247.3.230:8080/api/users/getyearlyteamturnover", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          setSeriesData(data);
          console.log(" seriesData", data);
        })
        .catch((error) => {
          console.error(error);
        });
    };

    fetchData();
  }, []);
  
console.log("seriesData  teamstatistics - Year  ",seriesData)
  const series = [
    {
      name: "Price",
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
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
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
      ],
    },
  };

  return (
    <div id="chart">
      <h5>Year</h5>
      <ReactApexChart
        //api data
        
        //       series={options.seriesData}
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

export default YearlyGraph;
