import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Thread from "../Thread/Thread";
import "./Telegram.css";
const Telegram = () => {
  return (
    <div className="telegram">
      <Sidebar />
      <Thread />
    </div>
  );
};

export default Telegram;
