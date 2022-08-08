import React, { createContext, useState, useEffect } from "react";

export const UserProfileContext = createContext()

export const UserProfileProvider = (props) => {
    const [currentUser, setCurrentUser] = useState()
    const [hasUser, setHasUser] = useState();

    const isAuthenticated = () => {

        if (
            localStorage.getItem("ro_token") !== null
        ) {
            setCurrentUser({
                user_id: localStorage.getItem("ro_user"),
                username: localStorage.getItem("ro_username")
            })
            setHasUser(true);
        } else {
            setHasUser(false);
        }
    };



    useEffect(() => {
        isAuthenticated()
    }
        , [])

    return (
        <UserProfileContext.Provider value={{ currentUser, setCurrentUser, hasUser, isAuthenticated }}>

            {props.children}
        </UserProfileContext.Provider>
    )
}