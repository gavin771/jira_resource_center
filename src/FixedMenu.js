import React from 'react'
import { Container, Image, Menu } from 'semantic-ui-react'
import { Route, Link } from 'react-router-dom'
import logo from './logo.svg'

const FixedMenu = () =>
  <Menu fixed='top' inverted>
    <Container>
      <Menu.Item header>
        <Image
          size='tiny'
          src={logo}
          style={{ marginRight: '1.5em' }}
          className='App-logo'
        />
        JIRA Resource Centre
      </Menu.Item>
      <Menu.Item>
        <Link to='/'>Home</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to='/projects'>Projects</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to='/tasks'>Open Tasks</Link>
      </Menu.Item>
    </Container>

    <Route exact path='/' render={() => <h1>Home View</h1>} />
    <Route exact path='/projects' render={() => <h1>Project View</h1>} />
    <Route exact path='/tasks' render={() => <h1>Tasks View</h1>} />
  </Menu>

export default FixedMenu
