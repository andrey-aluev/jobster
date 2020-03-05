import React from 'react';
import Page from '../Page';
import Drafts from '../../Drafts';
import { getAllCandidatesSelector, getCandidatesDraftsSelector } from '../../../store/selectors';
import { connect } from 'react-redux';
import { addMessage } from '../../../store/reducers/appReducer';
import { cancelDraftsCandidates, getAllCandidates, saveDraftCandidates } from '../../../store/reducers/candidateReducer';

const ConfirmCandidate = ({ items, drafts, saveDraftCandidates, cancelDraftsCandidates, addMessage, history }) => {

  const onSaveDrafts = () => {
    saveDraftCandidates(drafts, history);
    localStorage.setItem('candidates', JSON.stringify([...drafts, ...items]));
  };

  const onCancelDrafts = (e) => {
    e.preventDefault();
    history.push('/');
    addMessage('All drafts deleted');
    cancelDraftsCandidates();
  };

  return (
    <Page title="Confirm candidates">
      <Drafts items={drafts} onSubmit={onSaveDrafts} onCancel={onCancelDrafts} type="candidates"/>
    </Page>
  );
};

const mapStateToProps = (state) => ({
  items: getAllCandidatesSelector(state),
  drafts: getCandidatesDraftsSelector(state)
});

const mapDispatchToProps = {
  getAllCandidates,
  saveDraftCandidates,
  cancelDraftsCandidates,
  addMessage
};

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmCandidate);
