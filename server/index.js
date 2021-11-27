const express = require('express');
const app = express();
const port = 3001;
const { deal } = require('./dealsDatabase');
const { company } = require('./companyDatabase');
app.get('/', (req, res) => {
  res.send('hello world');
})

app.get('/company/list', (req, res) => {
  deal.getDeals();
  company.getCompany();
  res.send('check console if company listed');
})

app.listen(port, () => {
  console.log(`Listening at port: ${port}`);
})
