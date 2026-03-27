import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const Chart = ({ data }) => {
  const emptyData = [
    { name: "Balance", value: 0 },
    { name: "Purchases", value: 0 },
    { name: "Cash", value: 0 },
    { name: "Limit", value: 0 },
    { name: "Payments", value: 0 },
  ];

  return (
    <div className="card">
      <h3>Customer Data</h3>

      <BarChart width={500} height={300} data={data || emptyData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" fill="#4f6ef7" />
      </BarChart>
    </div>
  );
};

export default Chart;