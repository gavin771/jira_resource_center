import React, { Component } from 'react'
import { Header, Card } from 'semantic-ui-react'
import DashboardCard from '../DashboardCard'

const flyers = [
  {
    link: '/',
    details: 'Some details for Flyer 1',
    image: 'https://unsplash.it/600/700?random',
    header: 'Flyer 1'
  },
  {
    link: '/',
    details: 'Some details for Flyer 2',
    image: 'https://unsplash.it/600/700?random',
    header: 'Flyer 2'
  },
  {
    link: '/',
    details: 'Some details for Flyer 3',
    image: 'https://unsplash.it/600/700?random',
    header: 'Flyer 3'
  },
  {
    link: '/',
    details: 'Some details for Flyer 4',
    image: 'https://unsplash.it/600/700?random',
    header: 'Flyer 4'
  },
  {
    link: '/',
    details: 'Some details for Flyer 5',
    image: 'https://unsplash.it/600/700?random',
    header: 'Flyer 5'
  },
  {
    link: '/',
    details: 'Some details for Flyer 6',
    image: 'https://unsplash.it/600/700?random',
    header: 'Flyer 6'
  }
]

class Flyers extends Component {
  render () {
    return (
      <div>
        <Header as='h1' dividing>
          Flyers
        </Header>
        <Card.Group itemsPerRow={2}>
          {flyers.map((f, i) => {
            return (
              <DashboardCard
                header={f.header}
                image={f.image}
                details={f.details}
                key={i}
                displayExtra
              />
            )
          })}
        </Card.Group>
      </div>
    )
  }
}

export default Flyers
