const { startDatabase } = require('./db/Service/startDatabase');
const { company } = require('./db/Service/companyDatabase');
const { tasks } = require('./db/Service/tasksDatabase');
const { deal } = require('./db/Service/dealsDatabase');
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;
require('dotenv').config();

// specific urls used for CORS
app.use('/', cors());
app.use('/company/list', cors());
app.use('/company/names', cors());
app.use('/company/average/employee', cors());
app.use('/company/average/deal', cors());
app.use('/company/total/investment', cors());

// database setup here
app.get('/', (req, res) => {
  const result = startDatabase();
  console.log(result);
  res.send('database data setup');
});

app.get('/company/list', async(req, res) => {
  const list = await company.getCompany();
  console.log('list of companies', list);
  res.send(list);
});

app.get('/company/names', async(req, res) => {
  const names = await company.getCompanyNames();
  console.log('company names:', names);
  res.send(names);
});

app.get('/company/:nameID', async(req, res) => {
  console.log('company input is:', req.params.nameID);
  const oneCompany = await company.getCompanyByID(req.params.nameID);
  console.log('company is:', oneCompany);
  res.send(oneCompany);
})

// task1
app.get('/company/average/employee', async(req, res) => {
  const avgEmployeeCount = await tasks.getAvgEmployeeCount();
  console.log(avgEmployeeCount);
  res.send(avgEmployeeCount);
});

// task2
app.get('/company/average/deal', async(req, res) => {
  const avgDealRaised = await tasks.getAvgDealRaised();
  console.log(avgDealRaised);
  res.send(avgDealRaised);
});

// task3
app.get('/company/total/investment', async(req, res) => {
  const totalInvestment = await tasks.getTotalInvestedPerQuarter();
  console.log(totalInvestment);
  res.send(totalInvestment);
});

app.get('/:id', (req ,res) => {
  res.status(404).send('Page not found');
});

app.listen(port, () => {
  console.log(`Listening at port: ${port}`);
});
