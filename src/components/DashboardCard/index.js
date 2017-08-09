import React, { Component } from 'react'
import { Card, Image, Divider } from 'semantic-ui-react'

class DashboardCard extends Component {
  render () {
    return (
      <Card raised href={this.props.link}>
        <Card.Content>
          <Image size='small' src={this.props.image} centered />
          <Divider />
          <Card.Header className='center aligned'>
            {this.props.header}
          </Card.Header>
          <Card.Description>
            {this.props.details}
          </Card.Description>
        </Card.Content>
      </Card>
    )
  }
}

export default DashboardCard
