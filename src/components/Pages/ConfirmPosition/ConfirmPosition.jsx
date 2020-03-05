import React from 'react';
import Page from '../Page';
import Drafts from '../../Drafts';
import { getAllPositionsSelector, getPositionsDraftsSelector } from '../../../store/selectors';
import { cancelDraftsPositions, getAllPositions, saveDraftPositions } from '../../../store/reducers/positionReducer';
import { connect } from 'react-redux';
import { addMessage } from '../../../store/reducers/appReducer';

const ConfirmPosition = ({ items, drafts, saveDraftPositions, cancelDraftsPositions, addMessage, history }) => {

  const onSaveDrafts = () => {
    saveDraftPositions(drafts, history);
    localStorage.setItem('positions', JSON.stringify([...drafts, ...items]));
  };

  const onCancelDrafts = (e) => {
    e.preventDefault();
    history.push('/');
    addMessage('All drafts deleted');
    cancelDraftsPositions();
  };

  return (
    <Page title="Confirm positions">
      <Drafts
        items={drafts}
        onSubmit={onSaveDrafts}
        onCancel={onCancelDrafts}
        type="positions"
      />
    </Page>
  );
};

const mapStateToProps = (state) => ({
  items: getAllPositionsSelector(state),
  drafts: getPositionsDraftsSelector(state)
});

const mapDispatchToProps = {
  getAllPositions,
  saveDraftPositions,
  cancelDraftsPositions,
  addMessage
};

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmPosition);
