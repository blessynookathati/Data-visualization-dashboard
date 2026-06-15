function DateFilter({
  startDate,
  endDate,
  setStartDate,
  setEndDate,
}) {
  return (
    <div className="filters-container">
      <input
  aria-label="Start Date"
  type="date"
  value={startDate}
  onChange={(e) => setStartDate(e.target.value)}
/>
<input
  aria-label="End Date"
  type="date"
  value={endDate}
  onChange={(e) => setEndDate(e.target.value)}
/>
    </div>
  );
}

export default DateFilter;