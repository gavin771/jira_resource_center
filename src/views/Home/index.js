import React, { Component } from 'react'
import { Header, Card } from 'semantic-ui-react'
import DashboardCard from '../../components/DashboardCard'
import placeholderImage from '../../image.png'

const cards = [
  {
    link: '/',
    details: 'Some details for title 1',
    image: placeholderImage,
    header: 'Title 1'
  },
  {
    link: '/',
    details: 'Some details for title 2',
    image: placeholderImage,
    header: 'Title 2'
  },
  {
    link: '/',
    details: 'Some details for title 3',
    image: placeholderImage,
    header: 'Title 3'
  },
  {
    link: '/',
    details: 'Some details for title 4',
    image: placeholderImage,
    header: 'Title 4'
  },
  {
    link: '/',
    details: 'Some details for title 5',
    image: placeholderImage,
    header: 'Title 5'
  },
  {
    link: '/',
    details: 'Some details for title 6',
    image: placeholderImage,
    header: 'Title 6'
  }
]

class Home extends Component {
  render () {
    return (
      <div>
        <Header as='h1' dividing>
          Control Centre
        </Header>
        <Card.Group itemsPerRow={3}>
          {cards.map((c, i) => {
            return (
              <DashboardCard
                link={c.link}
                header={c.header}
                image={c.image}
                details={c.details}
                key={i}
              />
            )
          })}
        </Card.Group>
      </div>
    )
  }
}

export default Home
