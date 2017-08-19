import React, { Component } from 'react'
import { Header } from 'semantic-ui-react'
import { Helmet } from 'react-helmet'

class Projects extends Component {
  render () {
    return (
      <div>
        <Header as='h1' dividing>
          Projects
        </Header>
        <Helmet>
          <meta charSet='utf-8' />
          <title>Projects - Resource Center</title>
          <link rel='canonical' href='http://mysite.com/example' />
        </Helmet>
      </div>
    )
  }
}

export default Projects
