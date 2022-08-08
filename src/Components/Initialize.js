import React, { useContext } from "react";
import { Routes, Navigate, Route } from "react-router-dom"
import { UserProfileContext } from "../Providers/UserProvider";
import ApplicationViews from './ApplicationViews';
import Login from "./Login/Login";
import Register from "./Registration/Registration";




const Initialize = () => {

  const { hasUser } = useContext(UserProfileContext)

  return (
    <>
      <Routes>

        {hasUser === true || hasUser === undefined ? <Route path="*" element={<ApplicationViews hasUser={hasUser} />} /> : <Route path="*" element={<Navigate to={"/login"} replace />} />}
        <Route path="login" element={<Login />}></Route>
        <Route path="register" element={<Register />}></Route>

      </Routes>

    </>
  )
}

export default Initialize