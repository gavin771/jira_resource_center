import React, { Component } from 'react'
import paragraph from '../../paragraph.png'
import { Grid, Image, Header } from 'semantic-ui-react'

class Home extends Component {
  render () {
    return (
      <div>
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
      </div>
    )
  }
}

export default Home
