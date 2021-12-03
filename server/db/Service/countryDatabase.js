const { countries } = require('../SQLCommands/countriesCommands');
const { Pool, Client } = require('pg');
const client = new Client({
    user: process.env.USER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT
});

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
  getCountries
}
