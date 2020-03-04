import React from 'react';
import DraftItem from './DraftItem';

const Drafts = ({ items, onSubmit }) => {

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
    <div className="col-6">
      <section className="list-group mb-2">
        {renderItems}
      </section>

      <button className="btn btn-outline-primary" onClick={onSubmit}>Apply</button>
    </div>
  );
};

export default Drafts;
