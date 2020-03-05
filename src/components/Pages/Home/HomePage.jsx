import React from 'react';
import Page from '../Page';
import { Link } from 'react-router-dom';
import PositionList from '../../PositionList/PositionList';
import CandidateList from '../../CandidateList/CandidateList';
import './HomePage.css';

const HomePage = () => {
  return (
    <Page title="Welcome to Jobster">

      <div className="tiles row mb-4">
        <div className="tiles__item">
          <Link to="/add-position" className="tiles__link">Create one or more new Positions</Link>
        </div>

        <div className="tiles__item">
          <Link to="/add-candidate" className="tiles__link">Create Candidate</Link>
        </div>
      </div>

      <div className="row">
        <div className="col-6">
          <h3>Positions</h3>
          <PositionList/>
        </div>

        <div className="col-6">
          <h3>Candidates</h3>
          <CandidateList/>
        </div>
      </div>
    </Page>
  );
};

export default HomePage;
