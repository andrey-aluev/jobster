import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import { positionAPI } from '../../api/api';

const CandidateItem = ({ name, description, positionId }) => {
  const [collapse, setCollapse] = useState(true);
  const [position, setPosition] = useState(null);

  useEffect(_ => {
    if (positionId) {
      const res = positionAPI.getPositionById(positionId)[0];
      setPosition(res);
    }
  }, [setPosition, positionId]);

  const handleClick = () => {
    setCollapse(!collapse);
  };

  const Position = () => {
    if (!position) {
      return null;
    }

    return  <p>Position: {position.title}</p>;
  };

  return (
    <div className="list-group-item list-group-item-action" onClick={handleClick}>
      <p className={cn('', collapse && 'mb-0')}>{name}</p>

      <div className={cn('collapse', !collapse && 'show')}>
        <p>Description: {description}</p>
        <Position/>
      </div>
    </div>
  );
};

export default CandidateItem;
