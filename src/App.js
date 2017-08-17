import React from 'react'
import { Container } from 'semantic-ui-react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './views/Home'
import Projects from './views/Projects'
import Tasks from './views/Tasks'
import Images from './views/Images'
import LetterTemplates from './views/LetterTemplates'
import Story from './views/Story'
import Request from './views/Request'
import Tutorial from './views/Tutorial'
import NotFound from './views/NotFound'
import './styles/App.css'
import FixedMenu from './components/FixedMenu'
import FixedFooter from './components/FixedFooter'

const App = () => {
  return (
    <BrowserRouter>
      <div className='App'>
        <FixedMenu />

        <Container className='App-content' style={{ marginTop: '9em' }}>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/projects' component={Projects} />
            <Route exact path='/tasks' component={Tasks} />
            <Route exact path='/images' component={Images} />
            <Route exact path='/letter-templates' component={LetterTemplates} />
            <Route exact path='/share-story' component={Story} />
            <Route exact path='/submit-request' component={Request} />
            <Route exact path='/tutorial' component={Tutorial} />
            <Route component={NotFound} />
          </Switch>
        </Container>
        <FixedFooter />
      </div>
    </BrowserRouter>
  )
}

export default App
