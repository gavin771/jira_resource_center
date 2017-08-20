import React from 'react'
import { Card, Image, Button } from 'semantic-ui-react'

const ImageCard = props => {
  return (
    <Card raised href='#'>
      <Image alt={props.alt} src={props.link} />
      <Card.Content extra className='ui center aligned '>
        <div className='ui one buttons'>
          <Button basic color='green' as='a' href={props.link} target='_blank'>
            Download PNG
          </Button>
        </div>
      </Card.Content>
    </Card>
  )
}

export default ImageCard
