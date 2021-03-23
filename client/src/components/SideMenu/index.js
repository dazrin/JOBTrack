import React, { useState } from 'react';
import { Menu, Input, Icon, Dropdown } from 'semantic-ui-react';
import { NavLink } from "react-router-dom";
import './style.css';

function SideMenu() {
  const [state, setState ] = useState('')
  const handleItemClick = (e, { name }) => setState({ activeItem: name });
  const { activeItem } = state;
  return (
    <Menu vertical className='side-menu' style={{flex: 'auto', marginLeft: 5}}>
      <Menu.Item>
        <Input icon='search' placeholder='Search in saved jobs' />
      </Menu.Item>

      <Dropdown item  text='Profile' >
          <Dropdown.Menu>
            <Dropdown.Item 
            icon='user' 
            text='View Profile'
            as={ NavLink } to="/profile"
            active={activeItem === 'profile'}
            onClick={handleItemClick}
             />
            <Dropdown.Item icon='edit' text='Edit Profile' />
            <Dropdown.Item icon='log out' text='Logout' color='grey'/>
          </Dropdown.Menu>
        </Dropdown>

      <Menu.Item 
        as={ NavLink } to="/dashboard"
        name='dashboard'
        active={activeItem === 'dashboard'}
        onClick={handleItemClick}
      >
        <Icon name='clipboard list' color='grey'/>
        Dashboard
      </Menu.Item>
      <Menu.Item 
        as={ NavLink } to="/search"
        name='search'
        active={activeItem === 'search'}
        onClick={handleItemClick}
      >
        <Icon name='search plus' color='grey'/>
        Search new
      </Menu.Item>

      <Menu.Item
        as={ NavLink } to="/add"
        name='add'
        active={activeItem === 'add'}
        onClick={handleItemClick}
      >
        <Icon name='add square' color='grey'/>
        Add Job
      </Menu.Item>
      
      <Menu.Item
      as={ NavLink } to="/links"
      name='Links'
      active={activeItem === 'links'}
      onClick={handleItemClick}
      >
      <Icon name='hand pointer outline' color='grey'/>
      Useful Links
      </Menu.Item>
    </Menu>
  )
}

export default SideMenu;