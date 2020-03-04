import React from 'react';
import Page from '../Page';
import { Link } from 'react-router-dom';
import PositionList from '../../PositionList/PositionList';
import CandidateList from '../../CandidateList/CandidateList';

const HomePage = () => {
  return (
    <Page title="Welcome to Jobster">
      <div className="btn-group btn-group-lg mb-4">
        <Link to="/add-position" className="btn btn-primary">Create one or more new Positions</Link>
        <Link to="/add-candidate" className="btn btn-primary">Create Candidate</Link>
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
