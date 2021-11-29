import { Component } from 'react';
import axios from 'axios';
class ConstultioConsultius extends Component {
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
    const name = 'Consultio%2FConsultius';
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

/*
<table>
  <thead>
    <tr>
      <th>Average</th>
      <th>Country</th>
    </tr>
  </thead>
  <tbody>
    {dealRaised.map((company, index) => (
      <tr key={index}>
        <td>{company.avg}</td>
        <td>{company.country}</td>
      </tr>
    ))}
  </tbody>
</table>
*/

// turn into array...
// {this.state.company.map((company, index) => (
//   <tr key={ index }>
//     <td>{ company.name }</td>
//     <td>{ company.employee_count}</td>
//     <td>{ company.date_founded}</td>
//     <td>{ company.country}</td>
//     <td>{ company.description}</td>
//   </tr>
// ))}
//

// <table>
//     <thead>
//       <tr key={250}>
//         <th>Sum</th>
//         <th>Quarter</th>
//         <th>Year</th>
//       </tr>
//     </thead>
//     <tbody>
//   {totalInvestment.map((company, index) => (
//       <tr key={index}>
//         <td>{company.sum}</td>
//         <td>{company.quarter}</td>
//         <td>{company.year}</td>
//       </tr>
//   ))}
//   </tbody>
// </table>


    return (
      <div className='CompanyTables'>
        <h1>Constultio Consultius</h1>
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

export default ConstultioConsultius;
