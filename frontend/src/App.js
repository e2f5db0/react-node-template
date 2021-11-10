import React, { useState } from 'react'
import './App.css'
import { Switch, Route, useHistory } from 'react-router-dom'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Main from './components/Main'
import AddTopics from './components/AddTopics'
import TopicSelection from './components/TopicSelection'
import Vote from './components/Vote'

const App = () => {

    const [user, setUser] = useState(undefined)

    const history = useHistory()

    const setView = (view) => {
        history.push(`/${view}`)
    }

    const views = {}

    views['login'] = <Login setUser={setUser} />

    views['main'] = <Main user={user} setView={setView} />

    views['addTopics'] = <AddTopics user={user} />

    views['vote'] = <Vote setView={setView} user={user} />

    views['topicSelection'] = <TopicSelection />


    return (
        <div className="App">
            {
                //<Navbar setBody={setView} />
            }
            <Switch>
                <Route exact path='/'>
                    {user ? views['main'] : views['login']}
                </Route>

                <Route exact path='/main'>
                    {user ? views['main'] : views['login']}
                </Route>

                <Route exact path='/addTopics'>
                    {user ? views['addTopics'] : views['login']}
                </Route>

                <Route exact path='/vote'>
                    {user ? views['vote'] : views['login']}
                </Route>

                <Route exact path='/topicSelection'>
                    {user ? views['topicSelection'] : views['login']}
                </Route>

            </Switch>
        </div>
    )

}

export default App
