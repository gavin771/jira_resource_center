import React from 'react'
import { Header, Segment, Embed } from 'semantic-ui-react'

const Tutorial = props => {
  return (
    <div>
      <Header as='h1' dividing>
        Tutorial
      </Header>
      <Segment>
        <Embed
          source='youtube'
          id='I3WAAFlVsJ4'
          placeholder='http://semantic-ui.com/images/image-16by9.png'
        />
      </Segment>
    </div>
  )
}

export default Tutorial
