import React from 'react';
import { Link } from 'react-router-dom';
import { getAllCandidatesSelector, getOpenPositionsSelector } from '../../store/selectors';
import { connect } from 'react-redux';
import { addMessage } from '../../store/reducers/appReducer';

const AppHeader = ({ addMessage }) => {
  const handleReset = () => {
    localStorage.clear();
    addMessage('Please reload page');
  };

  return (
    <div className="app-header mb-2">
      <div className="navbar navbar-dark bg-primary">
        <div className="container">
          <Link to="/" className="navbar-brand">Jobster.com</Link>

          <ul className="navbar-nav">
            <li className="nav-item">
              <button className="btn btn-danger" onClick={handleReset}>Reset data</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  items: getAllCandidatesSelector(state),
  positions: getOpenPositionsSelector(state),
});


export default connect(mapStateToProps, { addMessage })(AppHeader);
