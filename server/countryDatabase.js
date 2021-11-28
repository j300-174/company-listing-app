const { countries } = require('./countriesCommands');
const { Pool, Client } = require('pg');
const client = new Client({
    user: process.env.USER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT
});

const setupCountries = async() => {
  await client.connect(err => {
    if (err) console.log('already connected, continue');
    else console.log('client, connected');
  });
  let result = await client.query(countries.createTableCountries())
    .then(console.log('country table setup successfully'))
    .catch(error => console.log(error.stack));
  if (result) console.log(result);
}

const dropCountries= async() => {
  await client.connect(err => {
    if (err) console.log('already connected, continue');
    else console.log('client connected');
  })
  let result = await client.query(countries.dropTableCountries())
    .then(console.log('country table dropped successfully'))
    .catch(error => console.log(error.stack));
  if (result) console.log(result);
}

const insertIntoCountries = async() => {
  await client.connect(err => {
    if (err) console.log('already connected, continue');
    else console.log('client connected');
  })
  let result = await client.query(countries.insertIntoCountries())
    .then(console.log('country data inserted successfully'))
    .catch(error => console.log(error.stack));
  if (result) console.log(result);
}

const getCountries = async() => {
  await client.connect(err => {
    if (err) console.log('already connected, continue');
    else console.log('client, connected');
  });

  let result = await client.query(countries.selectAllCountries())
    .then(console.log('country names found successfully'))
    .catch(error => console.log(error.stack));
  if (result) console.log(result.rows);
}

module.exports.countries = {
  setupCountries,
  dropCountries,
  insertIntoCountries,
  getCountries
}
