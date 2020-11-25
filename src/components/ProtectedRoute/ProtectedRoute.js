import React from 'react';
import {Redirect, Route} from 'react-router-dom';

const ProtectedRoute = ({ children, ...props }) => {

  React.useEffect(() => {
    if (!props.loggedIn) {
      props.onRedirect();
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
