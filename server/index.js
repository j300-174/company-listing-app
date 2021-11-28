const { company } = require('./companies/companyDatabase');
const { tasks } = require('./tasks/tasksDatabase');
const { deal } = require('./deals/dealsDatabase');
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

// specific urls used for CORS
app.use('/', cors());
app.use('/company/list', cors());
app.use('/company/names', cors());
app.use('/company/average/employee', cors());
app.use('/company/average/deal', cors());
app.use('/company/total/investment', cors());

app.get('/', (req, res) => {
  res.send('hello world');
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
