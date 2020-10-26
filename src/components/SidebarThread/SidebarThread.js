import React from "react";

const SidebarThread = () => {
  return (
    <div className="sidebarThread">
      <Avatar />
      <div className="sidebatThread__details">
        <h3>Thread name</h3>
        <p>This is info</p>
        <small className="sidebarThread__timestamp">timestamp</small>
      </div>
    </div>
  );
};

export default SidebarThread;
