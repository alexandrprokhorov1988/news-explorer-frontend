import React from 'react';
import './ErrorMessagePopup.css';

function ErrorMessagePopup({ errMessage, onSetErrorMessage }) {

  React.useEffect(() => {
    setTimeout(onSetErrorMessage, 5000);
  }, []);

  return (
    <div className={`msg-popup ${errMessage ? 'msg-popup_opened' : ''}`}>
      <p className="msg-popup__text">{errMessage}</p>
    </div>
  );
}

export default ErrorMessagePopup;
