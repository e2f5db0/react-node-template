import React from 'react'

const Backdrop = ({ toggleDrawer }) => {
  return (
    <div className='Backdrop' onClick={() => toggleDrawer()}></div>
  )
}

export default Backdrop
