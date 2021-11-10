import React from 'react'

const Main = (props) => {

  return (
    <div className='Container'>
      <h1>Tietopiiri <small>({props.user})</small> </h1>
      <div className='Choice-container' onClick={() => props.setView('addTopics')}>
          <p>Lisää aihe</p>
      </div>
      <div className='Choice-container' onClick={() => props.setView('vote')}>
          <p>Äänestä</p>
      </div>
      <div className='Choice-container' onClick={() => props.setView('topicSelection')}>
          <p>Aihevalinta</p>
      </div>
    </div>
  )
}

export default Main
