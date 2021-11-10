import React from 'react'

const Login = (props) => {

  const members = ['Eemeli', 'Oona', 'Sami', 'Sebu', 'Suski',]

  return (
    <div className='Container'>
      <h1>Tietopiiri</h1>
      {members.map(name => 
        <div key={name} className='Choice-container' onClick={() => props.setUser(name)}>
          <p>{name}</p>
        </div>
      )}
    </div>
  )
}

export default Login
