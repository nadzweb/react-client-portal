import React, { Component } from 'react';
import {NavLink } from 'react-router-dom';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
const setTitle = (title) => {
  console.log(title);
};
class LeftNav extends Component {
  
  
  render() {
    return (
      <div>
        <NavLink className="nav-link" activeClassName="active" to="/" isActive={setTitle('Home')}>
          <ListItem button>
            <ListItemIcon>
              <i className="material-icons">home</i>
            </ListItemIcon>
            <ListItemText primary="Inbox" />
          </ListItem>
        </NavLink>
        <NavLink className="nav-link" activeClassName="active" to="/projects" isActive={setTitle('Projects')}>
          <ListItem button>
            <ListItemIcon>
              <i className="material-icons">list</i>
            </ListItemIcon>
            <ListItemText primary="Projects" />
          </ListItem>
        </NavLink>
      </div>
    );
  }
}

export default LeftNav;

/**
 * import React, { Component } from 'react';
import {NavLink } from 'react-router-dom';
import './LeftNav.css';

class LeftNav extends Component {
  render() {
    return (
        <nav className="col-md-2 d-none d-md-block bg-light sidebar">
          <div className="sidebar-sticky">
            <ul className="nav flex-column">
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to="/dashboard">Dashboard</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to="/projects">Projects</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to="/profile">Profile</NavLink>
              </li>
            </ul>            
          </div>
        </nav>
    );
  }
}

export default LeftNav;
**/
