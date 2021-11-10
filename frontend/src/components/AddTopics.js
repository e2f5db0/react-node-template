import React, { useEffect, useState } from 'react'
import axios from 'axios'

const querystring = require('querystring')

const AddTopics = (props) => {

  const [topics, setTopics] = useState([])
  const [topic, setTopic] = useState('')
  const [fetchedOnce, setFetchedOnce] = useState(false)

  const url = process.env.REACT_APP_DATABASE_URL

  const fetchTopics = () => axios.get(`${url}/topics`).then((res) => setTopics(res.data)).catch(error => console.log(error))

  useEffect(() => {
    if (!fetchedOnce) {
      fetchTopics()
    }
    setInterval(() => {
      setFetchedOnce(true)
      fetchTopics()
    }, 2000)
  }, [])

  const addTopic = async () => {
    await axios.post(`${url}/add`, querystring.stringify({ name: topic, created_by: props.user }))
    setTopic('')
  }

  const deleteTopic = async (id) => {
    await axios.get(`${url}/delete/${id}`)
    fetchTopics()
  }

  return (
    <div className='Container'>
      <h1>Lisää aihe</h1>
      <input type='text' className='Input-field' value={topic} onChange={(event) => setTopic(event.target.value)} />
      <button className='btn' onClick={async () => await addTopic()}>Lisää</button>
      <div className='Topic-list'>
        <h2>Aiheet</h2>
        {topics.length > 0 && topics.map(topic => <p key={topic.name}><span>{topic.name}</span> <span className='Delete-cross' onClick={() => deleteTopic(topic.id)}> X</span></p>)}
      </div>
    </div>
  )
}

export default AddTopics
