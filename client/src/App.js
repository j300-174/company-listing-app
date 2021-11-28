import { Link } from 'react-router-dom';
import { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    names: []
  }

  componentDidMount() {
    const config = {
      method: 'get',
      url: 'http://localhost:3001/company/list'
    }
    axios.get(config.url)
      .then(res => {
        const companyNames = res.data;
        this.setState({ names: companyNames });
      });
  }

  render() {
    let companyNames = this.state.names;
    console.log(companyNames);
    return (
      <div className="App">
        <Link to='/foo'>Foo</Link>
        <Link to={{
          pathname:'/listings'
        }}>
          Listings
        </Link>
        <header className="">
          <h1>Company Listings Ltd.</h1>
          <div>
            <ul>
            {companyNames.map((company, index) => (
              <li key={index}>
                <Link
                  to={`/listings/${company.name}`}
                  key={company.name}
                >
                  <h2>{company.name}</h2>
                </Link>
                <button type='submit'>Follow</button>
              </li>
            ))}
            </ul>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
