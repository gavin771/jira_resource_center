import React, { Component } from 'react'
import paragraph from './paragraph.png'
import './App.css'
import { Container, Header, Grid, Image } from 'semantic-ui-react'
import FixedMenu from './FixedMenu.js'
import FixedFooter from './FixedFooter.js'

class App extends Component {
  render () {
    return (
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
    )
  }
}

export default App
