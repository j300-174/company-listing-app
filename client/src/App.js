import { Link } from 'react-router-dom';
import { Component } from 'react';
import axios from 'axios';
import EmployeeCount from './components/employeeCount';
import DealRaised from './components/dealRaised';
import TotalInvestment from './components/totalInvestment';
import CompanyName from './companyName';
import './css/table.css';
import './css/App.css';

class App extends Component {
  state = {
    companyNames: [],
    employeeCount: {},
    avgDealRaised: [],
    totalInvestment: [],
    followerList: []
  }

  // handler methods
  getEmployeeCount = async() => {
    const config = {
      method: 'get',
      url: 'http://localhost:3001/company/average/employee'
    }
    await axios.get(config.url).then(res => {
      let count = res.data.avg;
      count = Math.trunc(count*100)/100;
      this.setState({ employeeCount: count }); // test
    });
  }

  getAvgDealRaised = async() => {
    const config = {
      method: 'get',
      url: 'http://localhost:3001/company/average/deal'
    }
    await axios.get(config.url).then(res => {
      let deal = res.data;
      this.setState({ avgDealRaised: deal });
    });
  }

  getTotalInvestedPerQuarter = async() => {
    const config = {
      method: 'get',
      url: 'http://localhost:3001/company/total/investment'
    }
    await axios.get(config.url).then(res => {
        const total = res.data;
        this.setState({ totalInvestment: total });
    });
  }

  getCompanyNames = async() => {
    const config = {
      method: 'get',
      url: 'http://localhost:3001/company/list'
    }
    axios.get(config.url)
      .then(res => {
        const names = res.data;
        this.setState({ companyNames: names });
      });
  }

  componentDidMount() {
    this.getCompanyNames();
    this.getEmployeeCount();
    this.getAvgDealRaised();
    this.getTotalInvestedPerQuarter();
  }

  handleSubmit = (event, companyObj) => {
    event.preventDefault();
    // adds new companyObj to followList
    let tempState = this.state.followerList;

    // check if already following...
    if (tempState.includes(companyObj)) {
      console.log('Error, company already exists in the list!');
    } else {
      tempState.push(companyObj);
      this.setState({ followerList: tempState });
    }
  }

  handleURL = (companyNames) => {
    companyNames.map(company => {
      if (company.name.includes('/')) {
        company.name = company.name.replace('/', '%2F');
      } else if (company.name.includes(' ')) {
        company.name = company.name.replace(' ', '%20');
      }
    });
  }

  render() {
    let {
      companyNames, employeeCount, avgDealRaised,
      totalInvestment, followerList
    } = this.state;

    this.handleURL(companyNames);

    let newList = [];
    companyNames.map(company => {
      if (company.name.includes('%2F')) {
        newList.push(company.name.replace('%2F', '/'));
      } else if (company.name.includes('%20')) {
        newList.push(company.name.replace('%20', ' '));
      } else newList.push(company.name);
    });

    return (
      <div className="App">
        <header>
          <section className='CompanyLink'>
            <h1>Company Listings Ltd.</h1>
            <Link to={{ pathname:'/listings' }}>Listings</Link>
          </section>
          <section className='FollowList'>
            <h2>Companies followed:</h2>
            <ul>
              {followerList.map((company, index) => (
                <li key={index}>
                  {company.name}
                </li>
              ))}
            </ul>
          </section>
        </header>

        <main>
          <section className='CompanyList'>
            <h2>List of Companies</h2>
            <div className='CompanyGrid'>
              <ul className='Test'>
              {companyNames.map((company, index) => (
                <li key={index}>
                  <Link
                    to={`/listings/${company.name}`}
                    key={company.name}>
                    <h3>{newList[index]}</h3>
                  </Link>
                  <button
                    type='submit'
                    onClick={event => this.handleSubmit(event, company)}>
                    Follow {newList[index]}
                  </button>
                </li>
              ))}
              </ul>
            </div>

            <div className='CompanyGrid'>
              <ul className='Test'>
              {companyNames.map((company, index) => (
                <li key={index}>
                  <Link to={`/${company.name}`} key={company.name}>
                    <h3>{newList[index]}</h3>
                  </Link>
                  <button
                    type='submit'
                    onClick={event => this.handleSubmit(event, company)}>
                    Follow {newList[index]}
                  </button>
                </li>
              ))}
              </ul>
            </div>
          </section>

          <section className='Statistics'>
            <h2>Statistics based on existing Company data</h2>
            <EmployeeCount count={employeeCount} />
            <DealRaised deal={avgDealRaised} />
            <TotalInvestment valuation={totalInvestment} />
          </section>
        </main>
      </div>
    );
  }
}

export default App;
