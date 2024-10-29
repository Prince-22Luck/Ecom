import  { useEffect, useState } from "react";
import axios from "axios";
import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";



const Barc = ({ category }) => {

    const [salesData, setSalesData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All");

    useEffect(() => {
      const fetchSalesData = async () => {
        try {
          const response = await axios.get(
            `http://localhost:3001/api/sales/${category}`
          );
          setSalesData(response.data);
          console.log(response.data);
        } catch (error) {
          console.error("Error fetching sales data:", error);
        }
      };
  
      fetchSalesData();
    }, [category]);
  return (
    <div>
      Barchart
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={salesData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Part_Name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Units_Sold" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Barc;
