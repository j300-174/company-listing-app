import { Component, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CompanyData = () => {
    let { company } = useParams();
    const [companyName, setCompanyName] = useState(company);
    const [companyData, setCompany] = useState({});

    const companyHandler = () => {
      console.log('company name into function', companyName);
      const url = `http://localhost:3001/company/${companyName}`;
      axios.get(url).then(res => {
          const company = res.data;
          console.log('company: ', company);
          setCompany(company);
      });
    }

  return (
    <div>
      <h1>Company Data</h1>
      <h1>{company}</h1>
      <button onClick={companyHandler}>Click to setup Companies</button>

      <h1>{companyData.name}</h1>
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
            <td>{companyData.name}</td>
            <td>{companyData.employee_count}</td>
            <td>{companyData.date_founded}</td>
            <td>{companyData.country}</td>
            <td>{companyData.description}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CompanyData;
