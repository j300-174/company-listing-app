const { Pool, Client } = require('pg');

console.log(process.env.USER);

const client = new Client({
    user: process.env.USER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT
});

client.connect();
client.query('SELECT NOW()', (err, res) => {
  if (err) console.log(err);
  console.log(res.rows[0].now);
  client.end();
});
