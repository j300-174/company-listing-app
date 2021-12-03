const { Pool, Client } = require('pg');
const { deals } = require('../SQLCommands/dealsCommands');
const client = new Client({
    user: process.env.USER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT
});

const getDeals = async() => {
  await client.connect(err => {
    if (err) console.log('already connected, continue');
    else console.log('client connected');
  });
  await client.query(deals.selectTableDeals(), (err, res) => {
    if (err) console.log(err);
    if (res) console.log(res, 'data found successfully');
    // client.end();
  });
}

// export to server
module.exports.deal = {
  getDeals
}
