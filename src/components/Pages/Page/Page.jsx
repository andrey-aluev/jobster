import React from 'react';

const Page = ({ title, children }) => {

  const PageTitle = () => {
    if (!title) {
      return null;
    }
    return (
      <div className="page__header mb-1">
        <h1>{title}</h1>
      </div>
    );
  };

  return (
    <div className="page container">
      <PageTitle/>
      <div className="page__body">{children}</div>
    </div>
  );
};

export default Page;
