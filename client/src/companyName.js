import { Component, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const handleURL = (company) => {
  let newCompany = '';
  for (let i = 0; i < company.length; i++) {
    if (company[i] === ' ') {
      newCompany += ('%20');
      continue;
    } else if (company[i] === '/') {
      newCompany += ('%2F');
      continue;
    }
    newCompany += (company[i]);
  }
  return newCompany;
}



const CompanyData = () => {
  let { company } = useParams();
  let newCompany = handleURL(company);
  const [companyName, setCompanyName] = useState(newCompany);
  const [companyData, setCompany] = useState({});

  const companyHandler = () => {
    const url = `http://localhost:3001/company/${newCompany}`;
    axios.get(url).then(res => {
      const company = res.data;
      setCompany(company);
    });
  }

  return (
    <div>
      <h1>{company}</h1>
      <button onClick={companyHandler}>Data</button>
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
