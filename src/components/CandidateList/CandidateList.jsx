import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Spinner from '../Spinner';
import { getAllCandidates } from '../../store/reducers/candidateReducer';
import { getAllCandidatesSelector, getCandidatesLoaderSelector } from '../../store/selectors';
import CandidateItem from './CandidateItem';

const CandidateList = ({ getAllCandidates, loading, items }) => {

  useEffect(() => {
    getAllCandidates();
  }, [getAllCandidates]);

  if (loading) {
    return <Spinner/>;
  }

  if (!items) {
    return null;
  }

  const renderItems = items.map(({ id, name, description }) => {
    return (
      <CandidateItem
        name={name}
        description={description}
        key={id}
      />
    );
  });

  return (
    <div className="list-group">
      {renderItems}
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: getCandidatesLoaderSelector(state),
  items: getAllCandidatesSelector(state)
});

export default connect(mapStateToProps, { getAllCandidates })(CandidateList);

