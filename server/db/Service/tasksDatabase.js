const getClient = require('./client');
const client = getClient();

// task1
const getAvgEmployeeCount = async() => {
  await client.connect(err => {
    if (err) console.log('already connected, continue');
    else console.log('client connected');
  });
  let result = await client.query(`SELECT AVG(employee_count) FROM tbl_companies;`)
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
  let result = await client.query(
    `SELECT AVG(tbl_deals.valuation), tbl_companies.country
    FROM tbl_deals, tbl_companies WHERE
    tbl_deals.company_name = tbl_companies.name
    GROUP BY tbl_companies.country;`
  ).then(console.log('average deal raised calculated'))
  .catch(error => console.log(error.stack));
  if (result) return result.rows;
}

// task3
const getTotalInvestedPerQuarter = async() => {
  await client.connect(err => {
    if (err) console.log('already connected, continue');
    else console.log('client connected');
  });
  let result = await client.query(
    `SELECT SUM(amount_invested), date_part('quarter', date) AS quarter,
    date_part('year', date) AS year FROM tbl_deals GROUP BY year, quarter;`
  )
    .then(console.log('total invested per quarter calculated'))
    .catch(error => console.log(error.stack));
  if (result) return result.rows;
}

module.exports.tasks = {
  getAvgEmployeeCount,
  getAvgDealRaised,
  getTotalInvestedPerQuarter
}
