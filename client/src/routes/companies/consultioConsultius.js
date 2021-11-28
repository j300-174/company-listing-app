import { Component } from 'react';

class ConstultioConsultius extends Component {
  state = {
    company: []
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

  //call
  getData = () => {

  }
  render() {
    return (
      <h1>Constultio Consultius</h1>
    );
  }
}

export default ConstultioConsultius;
