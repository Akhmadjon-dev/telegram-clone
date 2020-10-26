import React from "react";
import {Search as SearchIcon, BorderColorOutlined as BorderColorIcon} from '@material-ui/icons';
import {IconButton} from '@material-ui/core';
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
      </div>
      <div className="sidebar__bottom">

      </div>
  </div>;
};

export default Sidebar;
