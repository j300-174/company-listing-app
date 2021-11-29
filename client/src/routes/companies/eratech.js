import { Component } from 'react';
import axios from 'axios';
class Eratech extends Component {
  state = {
    company: {
      name: '',
      employee_count: 0,
      date_founded: '',
      country: '',
      description: '',
    }
  }

  getCompany = async() => {
    const name = 'Eratech';
    const config = {
      method: 'get',
      url: `http://localhost:3001/company/${name}`
    }
    axios.get(config.url).then(res => {
        const company = res.data;
        console.log('company: ', company);
        this.setState({ company: company });
    });
  }

  componentDidMount() {
    this.getCompany();
  }

  render() {
    const {
      name,
      employee_count,
      date_founded,
      country,
      description
    } = this.state.company;

    return (
      <div>
        <h1>Eratech</h1>
        <h2>Company Data</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Employee Count</th>
              <th>Date Founded</th>
              <th>Country</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{ name }</td>
              <td>{ employee_count }</td>
              <td>{ date_founded }</td>
              <td>{ country }</td>
              <td>{ description }</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Eratech;
