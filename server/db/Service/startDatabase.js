const { company } = require('./companyDatabase');

const startDatabase = async() => {
  company.setupCompanies();
  company.insertIntoCompanies();
  return 'database worked! setup and data inserted';
}

module.exports = {
  startDatabase
};
