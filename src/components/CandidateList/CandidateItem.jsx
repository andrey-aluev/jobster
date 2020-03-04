import React, { useState } from 'react';
import cn from 'classnames';

const CandidateItem = ({ name, description }) => {
  const [collapse, setCollapse] = useState(true);

  const handleClick = () => {
    setCollapse(!collapse);
  };

  return (
    <div className="list-group-item list-group-item-action" onClick={handleClick}>
      <p className={cn('', collapse && 'mb-0')}>{name}</p>

      <div className={cn('collapse', !collapse && 'show')}>
        <p>Description: {description}</p>
      </div>
    </div>
  );
};

export default CandidateItem;
