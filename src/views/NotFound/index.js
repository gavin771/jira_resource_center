import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { Header } from 'semantic-ui-react'

class NotFound extends Component {
  render () {
    return (
      <div>
        <Helmet>
          <meta charSet='utf-8' />
          <title>Not Found - Resource Center</title>
          <link rel='canonical' href='http://mysite.com/example' />
        </Helmet>

        <Header as='h1' dividing>
          Not Found
        </Header>
      </div>
    )
  }
}

export default NotFound
