const { Client } = require('pg');
const getClient = () => {
  const client = new Client({
      user: process.env.USER,
      host: process.env.PGHOST,
      database: process.env.PGDATABASE,
      password: process.env.PGPASSWORD,
      port: process.env.PGPORT
  });
  return client;
}

module.exports = getClient;
