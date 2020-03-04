import React, { useEffect, useState } from 'react';

const Alert = ({ message }) => {
  const [messageText, setMessageText] = useState('');

  useEffect(_ => {
    setMessageText(message);
  }, [message]);

  useEffect(_ => {
    if (messageText) {
      const timer = setTimeout(_ => {
        setMessageText(null);
      }, 3000);
      return _ => clearTimeout(timer);
    }
  }, [messageText]);

  if (!messageText) {
    return null;
  }

  return (
    <div className="alert alert-info container">
      {message}
    </div>
  );
};

export default React.memo(Alert);
