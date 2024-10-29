import axios from "axios";
import  { useEffect, useState } from "react";
import Dash1css from './Dashboard.module.css';
import { PieChart, Pie,Cell,Tooltip,Legend, ResponsiveContainer } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const pieChart = ({category}) => {
    const [salesData, setSalesData] = useState([]);

  useEffect(() => {
    const fetchSalesData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/api/sales/${category}`
        );
        setSalesData(response.data);
      } catch (error) {
        console.error("Error fetching sales data:", error);
      }
    };

    fetchSalesData();
  }, [category]);
  return <div className={Dash1css.container}>
     <ResponsiveContainer width="100%" height="100%">
     <PieChart width={400} height={400}>
      <Pie
        data={salesData}
        cx={200} // x-coordinate of center
        cy={200} // y-coordinate of center
        labelLine={false}
        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`} // Labels inside pie chart
        outerRadius={150}
        fill="#8884d8"
        dataKey="value" // This should be the key that contains your sales data value
      >
        {salesData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
      </ResponsiveContainer>
    </div>;
};

export default pieChart;
