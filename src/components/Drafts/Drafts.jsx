import React from 'react';
import DraftItem from './DraftItem';
import { Link } from 'react-router-dom';

const Drafts = ({ items, onSubmit, onCancel, type = 'positions' }) => {

  if (!items.length) {
    return null;
  }

  let renderItems = [];

  if (type === 'positions') {
    renderItems = items.map(({ id, title, department, description, status }) => {
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
  } else {
    renderItems = items.map(({ id, name, description }) => {
      return (
        <DraftItem
          key={id}
          title={name}
          description={description}
        />
      );
    });
  }

  return (
    <>
      <section className="list-group mb-4">
        {renderItems}
      </section>

      <button className="btn btn-lg btn-primary" onClick={onSubmit}>Save all</button>
      <Link to={type === 'positions' ? '/add-position': '/add-candidate'} className="btn btn-lg btn-outline-primary ml-2">Back to adding</Link>
      <button className="btn btn-lg btn-outline-danger ml-2" onClick={onCancel}>Cancel</button>
    </>
  );
};

export default Drafts;
