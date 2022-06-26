import React, { useEffect } from 'react'
import './App.css'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Main from './components/Main'
import FirstOption from './components/FirstOption'
import SecondOption from './components/SecondOption'
import axios from 'axios'

const App = () => {

  useEffect(() => {
    axios
      .get('/datacheck')
      .then(() => 0)
  }, [])

  const navigate = useNavigate()

  const setView = (view) => {
    navigate(`/${view}`)
  }

  const views = {}

  views['main'] = <Main />

  views['firstOption'] = <FirstOption />

  views['secondOption'] = <SecondOption />

  return (
    <div className="App">
      <Navbar setBody={setView} />
      <Routes>
        <Route exact path='/'>
          {views['main']}
        </Route>

        <Route exact path='/main'>
          {views['main']}
        </Route>

        <Route exact path='/firstOption'>
          {views['firstOption']}
        </Route>

        <Route exact path='/secondOption'>
          {views['secondOption']}
        </Route>

      </Routes>
    </div>
  )

}

export default App
