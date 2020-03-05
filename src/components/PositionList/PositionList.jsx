import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllPositions, setCandidateToPosition } from '../../store/reducers/positionReducer';
import Spinner from '../Spinner';
import { getAllCandidatesSelector, getAllPositionsSelector, getPositionsLoaderSelector } from '../../store/selectors';
import PositionItem from './PositionItem';

const PositionList = ({ getAllPositions, loading, items, candidates: allCandidates, setCandidateToPosition }) => {

  useEffect(() => {
    getAllPositions();
  }, [getAllPositions]);

  if (loading) {
    return <Spinner/>;
  }

  if (!items) {
    return null;
  }

  const onUpdatePosition = (c, id) => {
    setCandidateToPosition(c, id);
  };

  const renderItems = items.map(({ id, title, department, description, status, date, candidates }) => {
    return (
      <PositionItem
        key={id}
        id={id}
        title={title}
        department={department}
        description={description}
        status={status}
        date={date}
        candidates={candidates}
        candidateList={allCandidates}
        onSave={onUpdatePosition}
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
  loading: getPositionsLoaderSelector(state),
  items: getAllPositionsSelector(state),
  candidates: getAllCandidatesSelector(state)
});

export default connect(mapStateToProps, { getAllPositions, setCandidateToPosition })(PositionList);

