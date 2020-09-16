export default function getDailyData(sales) {
  const dailyData = sales
    .map((sale) => sale.date)
    .reduce((total, date) => ((total[date] = ++total[date] || 1), total), {})
  return dailyData
}
