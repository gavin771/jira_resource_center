import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../Home'
import Projects from '../Projects'
import Tasks from '../Tasks'
import NotFound from '../NotFound'
import './App.css'
import FixedMenu from '../FixedMenu'
import FixedFooter from '../FixedFooter'

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className='App'>
          <FixedMenu />

          <Container className='App-content' style={{ marginTop: '9em' }}>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/projects' component={Projects} />
              <Route exact path='/tasks' component={Tasks} />
              <Route component={NotFound} />
            </Switch>
          </Container>
          <FixedFooter />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
