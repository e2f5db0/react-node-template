import React, { useState } from 'react'
import logo from '../resources/logo.jpg'
import DrawerToggleButton from './DrawerToggleButton'
import SideDrawer from './SideDrawer'
import Backdrop from './Backdrop'

const Navbar = ({ setBody }) => {

  const [drawerOpen, setDrawerOpen] = useState(false)

  const toggleDrawer = () => {
    drawerOpen ? setDrawerOpen(false) : setDrawerOpen(true)
  }

  return (
    <div>
      <header className='Navbar'>
        <nav className='Navbar-navigation'>
          <div className='Navbar-navigation'>
            <DrawerToggleButton toggleDrawer={toggleDrawer} />
          </div>
          <img className='Navbar-logo' src={logo} alt='logo' onClick={() => setBody('main')} />
          <p className='NavBar-heading' onClick={() => setBody('main')}>React Node Template</p>
          <div className='Navbar-spacer'></div>
          <div className='Navbar-items'>
            <ul>
              <li className='Navbar-item' onClick={() => setBody('firstOption')}>First Option</li>
              <li className='Navbar-item' onClick={() => setBody('secondOption')}>Second Option</li>
            </ul>
          </div>
        </nav>
      </header>
      <SideDrawer show={drawerOpen} toggleDrawer={toggleDrawer} setBody={setBody} />
      {drawerOpen && <Backdrop toggleDrawer={toggleDrawer} />}
    </div>
  )
}

export default Navbar
