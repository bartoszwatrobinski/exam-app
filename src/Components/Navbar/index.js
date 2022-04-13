import React from 'react'
import {Nav,NavLink,Bars,NavMenu,NavBtn,NavBtnLink} from './NavBarElements.js';
import Logo from './../../Images/ExaminationLogo.png'


const Navbar = () => {
  return (
    <>
      <Nav>
          <NavLink to="/">
              <img src={Logo} alt="Logo"  width="75" height="75"></img>
          </NavLink>
          <Bars />
          <NavMenu>
            <NavLink to="/Home" activeStyle>
                Home
            </NavLink>
            <NavLink to="/Calendar" activeStyle>
                Calendar
            </NavLink>
            <NavLink to="/Forum" activeStyle>
                Forums
            </NavLink>
            <NavLink to="/Examiner" activeStyle>
                Examiner
            </NavLink>
            <NavLink to="/Admin" activeStyle>
                Admin
            </NavLink>
          </NavMenu>
          <NavBtn>
              <NavBtnLink to="/Login">Log in</NavBtnLink>
          </NavBtn>
      </Nav>
    </>
  )
}

export default Navbar
