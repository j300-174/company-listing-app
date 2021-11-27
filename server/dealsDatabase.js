const { Pool, Client } = require('pg');
const { deals } = require('./dealsCommands');
const client = new Client({
    user: process.env.USER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT
});

// client.connect();
const setupDeals = async() => {
  await client.connect();
  await client.query(deals.createTableDeals(), (err, res) => {
    if (err) console.log(err);
    if (res) console.log(res, 'table created successfully');
    // client.end();
  });
}

const dropDeals = async() => {
  await client.connect();
  await client.query(deals.dropTableDeals(), (err, res) => {
    if (err) console.log(err);
    if (res) console.log(res, 'table delete successfully');
    // client.end();
  });
}

const insertIntoDeals = async() => {
  await client.connect();
  await client.query(deals.insertIntoDeals(), (err, res) => {
    if (err) console.log(err);
    if (res) console.log(res, 'data inserted successfully');
    // client.end();
  });
}

const getDeals = async() => {
  await client.connect();
  await client.query(deals.selectTableDeals(), (err, res) => {
    if (err) console.log(err);
    if (res) console.log(res, 'data found successfully');
    // client.end();
  });
}

// export to server
module.exports = {
  setupDeals,
  dropDeals,
  insertIntoDeals,
  getDeals
}
