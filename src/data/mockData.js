export const mockData = [
  { id: 1, date: "2025-01-01", category: "Electronics", value: 1200, region: "North" },
  { id: 2, date: "2025-01-02", category: "Books", value: 300, region: "South" },
  { id: 3, date: "2025-01-03", category: "Clothing", value: 800, region: "East" },
  { id: 4, date: "2025-01-04", category: "Electronics", value: 1500, region: "West" },
  { id: 5, date: "2025-01-05", category: "Books", value: 450, region: "North" },
  { id: 6, date: "2025-01-06", category: "Clothing", value: 650, region: "South" },
  { id: 7, date: "2025-01-07", category: "Electronics", value: 2000, region: "East" },
  { id: 8, date: "2025-01-08", category: "Books", value: 500, region: "West" },
  { id: 9, date: "2025-01-09", category: "Clothing", value: 900, region: "North" },
  { id: 10, date: "2025-01-10", category: "Electronics", value: 1700, region: "South" },

  { id: 11, date: "2025-01-11", category: "Books", value: 600, region: "East" },
  { id: 12, date: "2025-01-12", category: "Clothing", value: 700, region: "West" },
  { id: 13, date: "2025-01-13", category: "Electronics", value: 1900, region: "North" },
  { id: 14, date: "2025-01-14", category: "Books", value: 350, region: "South" },
  { id: 15, date: "2025-01-15", category: "Clothing", value: 750, region: "East" },
  { id: 16, date: "2025-01-16", category: "Electronics", value: 1400, region: "West" },
  { id: 17, date: "2025-01-17", category: "Books", value: 400, region: "North" },
  { id: 18, date: "2025-01-18", category: "Clothing", value: 950, region: "South" },
  { id: 19, date: "2025-01-19", category: "Electronics", value: 2200, region: "East" },
  { id: 20, date: "2025-01-20", category: "Books", value: 550, region: "West" },

  { id: 21, date: "2025-01-21", category: "Clothing", value: 820, region: "North" },
  { id: 22, date: "2025-01-22", category: "Electronics", value: 1600, region: "South" },
  { id: 23, date: "2025-01-23", category: "Books", value: 470, region: "East" },
  { id: 24, date: "2025-01-24", category: "Clothing", value: 880, region: "West" },
  { id: 25, date: "2025-01-25", category: "Electronics", value: 2100, region: "North" },
  { id: 26, date: "2025-01-26", category: "Books", value: 390, region: "South" },
  { id: 27, date: "2025-01-27", category: "Clothing", value: 730, region: "East" },
  { id: 28, date: "2025-01-28", category: "Electronics", value: 1750, region: "West" },
  { id: 29, date: "2025-01-29", category: "Books", value: 510, region: "North" },
  { id: 30, date: "2025-01-30", category: "Clothing", value: 980, region: "South" },
];
for (let i = 31; i <= 100; i++) {
  mockData.push({
    id: i,
    date: `2025-02-${String((i % 28) + 1).padStart(2, "0")}`,
    category: ["Electronics", "Books", "Clothing"][i % 3],
    value: Math.floor(Math.random() * 2000) + 200,
    region: ["North", "South", "East", "West"][i % 4],
  });
}