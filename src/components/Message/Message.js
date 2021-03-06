import React from "react";
import { useSelector } from "react-redux";
import { Avatar, IconButton } from "@material-ui/core";
import { selectUser } from "../../features/userSlice";
const Message = ({
  id,
  data: { timestamp, displayName, email, message, photo, uid },
}) => {
  const user = useSelector(selectUser);
  return (
    <div className={`message ${user.email === email && `message__sender`}`}>
      <Avatar src={photo} className="message__photo" />
      <div className="message__contents">
        <p>{message}</p>
        <small>{new Date(timestamp?.toDate())}</small>
      </div>
    </div>
  );
};

export default Message;
