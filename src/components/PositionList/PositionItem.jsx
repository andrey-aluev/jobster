import React, { useState } from 'react';
import cn from 'classnames';

const PositionItem = ({ id, title, department, description, status, date, candidates: candidatesPosition, candidateList, onSave }) => {

  const [collapse, setCollapse] = useState(true);
  const [candidates, setShowCandidates] = useState(false);
  const [candidateValue, setCandidateValue] = useState('');

  const handleClick = () => {
    setCollapse(!collapse);
  };

  const handleApply = () => {
    setShowCandidates(!candidates);
  };

  const handleSave = () => {
    if (candidateValue) {
      onSave(candidateValue, id);
      setShowCandidates(!candidates);
    }
  };

  const onSelectChange = ({ target: { value } }) => {
    setCandidateValue(value);
  };

  const ApplyPosition = () => {
    const CandidateChoice = () => {
      if (!candidates) {
        return null;
      }

      return (

        <select className="form-control mb-1" onChange={onSelectChange} value={candidateValue}>
          {candidateList.map(item => <option key={item.id} value={item.name}>{item.name}</option>)}
        </select>
      );
    };

    return (
      <div>
        <CandidateChoice/>
        <button className="btn btn-sm btn-info" onClick={!candidates ? handleApply : handleSave}>Apply</button>
      </div>
    );
  };

  const CandidatesToPosition = () => {
    if (!candidatesPosition) {
      return null;
    }

    return <p>Candidates: {candidatesPosition.join(', ')}</p>;
  };

  return (
    <div className="list-group-item list-group-item-action">
      <p className={cn('pointer', collapse && 'mb-0')} onClick={handleClick}>{title}</p>

      <div className={cn('collapse', !collapse && 'show')}>
        <p>Department: {department}</p>
        <p>Description: {description}</p>
        <p>Status: {status === false ? 'Closed' : 'Opened'} {status}</p>
        <p>Created: {date}</p>
        <CandidatesToPosition/>

        <div className="mt-2">
          <ApplyPosition/>
        </div>
      </div>
    </div>
  );
};

export default PositionItem;
