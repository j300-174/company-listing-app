const { tasks } = require('./tasksCommands');
const { company } = require('./companiesCommands');
const { Pool, Client } = require('pg');
const client = new Client({
    user: process.env.USER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT
});

// task1
const getAvgEmployeeCount = async() => {
  await client.connect(err => {
    if (err) console.log('already connected, continue');
    else console.log('client connected');
  });
  let result = await client.query(tasks.getAvgEmployeeCount())
    .then(console.log('average employee calculated'))
    .catch(error => console.log(error.stack));
    // return avg object
  if (result) return (result.rows[0]);
}

// task2
const getAvgDealRaised = async() => {
  await client.connect(err => {
    if (err) console.log('already connected, continue');
    else console.log('client connected');
  });
  let result = await client.query(tasks.getAvgDealRaised())
    .then(console.log('average deal raised calculated'))
    .catch(error => console.log(error.stack));
  if (result) return result.rows;
}

// task3
const getTotalInvestedPerQuarter = async() => {
  await client.connect(err => {
    if (err) console.log('already connected, continue');
    else console.log('client connected');
  });
  let result = await client.query(tasks.getTotalInvestedPerQuarter())
    .then(console.log('total invested per quarter calculated'))
    .catch(error => console.log(error.stack));
  if (result) return result.rows;
}

module.exports.tasks = {
  getAvgEmployeeCount,
  getAvgDealRaised,
  getTotalInvestedPerQuarter
}
