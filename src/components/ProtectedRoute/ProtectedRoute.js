import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import {AUTH_ERR} from "../../utils/constants";

const ProtectedRoute = ({ children, ...props }) => {

  React.useEffect(() => {
    if (!props.loggedIn) {
      props.onRedirect();
      props.onRedirectMessage(AUTH_ERR);
    }
  }, []);

  return (
    <Route>
      {
        () => props.loggedIn ? children : <Redirect to='/'/>
      }
    </Route>
  )
};

export default ProtectedRoute;
