const getClient = require('./client');
const client = getClient();

const getCountries = async() => {
  await client.connect(err => {
    if (err) console.log('already connected, continue');
    else console.log('client, connected');
  });

  let result = await client.query(`SELECT * FROM tbl_countries;`)
    .then(console.log('country names found successfully'))
    .catch(error => console.log(error.stack));
  if (result) console.log(result.rows);
}

module.exports.countries = {
  getCountries
}
