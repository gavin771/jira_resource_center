import React, { Component } from 'react'
import { Container, Header, Grid, Image } from 'semantic-ui-react'
import { BrowserRouter } from 'react-router-dom'
import paragraph from '../../paragraph.png'
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
            <Header as='h1' dividing>
              Control Centre
            </Header>
            <Grid columns={3}>
              <Grid.Row>
                <Grid.Column>
                  <Image src={paragraph} />
                </Grid.Column>
                <Grid.Column>
                  <Image src={paragraph} />
                </Grid.Column>
                <Grid.Column>
                  <Image src={paragraph} />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
          <FixedFooter />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
