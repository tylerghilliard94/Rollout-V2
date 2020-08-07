import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import Dashboard from "./Dashboard/Dashboard"
import InitialCharacterPrompt from "./InititalCharacterPrompt/InitialCharacterPrompt"
import Class from "./CharacterCreation/Class/Class"
import Registration from './Registration/Registration';
import Login from './Login/Login';
import CharacterType from "./CharacterCreation/CharacterType/CharacterType"
import Race from "./CharacterCreation/Race/Race"
import BaseInfo from "./CharacterCreation/BaseInfo/BaseInfo"
import Stats from "./CharacterCreation/Stats/Stats"
import HitPoints from "./CharacterCreation/HitPoints/HitPoints"
import FinalDetails from "./CharacterCreation/FinalDetails/FinalDetails"

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
            <Route
                exact
                path="/CharacterPrompt"
                render={props => {
                    if(hasUser){
                       return <InitialCharacterPrompt {...props} />;
                    } else {
                       return <Redirect exact to="/" />
                    }
                }}
            />
            <Route
                exact
                path="/Class"
                render={props => {
                    if(hasUser){
                       return <Class {...props} />;
                    } else {
                       return <Redirect exact to="/" />
                    }
                }}
            />
            <Route
                exact
                path="/CharacterType"
                render={props => {
                    if(hasUser){
                       return <CharacterType {...props} />;
                    } else {
                       return <Redirect exact to="/" />
                    }
                }}
            />
            <Route
                exact
                path="/Race"
                render={props => {
                    if(hasUser){
                       return <Race {...props} />;
                    } else {
                       return <Redirect exact to="/" />
                    }
                }}
            />
            <Route
                exact
                path="/BaseInfo"
                render={props => {
                    if(hasUser){
                       return <BaseInfo {...props} />;
                    } else {
                       return <Redirect exact to="/" />
                    }
                }}
            />
            <Route
                exact
                path="/Stats"
                render={props => {
                    if(hasUser){
                       return <Stats {...props} />;
                    } else {
                       return <Redirect exact to="/" />
                    }
                }}
            />
            <Route
                exact
                path="/HitPoints"
                render={props => {
                    if(hasUser){
                       return <HitPoints {...props} />;
                    } else {
                       return <Redirect exact to="/" />
                    }
                }}
            />
            <Route
                exact
                path="/FinalDetails"
                render={props => {
                    if(hasUser){
                       return <FinalDetails {...props} />;
                    } else {
                       return <Redirect exact to="/" />
                    }
                }}
            />
        </>
    )
            }


export default ApplicationViews