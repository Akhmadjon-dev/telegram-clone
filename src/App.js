import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Telegram from "./components/Telegram/Telegram";
import { auth } from "./firebase/Firebase";
import { selectUser, login, logout } from "./features/userSlice";
import LogIn from "./components/Login/login";
import "./App.css";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // login
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photo,
            email: authUser.email,
            displayName: authUser.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    });
    // return () => {
    //   cleanup
    // }
  }, [dispatch]);
  return <div className="app">{user ? <Telegram /> : <LogIn />}</div>;
}

export default App;
