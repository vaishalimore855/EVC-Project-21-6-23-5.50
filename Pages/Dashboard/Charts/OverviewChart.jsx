// // // import React from "react";
// // // import ReactApexChart from "react-apexcharts";

// // // //dev: Start DashChart Component
// // // class DashChart extends React.Component {
// // //     constructor(props) {
// // //         super(props);

// // //         this.state = {

// // //             series: [{
// // //                 name: 'Net Profit',
// // //                 data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 40, 44, 55, 57, 56]
// // //             }, {
// // //                 name: 'Total Earning',
// // //                 data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 76, 85, 101, 98, 88]
// // //             }],
// // //             options: {
// // //                 colors: ['#306FFF', '#30C9C9'],
// // //                 chart: {
// // //                     height: 250,
// // //                     type: 'bar',
// // //                     background: 'rgba(0, 0, 0, 0)',
// // //                     toolbar: {
// // //                         show: false
// // //                     }
// // //                 },
// // //                 xaxis: {
// // //                     axisBorder: {
// // //                         show: false,
// // //                     },
// // //                     labels: {
// // //                         show: true
// // //                     },
// // //                     axisTicks: {
// // //                         show: false
// // //                     },
// // //                     categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14'],
// // //                 },
// // //                 yaxis: {
// // //                     labels: {
// // //                         formatter: function (value) {
// // //                             return value.toFixed(2);
// // //                         }
// // //                     }
// // //                 },
// // //                 grid: {
// // //                     show: true,
// // //                     borderColor: '#1F1F2B',
// // //                     strokeDashArray: 3,
// // //                     xaxis: {
// // //                         lines: {
// // //                             show: false
// // //                         }
// // //                     }
// // //                 },
// // //                 tooltip: {
// // //                     show: false
// // //                 },
// // //                 theme: {
// // //                     mode: "dark",
// // //                     monochrome: {
// // //                         enabled: false,
// // //                         color: '#fff',
// // //                         shadeTo: 'dark',
// // //                         shadeIntensity: 0
// // //                     },
// // //                 },
// // //                 legend: {
// // //                     show: false
// // //                 },
// // //                 stroke: {
// // //                     show: true,
// // //                     curve: 'smooth',
// // //                     lineCap: 'butt',
// // //                     colors: ['transparent'],
// // //                     width: 0,
// // //                     dashArray: 0,
// // //                 },
// // //                 dataLabels: {
// // //                     enabled: false
// // //                 }
// // //             },
// // //         };
// // //     };

// // //     render() {
// // //         return (
// // //             <>
// // //                 <div className="row">
// // //                     <div className="col-sm-6">
// // //                         <div className="h4">Overview</div>
// // //                     </div>
// // //                 </div>
// // //                 <div id="dashChart">
// // //                     <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={300} />
// // //                 </div>
// // //             </>
// // //         )
// // //     }
// // // }

// // // export default DashChart;

// // import React from "react";
// // import ReactApexChart from "react-apexcharts";

// // class ApexChart extends React.Component {
// //   constructor(props) {
// //     super(props);

// //     this.state = {
// //       series: [
// //         {
// //           name: "Price",
// //           data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
// //         },
// //       ],
// //       options: {
// //         chart: {
// //           height: 350,
// //           type: "line",
// //           zoom: {
// //             enabled: true,
// //           },
// //         },
// //         dataLabels: {
// //           enabled: false,
// //         },
// //         stroke: {
// //           curve: "straight",
// //           width: 3,
// //         },

// //         title: {
// //           text: "NFT Sales",
// //           align: "left",
// //         },
// //         grid: {
// //           row: {
// //             //   colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
// //             opacity: 0.5,
// //           },
// //         },
// //         xaxis: {
// //           categories: [
// //             "Jan",
// //             "Feb",
// //             "Mar",
// //             "Apr",
// //             "May",
// //             "Jun",
// //             "Jul",
// //             "Aug",
// //             "Sep",
// //           ],
// //         },
// //       },
// //     };
// //   }

// //   render() {
// //     return (
// //       <div id="chart">
// //         <ReactApexChart
// //           options={this.state.options}
// //           series={this.state.series}
// //           type="line"
// //           height={350}
// //           style={{
// //             color: "black",
// //           }}
// //         />
// //       </div>    
// //     );
// //   }
// // }
// // export default ApexChart;




// // import React from "react";
// // import {
// //   AreaChart,
// //   Area,
// //   XAxis,
// //   YAxis,
// //   CartesianGrid,
// //   Tooltip,
// // } from "recharts";
  
