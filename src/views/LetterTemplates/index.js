import React, { Component } from 'react'
import { Header, Card, Segment } from 'semantic-ui-react'
import DashboardCard from '../../components/DashboardCard'
import { Helmet } from 'react-helmet'

const letters = [
  {
    link: '/',
    details: 'Some details for Job Letter',
    image: 'https://unsplash.it/600/700?random&sig=1',
    header: 'Job Letter'
  },
  {
    link: '/',
    details: 'Some details for Request for Tender',
    image: 'https://unsplash.it/600/700?random&sig=2',
    header: 'Request for Tender'
  }
]

class LetterTemplates extends Component {
  render () {
    return (
      <div>
        <Helmet>
          <meta charSet='utf-8' />
          <title>Letter Templates - Resource Center</title>
          <link rel='canonical' href='http://mysite.com/example' />
        </Helmet>
        <Header as='h1' dividing>
          Letter Templates
        </Header>
        <Segment raised>
          <p>
            {' '}Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis
            natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,
            pretium quis, sem. Nulla consequat massa quis enim. Donec pede
            justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim
            justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam
            dictum felis eu pede link mollis pretium. Integer tincidunt. Cras
            dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend
            tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend
            ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
            tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque
            rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur
            ullamcorper ultricies nisi.
          </p>
        </Segment>
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
