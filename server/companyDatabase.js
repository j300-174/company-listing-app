const { Pool, Client } = require('pg');
const { company } = require('./companiesCommands');
const client = new Client({
    user: process.env.USER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT
});
client.connect();

const setupCompanies = async() => {
  await client.query(company.createTableCompanies(), (err, res) => {
    if (err) console.log(err);
    if (res) console.log(res, 'table created successfully');
    // client.end();
  });
}

const dropCompanies = async() => {
  await client.query(company.dropTableCompanies(), (err, res) => {
    if (err) console.log(err);
    if (res) console.log(res, 'table delete successfully');
    // client.end();
  });
}

const insertIntoCompanies = async() => {
  await client.query(company.insertIntoCompanies(), (err, res) => {
    if (err) console.log(err);
    if (res) console.log(res, 'data inserted successfully');
    // client.end();
  });
}

const getCompany = async() => {
  await client.query(company.selectTableCompanies(), (err, res) => {
    if (err) console.log(err);
    if (res) console.log(res, 'data found successfully');
    // client.end();
  });
}

// export to main app
module.exports = {
  setupCompanies,
  dropCompanies,
  insertIntoCompanies,
  getCompany
}
