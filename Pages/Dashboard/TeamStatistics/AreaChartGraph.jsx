import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
  
const AreaChartGraph = () => {
  
  const data = [
    {
      name: "14 Apr",
      // uv: 4000,
      pv: 4400,
      amt: 4400,
    },
    {
      name: "15 Apr",
      // uv: 3000,
      pv: 1000,
      amt: 4400,
    },
    {
      name: "16 Apr",
      // uv: 2000,
      pv: 5000,
      amt: 4400,
    },
    {
      name: "17 Apr",
      // uv: 2780,
      pv: 3000,
      amt: 4400,
    },
    {
      name: "18 Apr",
      // uv: 1000,
      pv: 4400,
      amt: 4400,
    },
  ];
  return (
    <>
      <AreaChart
        width={800}
        height={300}
        data={data}
        style={{
          width: "50%",
          height: "300px",
          fontSize: "18px",
          margin: "10px 30px 0px 0px",
        }}
      >
        <defs>
         
          <linearGradient id="colorPv" x2="0" y2="1">
            <stop offset="20%" stopColor="#1976d2" stopOpacity={0.6} />
            <stop offset="97%" stopColor="#b9e2f5" stopOpacity={0.9} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeSolidarray="1 1 " />
        <Tooltip />
        
        <Area
          type="monotone"
          dataKey="pv"
          stroke="#1976d2"
          fillOpacity={1}
          strokeWidth={3}
          fill="url(#colorPv)"
        />
      </AreaChart>
      <p
        style={{
          color: "white",
          textAlign: "center",
          fontSize: "16px",
          marginTop: "10px",
          color: "gray",
          marginLeft:"25%"
        }}
      >
        <span style={{ color: "white" }}>
          <span style={{ color: "#1976D2" }}>&#9679;</span>NFT Turnover&nbsp;
        </span>
        <span style={{ color: "#ACF1DD " }}>&#9679;</span>Single Pool
        Turnover&nbsp;
        <span style={{ color: "#F9E8A0" }}>&#9679;</span>Farming Turnover&nbsp;
        <span style={{ color: "#F5B7B1" }}>&#9679;</span>Vault Turnover
      </p>
    </>
  );
};

export default AreaChartGraph;