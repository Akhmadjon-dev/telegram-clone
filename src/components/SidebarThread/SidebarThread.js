import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setThread } from "../../features/threadSlice";
import Message from "../Message/Message";
import { Avatar } from "@material-ui/core";
import db from "../../firebase/Firebase";
import "./SidebarThread.css";
const SidebarThread = ({ id, threadName }) => {
  const dispatch = useDispatch();
  const [threadInfo, setThreadInfo] = useState([]);
  useEffect(() => {
    db.collection("threads")
      .doc(id)
      .collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setThreadInfo(snapshot.docs.map((doc) => doc.data()));
      });
  }, [id]);
  return (
    <div
      className="sidebarThread"
      onClick={() => {
        dispatch(setThreadInfo({ threadId: id, threadName }));
      }}
    >
      <Avatar />
      <div className="sidebarThread__details">
        <h3>Thread name</h3>
        <p>This is info</p>
        <small className="sidebarThread__timestamp">timestamp</small>
      </div>
    </div>
  );
};

export default SidebarThread;
