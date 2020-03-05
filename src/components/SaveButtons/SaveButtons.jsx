import React from 'react';
import { Link } from 'react-router-dom';

const SaveButtons = ({ drafts, setDraft, type = 'position' }) => {
  const saveButton = drafts.length
    ? <Link to={type === 'position' ? '/confirm-position' : '/confirm-candidate'}
            className="btn btn-lg btn-primary">Save</Link>
    : <button className="btn btn-lg btn-primary" onClick={() => setDraft(false)}>Save</button>;

  return (
    <>
      {saveButton}
      <button className="btn btn-lg btn-outline-primary ml-2" onClick={() => setDraft(true)}>Save and Add Another</button>
    </>
  );
};


export default SaveButtons;
