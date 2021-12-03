// CREATE TABLE COMPANIES
const createTableCompanies = () => {
  return `CREATE TABLE IF NOT EXISTS tbl_companies (
    name TEXT PRIMARY KEY,
    employee_count INT NOT NULL,
    date_founded DATE NOT NULL,
    country TEXT NOT NULL,
    description TEXT NOT NULL
  );`;
}

module.exports.company = {
  createTableCompanies
}
