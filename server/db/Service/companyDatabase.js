const { Pool, Client } = require('pg');
const { company } = require('../SQLCommands/companiesCommands');
const client = new Client({
    user: process.env.USER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT
});

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

const getCompanyByID = async(nameID) => {
  await client.connect(err => {
    if (err) console.log('already connected, continue');
    else console.log('client, connected');
  });

  // handle ID w/ %2F
  if (nameID.includes('%2F')) {
    let x = nameID.replace('%2F', '/');
    nameID = x;
  }

  let result = await client.query(company.selectOneCompany(nameID))
    .then(console.log('company found successfully'))
    .catch(error => console.log(error.stack));

  if (result) {
    console.log('client has data, now disconnected', result.rows);
    return result.rows[0];
  }
}

module.exports.company = {
  getCompanyNames,
  getCompany,
  getCompanyByID
}
