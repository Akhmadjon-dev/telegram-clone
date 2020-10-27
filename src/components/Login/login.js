import React from "react";
import {Button} from '@material-ui/core';
import {auth, provider} from '../../firebase/Firebase';
import './login.css';
const login = () => {
    const  signIn = () =>{
        auth.signInWithPopup(provider).catch(error=>alert(error.message))
    }
  return <div className="login">
      <div className="login__telegram">
          <img src={`https://cdn.pixabay.com/photo/2020/10/17/13/21/telegram-5662082__340.png`} alt="telegram photo"/>
          {/* <img src={`${process.env.PUBLIC_URL}telegramlogo.png`} alt="telegram photo"/> */}
          <h1>Telegram</h1>
      </div>
      <Button onClick={signIn}>Sign In</Button>
  </div>;
};

export default login;
