import React from 'react'
import { Card, Image, Divider, Button } from 'semantic-ui-react'

const DashboardCard = props => {
  return (
    <Card raised href={props.link}>
      <Card.Content>
        <Image size='small' src={props.image} centered />
        <Divider />
        <Card.Header className='center aligned'>
          {props.header}
        </Card.Header>
        <Card.Description>
          {props.details}
        </Card.Description>
      </Card.Content>
      {props.displayExtra &&
        <Card.Content extra>
          <div className='ui two buttons'>
            <Button basic color='green'>
              View
            </Button>
            <Button basic color='blue'>
              Download
            </Button>
          </div>
        </Card.Content>}
    </Card>
  )
}

export default DashboardCard
