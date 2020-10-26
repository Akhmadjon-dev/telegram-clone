import React from "react";
import {Search as SearchIcon, BorderColorOutlined as BorderColorIcon, PhoneOutlined, QuestionAnswerOutlined, Settings} from '@material-ui/icons';
import {IconButton, Avatar} from '@material-ui/core';
import SidebarThread from '../SidebarThread/SidebarThread';
import './Sidebar.css'
const Sidebar = () => {
  return <div className="sidebar">
      <div className="sidebar__header">
          <div className="sidebar__search">
              <SearchIcon className="sidebar__icon" />
              <input type="text" placeholder="search" className="sidebar__input"/>
          </div>
          <IconButton variant="outlined" id="sidebar__button">
             <BorderColorIcon />
          </IconButton>
          
      </div>
      <div className="sidebar__threads">
        <SidebarThread/>
        <SidebarThread/>
        <SidebarThread/>
        <SidebarThread/>
        <SidebarThread/>
        <SidebarThread/>
        <SidebarThread/>
        <SidebarThread/>
        <SidebarThread/>
        <SidebarThread/>
        <SidebarThread/>
        <SidebarThread/>
        <SidebarThread/>
        <SidebarThread/>
        <SidebarThread/>
        <SidebarThread/>
        <SidebarThread/>
        <SidebarThread/>
        <SidebarThread/>
        <SidebarThread/>
      </div>
      <div className="sidebar__bottom">
        <Avatar className="sidebar__bottom__avatar" />
        <IconButton>
            <PhoneOutlined/>
        </IconButton>
        <IconButton>
            <QuestionAnswerOutlined />
        </IconButton>
        <IconButton>
            <Settings />
        </IconButton>
      </div>
  </div>;
};

export default Sidebar;
