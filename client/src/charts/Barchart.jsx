import  { useEffect, useState } from "react";
import axios from "axios";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const Barchart = () => {
    const [salesData, setSalesData] = useState([]);
    // const [filteredData, setFilteredData] = useState([]);
    // const [selectedCategory, setSelectedCategory] = useState("All");

    useEffect(() => {
      const fetchSalesData = async () => {
        try {
          const response = await axios.get(
            `http://localhost:3001/api/barchart`
          );
          setSalesData(response.data);
          console.log(response.data);
        } catch (error) {
          console.error("Error fetching sales data:", error);
        }
      };
  
      fetchSalesData();
    }, []);

    // const handleCategoryChange = (event) => {
    //   const category = event.target.value;
    //   setSelectedCategory(category);
  
    //   // Filter data based on selected category
    //   if (category === "All") {
    //     setFilteredData(salesData);
    //   } else {
    //     const filtered = salesData.filter(item => item.Category === category);
    //     setFilteredData(filtered);
    //   }
    // };

    
  return (
    <div>
            {/* <select onChange={handleCategoryChange} value={selectedCategory}>
        <option value="All">All Categories</option>
        {Array.from(new Set(salesData.map(item => item.Category))).map((category) => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select> */}
      <ResponsiveContainer width={420}  height={200}>
        <BarChart data={salesData}  >
          <XAxis dataKey="Category"  stroke="white" style={{ opacity: '0' }}/>
          <YAxis  stroke="white" style={{ opacity: '0' }}/>
          <Tooltip />
          <Legend />
          <Bar dataKey="revenue" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Barchart