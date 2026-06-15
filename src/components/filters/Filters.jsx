function Filters({
  category,
  setCategory,
  region,
  setRegion,
}) {
  return (
    <div className="filters-container">
      <select
        aria-label="Category Filter"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">All Categories</option>
        <option value="Electronics">Electronics</option>
        <option value="Books">Books</option>
        <option value="Clothing">Clothing</option>
      </select>

      <select
        aria-label="Region Filter"
        value={region}
        onChange={(e) => setRegion(e.target.value)}
      >
        <option value="">All Regions</option>
        <option value="North">North</option>
        <option value="South">South</option>
        <option value="East">East</option>
        <option value="West">West</option>
      </select>
    </div>
  );
}

export default Filters;