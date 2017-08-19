import React from 'react'
import { Header, Segment, Embed } from 'semantic-ui-react'
import { Helmet } from 'react-helmet'

const Tutorial = props => {
  return (
    <div>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Tutorial - Resource Center</title>
        <link rel='canonical' href='http://mysite.com/example' />
      </Helmet>
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
