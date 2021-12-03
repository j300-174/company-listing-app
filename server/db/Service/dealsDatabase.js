const getClient = require('./client');
const client = getClient();

const getDeals = async() => {
  await client.connect(err => {
    if (err) console.log('already connected, continue');
    else console.log('client connected');
  });
  await client.query(`SELECT * FROM tbl_deals;`, (err, res) => {
    if (err) console.log(err);
    if (res) console.log(res, 'data found successfully');
    // client.end();
  });
}

// export to server
module.exports.deal = {
  getDeals
}
