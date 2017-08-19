import React, { Component } from 'react'
import { Header } from 'semantic-ui-react'
import { Helmet } from 'react-helmet'

class Tasks extends Component {
  render () {
    return (
      <div>
        <Helmet>
          <meta charSet='utf-8' />
          <title>Open Tasks - Resource Center</title>
          <link rel='canonical' href='http://mysite.com/example' />
        </Helmet>
        <Header as='h1' dividing>
          Open Tasks
        </Header>
      </div>
    )
  }
}

export default Tasks
