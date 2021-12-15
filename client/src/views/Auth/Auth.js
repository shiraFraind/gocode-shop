import { Button, Fab } from "@mui/material";
import React, { useState } from "react";
import Login from "../../components/Login/Login";
import Register from "../../components/Register/Register";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div>
      <br />
      <br />
      <br />
      <h1>{isLogin ? <Login /> : <Register />}</h1>
      <br />
      <br />
      <br />
      <Fab
        onClick={() => {
          setIsLogin(!isLogin);
        }}
        variant="extended"
        size="medium"
        color="primary"
        aria-label="add"
      >
        {isLogin ? "move to Register" : "move to login"}
      </Fab>
    </div>
  );
};

export default Auth;
