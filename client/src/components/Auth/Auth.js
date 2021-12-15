import React, { useState } from "react";
import Login from "../Login/Login";
import Register from "../Register/Register";

const Auth = () => {
  const [isLogin, setisLogin] = useState(true);
  return (
    <div>
      <h1>{isLogin ? <Login /> : <Register />}</h1>
    </div>
  );
};

export default Auth;
