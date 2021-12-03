const createTableDeals = () => {
  return `CREATE TABLE IF NOT EXISTS tbl_deals (
    deals_id SERIAL PRIMARY KEY,
    date DATE NOT NULL,
    amount_invested INTEGER NOT NULL,
    valuation INTEGER NOT NULL,
    company_name TEXT NOT NULL REFERENCES tbl_companies(name)
  );`;
}

module.exports.deals = {
  createTableDeals
}
