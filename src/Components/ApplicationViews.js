import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import Dashboard from "./Dashboard/Dashboard"
import Registration from './Registration/Registration';
import Login from './Login/Login';

const ApplicationViews = props => {
    const hasUser = props.hasUser
    const setUser = props.setUser

   

    return (
      <>
        
        <Route
          exact
          path="/"
          render={(props) => {
            return <Login setUser={setUser} {...props} />;
          }}
        />
        
        <Route
          path="/Registration"
          render={(props) => {
            return <Registration setUser={setUser} {...props} />;
          }}
        />
          <Route
                exact
                path="/Dashboard"
                render={props => {
                    if(hasUser){
                       return <Dashboard {...props} />;
                    } else {
                       return <Redirect exact to="/" />
                    }
                }}
            />
        </>
    )
            }


export default ApplicationViews