import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { clearMessage } from '../../store/reducers/appReducer';

const Alert = ({ message, clearMessage }) => {
  const [messageText, setMessageText] = useState(message);

  useEffect(_ => {
    setMessageText(message);
  }, [message]);

  useEffect(_ => {
    if (messageText) {
      const timer = setTimeout(_ => {
        setMessageText(null);
        clearMessage();
      }, 3000);
      return _ => clearTimeout(timer);
    }
  }, [messageText, clearMessage]);

  if (!messageText) {
    return null;
  }

  return (
    <div className="alert alert-info container">
      {message}
    </div>
  );
};

const mapStateToProps = (state) => ({
  message: state.app.message
});

export default connect(mapStateToProps, { clearMessage })(Alert);
