import React, { useEffect } from 'react';
import Page from '../Page';
import AddCandidateForm from './AddCandidateForm';
import { connect } from 'react-redux';
import { addCandidate, getAllCandidates } from '../../../store/reducers/candidateReducer';
import { getAllPositions, updatePositionStatus } from '../../../store/reducers/positionReducer';
import { getAllCandidatesSelector, getOpenPositionsSelector } from '../../../store/selectors';

const AddCandidate = (
  {
    getAllCandidates,
    getAllPositions,
    addCandidate,
    updatePositionStatus,
    items, positions,
    history
  }) => {

  useEffect(() => {
    getAllCandidates();
    getAllPositions();
  }, [getAllCandidates, getAllPositions]);

  const onSubmit = (data) => {
    const id = Date.now();
    addCandidate({ id, ...data }, history);

    if (data.positionId) {
      updatePositionStatus(data.positionId);
    }

    localStorage.setItem('candidates', JSON.stringify([{ id, ...data }, ...items]));
  };

  return (
    <Page title="Add candidate">
      <div className="row">
        <div className="col-6">
          <AddCandidateForm
            onSubmit={onSubmit}
            positions={positions}
          />
        </div>
      </div>
    </Page>
  );
};

const mapStateToProps = (state) => ({
  items: getAllCandidatesSelector(state),
  positions: getOpenPositionsSelector(state),
});

const mapDispatchToProps = {
  getAllCandidates,
  getAllPositions,
  addCandidate,
  updatePositionStatus
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCandidate);
