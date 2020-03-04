import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllPositions } from '../../store/reducers/positionReducer';
import Spinner from '../Spinner';
import { getAllPositionsSelector, getPositionsLoaderSelector } from '../../store/selectors';
import PositionItem from './PositionItem';

const PositionList = ({ getAllPositions, loading, items }) => {

  useEffect(() => {
    getAllPositions();
  }, [getAllPositions]);

  if (loading) {
    return <Spinner/>;
  }

  if (!items) {
    return null;
  }

  const renderItems = items.map(({ id, title, department, description, status }) => {
    return (
      <PositionItem
        key={id}
        title={title}
        department={department}
        description={description}
        status={status}
      />
    )
  });

  return (
    <div className="list-group">
      {renderItems}
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: getPositionsLoaderSelector(state),
  items: getAllPositionsSelector(state)
});

export default connect(mapStateToProps, { getAllPositions })(PositionList);

