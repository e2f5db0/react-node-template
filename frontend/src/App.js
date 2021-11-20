import React from 'react'
import './App.css'
import { Switch, Route, useHistory } from 'react-router-dom'
import Navbar from './components/Navbar'
import Main from './components/Main'
import FirstOption from './components/FirstOption'
import SecondOption from './components/SecondOption'

const App = () => {

  const history = useHistory()

  const setView = (view) => {
    history.push(`/${view}`)
  }

  const views = {}

  views['main'] = <Main />

  views['firstOption'] = <FirstOption />

  views['secondOption'] = <SecondOption />

  return (
    <div className="App">
      <Navbar setBody={setView} />
      <Switch>
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

      </Switch>
    </div>
  )

}

export default App
