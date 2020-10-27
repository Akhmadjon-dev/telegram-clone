import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  Search as SearchIcon,
  BorderColorOutlined as BorderColorIcon,
  PhoneOutlined,
  QuestionAnswerOutlined,
  Settings,
} from "@material-ui/icons";
import { IconButton, Avatar } from "@material-ui/core";
import SidebarThread from "../SidebarThread/SidebarThread";
import { auth } from "../../firebase/Firebase";
import db from "../../firebase/Firebase";
import { selectUser } from "../../features/userSlice";
import "./Sidebar.css";
const Sidebar = () => {
  const user = useSelector(selectUser);
  const [thread, setThread] = useState([]);
  useEffect(() => {
    db.collection("threads").onSnapshot((snapshot) =>
      setThread(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []);
  const addThread = () => {
    const threadName = prompt("Enter thread name.. ");
    if (threadName) {
      db.collection("threads").add({
        threadName,
      });
    }
  };
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__search">
          <SearchIcon className="sidebar__icon" />
          <input type="text" placeholder="search" className="sidebar__input" />
        </div>
        <IconButton variant="outlined" id="sidebar__button" onClick={addThread}>
          <BorderColorIcon />
        </IconButton>
      </div>
      <div className="sidebar__threads">
        {thread.map(({ id, data: { threadName } }) => (
          <SidebarThread key={id} id={id} threadName={threadName} />
        ))}
      </div>
      <div className="sidebar__bottom">
        <Avatar
          className="sidebar__bottom__avatar"
          onClick={() => auth.signOut()}
        />
        <IconButton>
          <PhoneOutlined />
        </IconButton>
        <IconButton>
          <QuestionAnswerOutlined />
        </IconButton>
        <IconButton>
          <Settings />
        </IconButton>
      </div>
    </div>
  );
};

export default Sidebar;
