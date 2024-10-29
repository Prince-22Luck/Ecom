import { useState, useEffect } from "react";
import axios from "axios";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Areac = () => {
  const [salesData, setSalesData] = useState([]);

  useEffect(() => {
    const fetchSalesData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/areachart");
        setSalesData(response.data);
      } catch (error) {
        console.error("Error fetching sales data:", error);
      }
    };

    fetchSalesData();
  }, []);

  return (
    <div>
      <ResponsiveContainer  width={400} height={200}>
        <AreaChart data={salesData}>
          <XAxis dataKey="month" stroke="white" />
          <YAxis stroke="white"/>
          <Tooltip />
          <Area type="linear" dataKey="unitsSold" stroke="white" fillOpacity={0.6} fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Areac;
