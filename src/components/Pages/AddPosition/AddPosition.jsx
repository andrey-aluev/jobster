import React, { useEffect } from 'react';
import Page from '../Page';
import AddPositionForm from './AddPositionForm';
import { addPosition, addPositionToDraft, getAllPositions, saveDraftPositions } from '../../../store/reducers/positionReducer';
import { connect } from 'react-redux';
import Drafts from '../../Drafts';
import { getAllPositionsSelector, getPositionsDraftsSelector, getPositionsLoaderSelector } from '../../../store/selectors';

const AddPosition = (
  {
    getAllPositions, addPosition, addPositionToDraft, saveDraftPositions,
    items, drafts,
    history
  }) => {

  useEffect(() => {
    getAllPositions();
  }, [getAllPositions]);

  const onSubmit = (data, draft) => {
    const id = Date.now();

    if (!draft) {
      addPosition({ id, ...data }, history);
      localStorage.setItem('positions', JSON.stringify([{ id, ...data }, ...items]));
    } else {
      addPositionToDraft({ id, ...data });
    }
  };

  const onSaveDrafts = () => {
    saveDraftPositions(drafts, history);
    localStorage.setItem('positions', JSON.stringify([...drafts, ...items]));
  };

  return (
    <Page title="Add position">



      <div className="row">
        <div className="col-6">
          <AddPositionForm
            onSubmit={onSubmit}
            addPositionToDraft={addPositionToDraft}
          />
        </div>

        <Drafts items={drafts} onSubmit={onSaveDrafts}/>
      </div>

    </Page>
  );
};

const mapStateToProps = (state) => ({
  loading: getPositionsLoaderSelector(state),
  items: getAllPositionsSelector(state),
  drafts: getPositionsDraftsSelector(state)
});

const mapDispatchToProps = {
  getAllPositions,
  addPosition,
  addPositionToDraft,
  saveDraftPositions,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddPosition);
