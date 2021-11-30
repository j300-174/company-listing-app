const { company } = require('./companyDatabase');
const { deal } = require('./dealsDatabase');
const { countries } = require('./countryDatabase');

const startDatabase = async() => {
  await company.setupCompanies();
  await company.insertIntoCompanies();

  await deal.setupDeals();
  await deal.insertIntoDeals();

  await countries.setupCountries();
  await countries.insertIntoCountries();

  return 'database worked! setup and data inserted';
}

module.exports = {
  startDatabase
};
