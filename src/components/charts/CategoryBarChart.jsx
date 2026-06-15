import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

function CategoryBarChart({ data }) {
  const categoryData = [
    {
      category: "Electronics",
      value: data
        .filter(item => item.category === "Electronics")
        .reduce((sum, item) => sum + item.value, 0)
    },
    {
      category: "Books",
      value: data
        .filter(item => item.category === "Books")
        .reduce((sum, item) => sum + item.value, 0)
    },
    {
      category: "Clothing",
      value: data
        .filter(item => item.category === "Clothing")
        .reduce((sum, item) => sum + item.value, 0)
    }
  ];

  return (
    <div className="chart-card">
      <h2>Category Analysis</h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={categoryData}>
          <XAxis dataKey="category" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#16a34a" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default CategoryBarChart;