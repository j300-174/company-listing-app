// TASK 1
const getAvgEmployeeCount = () => {
  return `SELECT AVG(employee_count) FROM tbl_companies;`
}

// TASK 2
const getAvgDealRaised = () => {
  return `SELECT AVG(tbl_deals.valuation), tbl_companies.country
  FROM tbl_deals, tbl_companies WHERE tbl_deals.company_name = tbl_companies.name
  GROUP BY tbl_companies.country;`
}

// TASK 3
const getTotalInvestedPerQuarter = () => {
  return `SELECT SUM(amount_invested), date_part('quarter', date) AS quarter,
  date_part('year', date) AS year FROM tbl_deals GROUP BY year, quarter;`
}

// SELECT ALL COUNTRIES
const selectAllCountries = () => {
  return `SELECT * FROM tbl_countries;`;
}

module.exports.tasks = {
  getAvgEmployeeCount,
  getAvgDealRaised,
  getTotalInvestedPerQuarter
}
