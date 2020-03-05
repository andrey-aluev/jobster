import React from 'react';
import DraftItem from './DraftItem';
import { Link } from 'react-router-dom';

const Drafts = ({ items, onSubmit, onCancel }) => {

  if (!items.length) {
    return null;
  }

  const renderItems = items.map(({ id, title, department, description, status }) => {
    return (
      <DraftItem
        title={title}
        department={department}
        description={description}
        status={status}
        key={id}
      />
    );
  });

  return (
    <>
      <section className="list-group mb-4">
        {renderItems}
      </section>

      <button className="btn btn-lg btn-primary" onClick={onSubmit}>Save all</button>
      <Link to="/add-position" className="btn btn-lg btn-outline-primary ml-2">Back to adding</Link>
      <button className="btn btn-lg btn-outline-danger ml-2" onClick={onCancel}>Cancel</button>
    </>
  );
};

export default Drafts;
