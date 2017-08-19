import React from 'react'
import { Card, Image, Button } from 'semantic-ui-react'

const ImageCard = props => {
  return (
    <Card raised href='#'>
      <Image alt={props.alt} src={props.link} />
      <Card.Content extra>
        <div className='centered ui one buttons'>
          <Button basic color='green'>
            Download PNG
          </Button>
        </div>
      </Card.Content>
    </Card>
  )
}

export default ImageCard
