import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import {AUTH_ERR} from "../../utils/constants";

const ProtectedRoute = ({ children, ...props }) => {
  const storage = localStorage.getItem('news-app');

  React.useEffect(() => {
    if (!props.loggedIn && !storage) {
      props.onRedirect();
      props.onRedirectMessage(AUTH_ERR);
    }
  }, []);

  const redirect = () => {
    if (!storage) {
      return <Redirect to='/'/>;
    }
    return false;
  };

  return (
    <Route>
      {
        () => props.loggedIn ? children : redirect()
      }
    </Route>
  )
};

export default ProtectedRoute;
