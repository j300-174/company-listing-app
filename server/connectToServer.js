const { Pool, Client } = require('pg');
const { company } = require('./companies');
const client = new Client({
    user: process.env.USER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT
});

const setupCompanies = () => {
  client.connect();
  client.query(company.createTableCompanies, (err, res) => {
    if (err) console.log(err);
    if (res) console.log(res, 'table created successfully');
    client.end();
  });
}

const dropCompanies = () => {
  client.connect();
  client.query(company.dropTableCompanies, (err, res) => {
    if (err) console.log(err);
    if (res) console.log(res, 'table delete successfully');
  });
}

const insertIntoCompanies = () => {
  client.connect();
  client.query(company.insertIntoCompanies, (err, res) => {
    if (err) console.log(err);
    if (res) console.log(res, 'data inserted successfully');
  });
}

module.exports = {
  setupCompanies,
  dropCompanies,
  insertIntoCompanies
}
