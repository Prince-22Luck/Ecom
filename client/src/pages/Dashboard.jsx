import  { useState, useEffect } from "react";
import axios from "axios";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,

} from "recharts";
import Dash1css from './Dashboard.module.css'

const SalesChart = () => {
  const [salesData, setSalesData] = useState([]);

  useEffect(() => {
    const fetchSalesData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/sales");
        setSalesData(response.data);

      } catch (error) {
        console.error("Error fetching sales data:", error);
      }
    };

    fetchSalesData();
  }, []);


  return (
    <div className={Dash1css.container}>
      <ResponsiveContainer width="100%"  height={250}>
      <LineChart width="100%" height="100%"  data={salesData}
  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
  <CartesianGrid  stroke="white" strokeDasharray="6 6" />
  <XAxis dataKey="Month" stroke="black"/>
  <YAxis stroke="white"/>
  <Tooltip />
  <Legend />
  <Line  dataKey="Units_Sold" stroke="black" />
</LineChart>
      </ResponsiveContainer>

{/* 
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={salesData}
          margin={{ top: 20, right: 80, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Part_Name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Revenue" stroke="#8884d8" />
          <Line type="monotone" dataKey="GPU" stroke="#82ca9d" />
        </LineChart>

        
      </ResponsiveContainer> */}
{/* <ResponsiveContainer>

      <AreaChart width={730} height={250} data={salesData}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  {/* <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
    </linearGradient>
  </defs> */}
  {/* <XAxis dataKey="name" />
  <YAxis />
  <CartesianGrid strokeDasharray="3 3" />
  <Tooltip />
  <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
  <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
   </AreaChart> */}
      {/* </ResponsiveContainer>  */}
    </div>
  );
};

export default SalesChart;
