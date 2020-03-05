import React from 'react';
import { Link } from 'react-router-dom';

const SaveButtonsConfirm = ({ onSubmit, onCancel, type }) => {
  return (
    <>
      <button className="btn btn-lg btn-primary" onClick={onSubmit}>Save</button>
      <Link to={type === 'positions' ? '/add-position' : '/add-candidate'} className="btn btn-lg btn-outline-primary ml-2">Back to
        adding</Link>
      <button className="btn btn-lg btn-outline-danger ml-2" onClick={onCancel}>Cancel</button>
    </>
  );
};

export default SaveButtonsConfirm;
