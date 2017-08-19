import React, { Component } from 'react'
import { Header, Grid, List } from 'semantic-ui-react'
import Masonry from 'react-masonry-component'
import ImageCard from '../../components/ImageCard'
import { Helmet } from 'react-helmet'

const images = [
  {
    link: '/',
    details: 'Some details for Image 1',
    image: 'https://unsplash.it/600/700?random&sig=3',
    header: 'Image 1',
    type: 'flyers'
  },
  {
    link: '/',
    details: 'Some details for Image 2',
    image: 'https://unsplash.it/600/700?random&sig=4',
    header: 'Image 2',
    type: 'flyers'
  },
  {
    link: '/',
    details: 'Some details for Image 3',
    image: 'https://unsplash.it/600/700?random&sig=5',
    header: 'Image 3',
    type: 'flyers'
  },
  {
    link: '/',
    details: 'Some details for Image 4',
    image: 'https://unsplash.it/600/700?random&sig=6',
    header: 'Image 4',
    type: 'logos'
  },
  {
    link: '/',
    details: 'Some details for Image 5',
    image: 'https://unsplash.it/600/700?random&sig=7',
    header: 'Image 5',
    type: 'logos'
  },
  {
    link: '/',
    details: 'Some details for Image 6',
    image: 'https://unsplash.it/600/700?random&sig=8',
    header: 'Image 6',
    type: 'logos'
  }
]

class Images extends Component {
  constructor (props) {
    super(props)

    this.state = {
      activeTab: 'all',
      data: images,
      type: 'all'
    }
  }

  render () {
    const { activeTab } = this.state
    const tabs = { all: 'All', flyers: 'Flyers', logos: 'Logos' }

    return (
      <div>
        <Helmet>
          <meta charSet='utf-8' />
          <title>Images - Resource Center</title>
          <link rel='canonical' href='http://mysite.com/example' />
        </Helmet>

        <Header as='h1' dividing>
          Images
        </Header>

        {/* Container for logo type links  */}
        <Grid centered>
          <Grid.Column textAlign='center'>
            <List bulleted horizontal>
              {Object.keys(tabs).map((tabKey, i) =>
                <List.Item key={tabKey + '-' + i}>
                  <a
                    key={tabKey}
                    href={'#' + tabKey}
                    className={tabKey === activeTab && 'active'}
                    onClick={() => this.setState({ activeTab: tabKey })}
                  >
                    {tabs[tabKey]}
                  </a>
                </List.Item>
              )}
            </List>
          </Grid.Column>
        </Grid>

        <Masonry className={'ui four cards'}>
          {this.state.data
            .filter(post => activeTab === 'all' || activeTab === post.type)
            .map((post, i) =>
              <ImageCard key={i} alt={post.header} link={post.image} />
            )}
        </Masonry>
      </div>
    )
  }
}

export default Images
