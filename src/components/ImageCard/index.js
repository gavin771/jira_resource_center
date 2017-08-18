import React from 'react'
import { Card, Image, Button } from 'semantic-ui-react'

const ImageCard = props => {
  return (
    <Card raised href='#'>
      <Image alt={props.alt} src={props.link} />
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            PNG
          </Button>
          <Button basic color='blue'>
            PSD
          </Button>
        </div>
      </Card.Content>
    </Card>
  )
}

export default ImageCard
