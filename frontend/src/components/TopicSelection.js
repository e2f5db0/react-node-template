import React, { useEffect, useState } from 'react'
import axios from 'axios'

const TopicSelection = () => {

  const [topics, setTopics] = useState([])
  const [winner, setWinner] = useState(undefined)

  const url = process.env.REACT_APP_DATABASE_URL

  const fetchTopics = () => axios.get(`${url}/winnertopics`).then((res) => setTopics(res.data)).catch(error => console.log(error))

  useEffect(() => {
    fetchTopics()
    setInterval(() => {
      fetchTopics()
    }, 2000)
  }, [])

  const selectTopic = () => {
    axios.get(`${url}/selectwinner`).then((res) => {
      const response = res.data;
      if (response.name) {
        setWinner(res.data.name)
      } else {
        setWinner('Pitää äänestää lisää!')
      }
    }).catch(error => console.log(error))
    fetchTopics()
  }

  return (
    <div className='Container'>
      <h1>Aiheen valinta</h1>
      <h2>Voittaja-aihe:</h2>
      <p className='Winner-topic'>{topics.length > 0 && !winner ? topics[0].name : winner ? winner : '-'}</p>
      <button className='btn' onClick={() => selectTopic()}>Uusi aihe</button>
      <div className='Topic-list'>
        <h2>Menneet aiheet</h2>
        {topics.length > 0 && topics.map(topic => <p key={topic.name}><span>{topic.name}</span></p>)}
      </div>
    </div>
  )
}

export default TopicSelection
