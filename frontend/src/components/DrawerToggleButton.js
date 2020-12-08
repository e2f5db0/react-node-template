import React from 'react'

const DrawerToggleButton = ({ toggleDrawer }) => {
  return (
    <>
      <button className='Toggle-Button' onClick={() => toggleDrawer()}>
        <div className='Toggle-Button-line'></div>
        <div className='Toggle-Button-line'></div>
        <div className='Toggle-Button-line'></div>
      </button>
    </>
  )
}

export default DrawerToggleButton
