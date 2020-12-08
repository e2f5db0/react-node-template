import React from 'react'

const SideDrawer = ({ show, toggleDrawer, setBody }) => {

  let drawerClasses = ['Side-Drawer']
  if (show) {
    drawerClasses.push('open')
  }

  const handleSelection = (body) => {
    setBody(body)
    toggleDrawer()
  }

  return (
    <nav className={drawerClasses.join(' ')}>
      <ul>
        <li className='Side-Drawer-item' onClick={() => handleSelection('firstOption')}>First Option</li>
        <li className='Side-Drawer-item' onClick={() => handleSelection('secondOption')}>Second Option</li>
      </ul>
    </nav>
  )
}

export default SideDrawer