export const filterData = (data, filters) => {
  let filtered = [...data];

  if (filters.category) {
    filtered = filtered.filter(
      item => item.category === filters.category
    );
  }

  if (filters.region) {
    filtered = filtered.filter(
      item => item.region === filters.region
    );
  }

  return filtered;
};