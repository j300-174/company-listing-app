// CREATE TABLE COUNTRIES
const createTableCountries = () => {
  return `CREATE TABLE IF NOT EXISTS tbl_countries (
    country_id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    iso_code TEXT NOT NULL
  );`
}

// SELECT ALL COUNTRIES
const selectAllCountries = () => {
  return `SELECT * FROM tbl_countries;`;
}

module.exports.countries = {
  createTableCountries,
  selectAllCountries
}
