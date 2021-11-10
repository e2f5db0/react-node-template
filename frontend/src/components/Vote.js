import React, { useEffect, useState } from 'react'
import axios from 'axios'
import classNames from 'classnames'

const querystring = require('querystring')

const Vote = (props) => {

    const [topics, setTopics] = useState([])
    const [fetchedOnce, setFetchedOnce] = useState(false)

    const url = process.env.REACT_APP_DATABASE_URL

    const fetchTopics = () => axios.get(`${url}/topics`).then((res) => setTopics(res.data)).catch(error => console.log(error))

    useEffect(() => {
        if (!fetchedOnce) {
            fetchTopics()
        }
        setInterval(() => {
            fetchTopics()
            setFetchedOnce(true)
        }, 2000)
    }, [])

    const vote = async (id) => {
        await axios.post(`${url}/vote/${id}`, querystring.stringify({ user: props.user }))
    }

    return (
        <div className='Container'>
            <h1>Äänestä</h1>
            <div className='Topic-list'>
                <h2>Aiheet</h2>
                <div className='Vote-container'>
                    {topics.length > 0 && topics.map(topic => <div key={topic.name} className={classNames({'Topic-vote': !topic.votes.includes(props.user)}, {'Topic-vote Voted': topic.votes.includes(props.user)})} onClick={() => vote(topic.id)}><span>{topic.name}</span><br/><span>{topic.votes.length}/6</span></div>)}
                </div>
            </div>
        </div>
    )
}

export default Vote
