const { Pool, Client } = require('pg');
const { company } = require('./companiesCommands');
const client = new Client({
    user: process.env.USER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT
});

const setupCompanies = async() => {
  await client.connect(err => {
    if (err) console.log('already connected, continue');
    else console.log('client connected');
  });
  await client.query(company.createTableCompanies(), (err, res) => {
    if (err) console.log(err);
    if (res) console.log(res, 'table created successfully');
  });
}

const dropCompanies = async() => {
  await client.connect(err => {
    if (err) console.log('already connected, continue');
    else console.log('client connected');
  })
  await client.query(company.dropTableCompanies(), (err, res) => {
    if (err) console.log(err);
    if (res) console.log(res, 'table delete successfully');
  });
}

const insertIntoCompanies = async() => {
  await client.connect(err => {
    if (err) console.log('already connected, continue');
    else console.log('client connected');
  })
  await client.query(company.insertIntoCompanies(), (err, res) => {
    if (err) console.log(err);
    if (res) console.log(res, 'data inserted successfully');
  });
}

const getCompany = async() => {
  await client.connect(err => {
    if (err) console.log('already connected, continue');
    else console.log('client, connected');
  });

  let result = await client.query(company.selectTableCompanies())
    .then(console.log('company names found successfully'))
    .catch(error => console.log(error.stack));

    if (result) {
      console.log(result, 'data found successfully');
      return result.rows;
    }
}

const getCompanyNames = async() => {
  await client.connect(err => {
    if (err) console.log('already connected, continue');
    else console.log('client, connected');
  });

  let result = await client.query(company.selectCompanyNames())
    .then(console.log('company names found successfully'))
    .catch(error => console.log(error.stack));
  if (result) {
    console.log('client has data, now disconnected');
    return result.rows;
  }
}

module.exports.company = {
  setupCompanies,
  dropCompanies,
  insertIntoCompanies,
  getCompanyNames,
  getCompany
}
