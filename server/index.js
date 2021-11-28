const express = require('express');
const app = express();
const port = 3001;
const { deal } = require('./dealsDatabase');
const { company } = require('./companyDatabase');
const cors = require('cors');

// specific urls used for CORS
app.use('/company/names', cors());
app.use('/company/list', cors());

app.get('/', (req, res) => {
  res.send('hello world');
})

app.get('/company/list', async(req, res) => {
  const list = await company.getCompany();
  console.log('list of companies', list);
  res.send(list);
})

app.get('/company/names', async(req, res) => {
  const names = await company.getCompanyNames();
  console.log('company names:', names);
  res.send(names);
})

app.get('/:id', (req ,res) => {
  res.status(404).send('Page not found');
})

app.listen(port, () => {
  console.log(`Listening at port: ${port}`);
})
