import React, { useState, useEffect } from "react";
import {
  Avatar,
  IconButton,
  //   MicNoneOutlined,
  //   TimerOutlined,
  //   SendRounded,
} from "@material-ui/core";
import {
  MicNoneOutlined,
  MoreHoriz,
  SendRounded,
  TimerOutlined,
} from "@material-ui/icons";
import db from "../../firebase/Firebase";
import firebase from "firebase";
import { useSelector } from "react-redux";
import { selectThreadId, selectThreadName } from "../../features/threadSlice";
import { selectUser } from "../../features/userSlice";
import Message from "../Message/Message";
import "./Thread.css";
const Thread = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const threadName = useSelector(selectThreadName);
  const threadId = useSelector(selectThreadId);
  const user = useSelector(selectUser);

  useEffect(() => {
    if (threadId) {
      db.collection("threads")
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
          setMessages(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data,
            }))
          )
        );
    }
  });
  const sendMessage = (event) => {
    event.preventDefault();
    db.collection("threads").doc(threadId).collection("messages").add({
      timestamp: firebase.firestore.FieldValue.serverTimeStamp(),
      message: input,
      uid: user.uid,
      photo: user.photo,
      email: user.email,
      displayName: user.displayName,
    });
    // firebase action
    setInput("");
  };
  console.log(input);
  return (
    <div className="thread">
      <div className="thread__header">
        <div className="thread__header__contents">
          <Avatar />
          <div className="thread__header__contents__info">
            <h4>ThreadName</h4>
            <h5>Last Seen</h5>
          </div>
        </div>
        <IconButton>
          <MoreHoriz className="thread__header__details" />
        </IconButton>
      </div>
      <div className="thread__messages">
        {messages.map(({ data, id }) => {
          <Message key={id} data={data} />;
        })}
      </div>
      <div className="thead__input">
        <form onSubmit={sendMessage}>
          <input
            type="text"
            placeholder="write here..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <IconButton>
            <TimerOutlined />
          </IconButton>
          <IconButton>
            <SendRounded />
          </IconButton>
          <IconButton>
            <MicNoneOutlined />
          </IconButton>
        </form>
      </div>
    </div>
  );
};

export default Thread;
