// CREATE TABLE COUNTRIES
const createTableCountries = () => {
  return `CREATE TABLE tbl_countries (
    country_id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    iso_code TEXT NOT NULL
  );`
}

// DROP TABLE COUNTRIES
const dropTableCountries = () => {
  return `DROP TABLE tbl_countries CASCADE;`;
}

// INSERT DATA INTO COUNTRIES
const insertIntoCountries = () => {
  return `INSERT INTO tbl_countries (name, iso_code)
  SELECT * FROM jsonb_to_recordset (
    '[
        {
            "name": "United Kingdom",
            "iso_code": "GBR"
        },
        {
            "name": "France",
            "iso_code": "FRA"
        },
        {
            "name": "Germany",
            "iso_code": "DEU"
        },
        {
            "name": "United States of America",
            "iso_code": "USA"
        }
    ]'
  ) AS x(name text, iso_code text);`
}

// SELECT ALL COUNTRIES
const selectAllCountries = () => {
  return `SELECT * FROM tbl_countries;`;
}

module.exports.countries = {
  createTableCountries,
  dropTableCountries,
  insertIntoCountries,
  selectAllCountries
}
