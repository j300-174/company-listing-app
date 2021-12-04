import { BrowserRouter, Routes, Route } from 'react-router-dom';
// companies
import ConsultioConsultius from './routes/companies/consultioConsultius.js'
import Cybernetix from './routes/companies/cybernetix.js'
import Eratech from './routes/companies/eratech.js'
import Interstellus from './routes/companies/interstellus.js'
import Micronus from './routes/companies/micronus.js'
import NeocellSystems from './routes/companies/neocellSystems.js'
import Networx from './routes/companies/networx.js'
import StellaNovus from './routes/companies/stellaNovus.js'
import SurefireSoftware from './routes/companies/surefireSoftware.js'
import Testerix from './routes/companies/testerix.js'

import Listings from './routes/listings';
import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import './css/index.css';
import CompanyName from './companyName';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/:company' element={<CompanyName />} />
        <Route path='/listings' element={<Listings />} />
        <Route path='/listings/Stella%20Novus' element={<StellaNovus />} />
        <Route path='/listings/Interstellus' element={<Interstellus />} />
        <Route path='/listings/Eratech' element={<Eratech/>} />
        <Route path='/listings/Cybernetix' element={<Cybernetix />} />
        <Route path='/listings/Surefire%20Software' element={<SurefireSoftware />} />
        <Route path='/listings/Testerix' element={<Testerix />} />
        <Route path='/listings/Micronus' element={<Micronus />} />
        <Route path='/listings/Neocell%20Systems' element={<NeocellSystems />} />
        <Route path='/listings/Networx' element={<Networx />} />
        <Route path='/listings/Consultio%2FConsultius' element={<ConsultioConsultius />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
