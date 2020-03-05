import React from 'react';
import DraftItem from './DraftItem';
import SaveButtonsConfirm from '../SaveButtonsConfirm';

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

      <SaveButtonsConfirm
        onSubmit={onSubmit} onCancel={onCancel}
        type={type}
      />
    </>
  );
};

export default Drafts;
