import { useState, useEffect } from "react";
import axios from "axios";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
  LabelList
} from "recharts";

const BarchartWithFilter = () => {
  const [salesData, setSalesData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const fetchSalesData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/barchart");
        setSalesData(response.data);
        setFilteredData(response.data); // Set initial filtered data to all data
      } catch (error) {
        console.error("Error fetching sales data:", error);
      }
    };

    fetchSalesData();
  }, []);

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);

    // Filter data based on selected category
    if (category === "All") {
      setFilteredData(salesData);
    } else {
      const filtered = salesData.filter(item => item.Category === category);
      setFilteredData(filtered);
    }
  };

  return (
    <div>
      <h2>Sales by Category</h2>

      {/* Dropdown for category selection */}
      <select onChange={handleCategoryChange} value={selectedCategory}>
        <option value="All">All Categories</option>
        {Array.from(new Set(salesData.map(item => item.Category))).map((category) => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>

      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={filteredData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Category" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="revenue" fill="#82ca9d">
            <LabelList dataKey="revenue" position="top" />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarchartWithFilter;
