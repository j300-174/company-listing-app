// CREATE TABLE COMPANIES
const createTableCompanies = () => {
  return `CREATE TABLE tbl_companies (
    name TEXT PRIMARY KEY,
    employee_count INT NOT NULL,
    date_founded DATE NOT NULL,
    country TEXT NOT NULL,
    description TEXT NOT NULL
  );`;
}

// DROP TABLE COMPANIES
const dropTableCompanies = () => {
  return `DROP TABLE tbl_companies CASCADE;`;
}

// INSERT INTO COMPANIES
const insertIntoCompanies = () => {
  return `INSERT INTO tbl_companies
  SELECT * FROM jsonb_to_recordset(
    '[
        {
            "name": "Stella Novus",
            "employee_count": 10,
            "date_founded": "2010-03-17",
            "country": "GBR",
            "description": "Selfie drones. Cheap drones that you can attach your smartphone to, that will take the best possible selfie/group selfie."
        },
        {
            "name": "Interstellus",
            "employee_count": 267,
            "date_founded": "2012-01-07",
            "country": "GBR",
            "description": "Uber for caregivers"
        },
        {
            "name": "Eratech",
            "employee_count": 1934,
            "date_founded": "2013-09-03",
            "country": "FRA",
            "description": "Real world bookmarking app"
        },
        {
            "name": "Cybernetix",
            "employee_count": 3,
            "date_founded": "2013-10-30",
            "country": "GBR",
            "description": "A platform for entrepreneurs to find co-founders"
        },
        {
            "name": "Surefire Software",
            "employee_count": 78,
            "date_founded": "2015-04-10",
            "country": "DEU",
            "description": "Travel agency that shows you dying civilizations"
        },
        {
            "name": "Testerix",
            "employee_count": 19,
            "date_founded": "2015-06-01",
            "country": "GBR",
            "description": "A social platform for watching sports and communicating with others who are watching the same game"
        },
        {
            "name": "Micronus",
            "employee_count": 6,
            "date_founded": "2017-02-28",
            "country": "GBR",
            "description": "An app to tell you exact wait times at restaurants nearby"
        },
        {
            "name": "Neocell Systems",
            "employee_count": 13,
            "date_founded": "2017-11-16",
            "country": "USA",
            "description": "Service to rent a personal assistant for the day"
        },
        {
            "name": "Networx",
            "employee_count": 2,
            "date_founded": "2017-10-04",
            "country": "USA",
            "description": "A gift card exchange marketplace where anybody can buy, sell, or trade their new or pre-owned gift cards"
        },
        {
            "name": "Consultio/Consultius",
            "employee_count": 19,
            "date_founded": "2020-12-03",
            "country": "GBR",
            "description": "An ethical hotline - ethics experts answer questions related to ethics for fee per hour"
        }
    ]'
  ) AS x(name text, employee_count int, date_founded date, country text, description text);`;
}

// Select all companies
const selectTableCompanies = () => {
  return `SELECT * FROM tbl_companies;`;
}

// Select only company names
const selectCompanyNames = () => {
  return `SELECT name FROM tbl_companies;`
}

// Select single company
const selectOneCompany = (name) => {
  return `SELECT * FROM tbl_companies WHERE name = '${name}';`;
}

module.exports.company = {
  createTableCompanies,
  dropTableCompanies,
  insertIntoCompanies,
  selectTableCompanies,
  selectCompanyNames,
  selectOneCompany
}
