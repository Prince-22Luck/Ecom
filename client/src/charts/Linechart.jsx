import  { useState, useEffect } from "react";
import axios from "axios";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const Linechart = () => {
  const [salesData, setSalesData] = useState([]);

  useEffect(() => {
    const fetchSalesData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/api/line`
        );
        setSalesData(response.data);
      } catch (error) {
        console.error("Error fetching sales data:", error);
      }
    };

    fetchSalesData();
  },[]); // Fetch data when the category changes

  return (
    <div>
      <ResponsiveContainer width={680} height={200}>
        <LineChart data={salesData}>
          <XAxis dataKey="month" stroke="white" />
          <YAxis stroke="white" />
          <Tooltip />
          <Legend />
          <Line type="linear" dataKey="revenue" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};





export default Linechart