import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend
} from "recharts";

const COLORS = [
  "#2563eb",
  "#16a34a",
  "#f59e0b",
  "#ef4444"
];

function RegionPieChart({ data }) {
  const regionData = [
    {
      region: "North",
      value: data.filter(item => item.region === "North").length
    },
    {
      region: "South",
      value: data.filter(item => item.region === "South").length
    },
    {
      region: "East",
      value: data.filter(item => item.region === "East").length
    },
    {
      region: "West",
      value: data.filter(item => item.region === "West").length
    }
  ];

  return (
    <div className="chart-card">
      <h2>Region Distribution</h2>

      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={regionData}
            dataKey="value"
            nameKey="region"
            outerRadius={100}
            label
          >
            {regionData.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default RegionPieChart;