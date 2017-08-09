import React, { Component } from 'react'
import { Header, Card } from 'semantic-ui-react'
import DashboardCard from '../DashboardCard'

const letters = [
  {
    link: '/',
    details: 'Some details for Job Letter',
    image: 'https://unsplash.it/600/700?random',
    header: 'Job Letter'
  },
  {
    link: '/',
    details: 'Some details for Request for Tender',
    image: 'https://unsplash.it/600/700?random',
    header: 'Request for Tender'
  }
]

class LetterTemplates extends Component {
  render () {
    return (
      <div>
        <Header as='h1' dividing>
          Letter Templates
        </Header>
        <Card.Group itemsPerRow={2}>
          {letters.map((l, i) => {
            return (
              <DashboardCard
                header={l.header}
                image={l.image}
                details={l.details}
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

export default LetterTemplates
