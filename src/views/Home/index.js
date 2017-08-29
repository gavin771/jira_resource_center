import React, { Component } from 'react'
import { Header, Card } from 'semantic-ui-react'
import DashboardCard from '../../components/DashboardCard'
import placeholderImage from '../../image.png'
import { Helmet } from 'react-helmet'

const cards = [
  {
    link: '/',
    details: 'Some details for title 1',
    image: placeholderImage,
    header: 'Title 1',
    iconName: 'home'
  },
  {
    link: '/',
    details: 'Some details for title 2',
    image: placeholderImage,
    header: 'Title 2',
    iconName: 'tasks'
  },
  {
    link: '/',
    details: 'Some details for title 3',
    image: placeholderImage,
    header: 'Title 3',
    iconName: 'image'
  },
  {
    link: '/',
    details: 'Some details for title 4',
    image: placeholderImage,
    header: 'Title 4',
    iconName: 'comment'
  },
  {
    link: '/',
    details: 'Some details for title 5',
    image: placeholderImage,
    header: 'Title 5',
    iconName: 'code'
  },
  {
    link: '/',
    details: 'Some details for title 6',
    image: placeholderImage,
    header: 'Title 6',
    iconName: 'settings'
  }
]

class Home extends Component {
  render () {
    return (
      <div>
        <Helmet>
          <meta charSet='utf-8' />
          <title>Home - Resource Center</title>
          <link rel='canonical' href='http://mysite.com/example' />
        </Helmet>
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
                iconName={c.iconName}
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
