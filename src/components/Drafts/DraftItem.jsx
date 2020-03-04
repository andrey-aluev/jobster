import React, { useState } from 'react';
import cn from 'classnames';

const DraftItem = ({ title, department, description, status, ...props }) => {

  const [collapse, setCollapse] = useState(true);

  const handleClick = () => {
    setCollapse(!collapse);
  };

  return (
    <div className="list-group-item list-group-item-action" onClick={handleClick}>
      <p className={cn('', collapse && 'mb-0')}>{title}</p>

      <div className={cn('collapse', !collapse && 'show')}>
        <p>Department: {department}</p>
        <p>Description: {description}</p>
        <p>Status: {status === 'false' ? 'Closed' : 'Opened'}</p>
      </div>
    </div>
  );
};

export default DraftItem;