// // const MonthChart = () => {
  
// //   const data = [
// //     {
// //       name: "14 Apr",
// //       // uv: 4000,
// //       pv: 4400,
// //       amt: 4400,
// //     },
// //     {
// //       name: "15 Apr",
// //       // uv: 3000,
// //       pv: 1000,
// //       amt: 4400,
// //     },
// //     {
// //       name: "16 Apr",
// //       // uv: 2000,
// //       pv: 5000,
// //       amt: 4400,
// //     },
// //     {
// //       name: "17 Apr",
// //       // uv: 2780,
// //       pv: 3000,
// //       amt: 4400,
// //     },
// //     {
// //       name: "18 Apr",
// //       // uv: 1000,
// //       pv: 4400,
// //       amt: 4400,
// //     },
// //   ];
// //   return (
// //     <>
// //       <AreaChart
// //         width={900}
// //         height={300}
// //         data={data}
// //         style={{
// //           width: "50%",
// //           height: "300px",
// //           fontSize: "18px",
// //           margin: "10px 30px 0px 0px",
// //         }}
// //       >
// //         <defs>
         
// //           <linearGradient id="colorPv" x2="0" y2="1">
// //             <stop offset="20%" stopColor="#1976d2" stopOpacity={0.6} />
// //             <stop offset="97%" stopColor="#b9e2f5" stopOpacity={0.9} />
// //           </linearGradient>
// //         </defs>
// //         <XAxis dataKey="name" />
// //         <YAxis />
// //         <CartesianGrid strokeSolidarray="1 1 " />
// //         <Tooltip />
        
// //         <Area
// //           type="monotone"
// //           dataKey="pv"
// //           stroke="#1976d2"
// //           fillOpacity={1}
// //           strokeWidth={3}
// //           fill="url(#colorPv)"
// //         />
// //       </AreaChart>
// //       <p
// //         style={{
// //           color: "white",
// //           textAlign: "center",
// //           fontSize: "16px",
// //           marginTop: "10px",
// //           color: "gray",
// //           marginLeft:"25%"
// //         }}
// //       >
// //         <span style={{ color: "white" }}>
// //           <span style={{ color: "#1976D2" }}>&#9679;</span>NFT Turnover&nbsp;
// //         </span>
// //         <span style={{ color: "#ACF1DD " }}>&#9679;</span>Single Pool
// //         Turnover&nbsp;
// //         <span style={{ color: "#F9E8A0" }}>&#9679;</span>Farming Turnover&nbsp;
// //         <span style={{ color: "#F5B7B1" }}>&#9679;</span>Vault Turnover
// //       </p>
// //     </>
// //   );
// // };

// // export default MonthChart;



// import React from "react";
// import ReactApexChart from "react-apexcharts";

// class ApexChart extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       series: [
//         {
//           name: "Price",
//           data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
//         },
//       ],
//       options: {
//         chart: {
//           height: 350,
//           type: "line",
//           zoom: {
//             enabled: false,
//           },
//         },
//         dataLabels: {
//           enabled: false,
//         },
//         stroke: {
//           curve: "straight",
//           width: 3,
//         },

//         title: {
//           text: "NFT Sales",
//           align: "left",
//         },
//         grid: {
//           row: {
//             //   colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
//             opacity: 0.5,
//           },
//         },
//         xaxis: {
//           categories: [
//             " 1 Jan",
//             "5 Jan",
//             " 10 Jan",
//             " 15 Jan",
//             "18 Jan",
//             "20 Jan",
//             "24 Jan",
//             "25 Jan",
//             "1 Feb",
//           ],
//         },
//       },
//     };
//   }

//   render() {
//     return (
//       <div id="chart" >
//        {/* <h4 style={{ marginLeft: 30 }}>Month</h4> */}
//         <ReactApexChart
//           options={this.state.options}
//           series={this.state.series}
//           type="line"
//           height={350}
//           style={{
//             color: "black",
//           }}
//         />
//       </div>    
//     );
//   }
// }
// export default ApexChart;



import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

const ApexChart = () => {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://199.247.3.230:8080/api/dashboards/getTotalBurnByoneday");
        const data = await response.json();
        setSeries(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const options = {
    chart: {
      type: "area",
      height: 350,
    },
    series: [
      {
        name: "Earnings",
        data: series,
      },
    ],
    xaxis: {
      type: "datetime",
    },
  };

  return (
    <div>
      <ReactApexChart options={options} series={options.series} type="area" height={350} />
    </div>
  );
};

export default ApexChart;

