import { Component } from 'react';
import axios from 'axios';
class Cybernetix extends Component {
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
    const name = 'Cybernetix';
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
        <h1>Cybernetix</h1>
        <h2>Company data: </h2>
        <ul>
          <li>Name: { name }</li>
          <li>Employee Count: { employee_count }</li>
          <li>Date Founded: { date_founded }</li>
          <li>Country: { country }</li>
          <li>Description: { description }</li>
        </ul>
      </div>
    );
  }
}

export default Cybernetix;
