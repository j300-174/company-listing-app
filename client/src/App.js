import { Routes, Route, Link } from 'react-router-dom';
import { Component } from 'react';
import FollowerList from './routes/followerList';
import axios from 'axios';
import './App.css';
import EmployeeCount from './components/employeeCount'

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
      console.log('employee count: ', count);
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
      console.log('deal: ', deal);
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
        console.log('total investment per quarter: ', total);
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

  render() {
    let {
      companyNames,
      employeeCount,
      avgDealRaised,
      totalInvestment,
      followerList
    } = this.state;

    return (
      <div className="App">
        <header>
          <h1>Company Listings Ltd.</h1>
          <Link to={{
            pathname:'/listings'
          }}>Listings
          </Link>

          <h2>Companies followed:</h2>
          <div>
            <ul>
              {followerList.map(company => (
                <li>{company.name}</li>
              ))}
            </ul>
          </div>
        </header>
        <main>
          <div className="">
            <ul>
            {companyNames.map((company, index) => (
              <li key={index}>
                <Link
                  to={`/listings/${company.name}`}
                  key={company.name}
                >
                  <h2>{company.name}</h2>
                </Link>
                <button
                  type='submit'
                  onClick={event => this.handleSubmit(event, company)}
                >Follow {company.name}</button>
              </li>
            ))}
            </ul>
          </div>
          <div className="">
            <div>
              <EmployeeCount count={employeeCount} />
            </div>
            <div>
              <h3>Average Deal raised (valuation) for existing companies:</h3>
              <ul>{avgDealRaised.map((company, index) => (
                <div>
                  <li key={index}>
                    <p>{company.avg}</p>
                    <p>{company.country}</p>
                  </li>
                </div>
              ))}
              </ul>
            </div>
            <div>
            <h3>Total investment (valuation) per quarter per year for existing
            companies</h3>
            <ul>{totalInvestment.map((company, index) => (
              <div>
                <li key={index}>
                  <p>Sum: {company.sum}</p>
                  <p>Quarter: {company.quarter}</p>
                  <p>Year: {company.year}</p>
                </li>
              </div>
            ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
    );
  }
}

export default App;
