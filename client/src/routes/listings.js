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
        const company = res.data;
        console.log('list of companies: ', company);
        this.setState({ companyNames: company });
    });
  }

  componentDidMount() {
    this.getCompanies();
  }

  render() {
    let companyNames = this.state.companyNames;
    return (
      <div>
        <h2>Company Listings</h2>
        {companyNames.map(company => (
          <Link
            to={`/listings/${company.name}`}
            key={company.name}
          >
            {company.name}<br />
          </Link>
        ))}
      </div>
    );
  }
}

export default Listings;
