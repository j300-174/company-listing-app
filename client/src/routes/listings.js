import { Link } from 'react-router-dom';
import { Component } from 'react';
import axios from 'axios';

class Listings extends Component {

  state = {
    companyNames: []
  }

  getCompanies = async() => {
    const config = {
      method: 'get',
      url: 'http://localhost:3001/company/list'
    }
    axios.get(config.url).then(res => {
        const companyArr = res.data;
        console.log('list of companies: ', companyArr);
        // companyArr.map(company => {
        //   for (let i = 0; i < company.name.length; i++) {
        //     if (company.name[i] === '/') company.name.replace('/', '2%F');
        //   }
        // });
        console.log(companyArr);
        this.setState({ companyNames: companyArr });
    });
  }

  replaceSlashes = (companyNames) => {
    companyNames.map(company => {
      if (company.name.includes('/')) {
        let x = company.name;
        x = x.replace('/', '%2F');
        company.name = x;
        console.log(company.name);
      }
    });
    return companyNames;
  }

  componentDidMount() {
    this.getCompanies();
  }

  render() {
    const companyNames = this.state.companyNames;
    let companyWithSlash = this.replaceSlashes(companyNames);

    // create list of company names here to display...
    let companyList = [];
    companyNames.map(company => {
      companyList.push(company.name);
    });

    // displays original company names, newList displays url names
    let newList = [];
    companyList.map(name => {
      if (name.includes('%2F')) newList.push(name.replace('%2F', '/'));
      else newList.push(name);
    });

    return (
      <div>
        <h2>Company Listings</h2>
        {companyNames.map((company, index) => (
          <Link
            to={`/listings/${company.name}`}
            key={company.name}
          >
            {newList[index]}<br />
          </Link>
        ))}
      </div>
    );
  }
}

export default Listings;
