import React, { useEffect } from 'react';
import Page from '../Page';
import AddCandidateForm from './AddCandidateForm';
import { connect } from 'react-redux';
import { addCandidate, addCandidateToDraft, getAllCandidates } from '../../../store/reducers/candidateReducer';
import { getAllPositions, updatePositionStatus } from '../../../store/reducers/positionReducer';
import { getAllCandidatesSelector, getCandidatesDraftsSelector, getOpenPositionsSelector } from '../../../store/selectors';

const AddCandidate = (
  {
    getAllCandidates,
    getAllPositions,
    addCandidate,
    addCandidateToDraft,
    updatePositionStatus,
    items, positions, drafts,
    history
  }) => {

  useEffect(() => {
    getAllCandidates();
    getAllPositions();
  }, [getAllCandidates, getAllPositions]);

  const onSubmit = (data, draft) => {
    const id = Date.now();

    if (!draft) {
      localStorage.setItem('candidates', JSON.stringify([{ id, ...data }, ...items]));

      if (data.positionId) {
        updatePositionStatus(data.positionId);
      }

      addCandidate({ id, ...data }, history);
    } else {
      addCandidateToDraft({ id, ...data }, drafts.length + 1);
    }
  };

  return (
    <Page title="Add candidate">
      <div className="row">
        <div className="col-6">
          <AddCandidateForm
            onSubmit={onSubmit}
            positions={positions}
            drafts={drafts}
          />
        </div>
      </div>
    </Page>
  );
};

const mapStateToProps = (state) => ({
  items: getAllCandidatesSelector(state),
  positions: getOpenPositionsSelector(state),
  drafts: getCandidatesDraftsSelector(state)
});

const mapDispatchToProps = {
  getAllCandidates,
  getAllPositions,
  addCandidate,
  addCandidateToDraft,
  updatePositionStatus
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCandidate);
