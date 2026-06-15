import { useState, useEffect } from "react";
import { mockData } from "../data/mockData";

import Filters from "./filters/Filters";
import DateFilter from "./filters/DateFilter";

import SalesLineChart from "./charts/SalesLineChart";
import CategoryBarChart from "./charts/CategoryBarChart";
import RegionPieChart from "./charts/RegionPieChart";

import LoadingSpinner from "./common/LoadingSpinner";
import EmptyState from "./common/EmptyState";
import ErrorState from "./common/ErrorState";

function Dashboard() {
  const [category, setCategory] = useState("");
  const [region, setRegion] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const [loading, setLoading] = useState(true);
  const [error] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const filteredData = mockData.filter((item) => {
    const categoryMatch =
      !category || item.category === category;

    const regionMatch =
      !region || item.region === region;

    const dateMatch =
      (!startDate || item.date >= startDate) &&
      (!endDate || item.date <= endDate);

    return categoryMatch && regionMatch && dateMatch;
  });

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorState />;
  }

  if (filteredData.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="dashboard">
      <h1 role="heading">
  Interactive Data Visualization Dashboard
</h1>

      <Filters
        category={category}
        setCategory={setCategory}
        region={region}
        setRegion={setRegion}
      />

      <DateFilter
        startDate={startDate}
        endDate={endDate}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
      />

      <div className="charts-grid">
        <SalesLineChart data={filteredData} />
        <CategoryBarChart data={filteredData} />
        <RegionPieChart data={filteredData} />
      </div>
    </div>
  );
}

export default Dashboard;