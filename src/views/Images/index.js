import React, { Component } from 'react'
import { Header } from 'semantic-ui-react'
import Masonry from 'react-masonry-component'

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

    const masonryComp = (
      <Masonry>
        {this.state.data
          .filter(post => activeTab === 'all' || activeTab === post.type)
          .map((post, i) =>
            <div key={i}>
              <img alt={post.header} src={post.image} />
            </div>
          )}
      </Masonry>
    )

    return (
      <div>
        <Header as='h1' dividing>
          Images
        </Header>
        <div>
          <div>
            <div>
              <ul>
                {Object.keys(tabs).map((tabKey, i) =>
                  <li key={tabKey + '-' + i}>
                    <a
                      key={tabKey}
                      href={'#' + tabKey}
                      className={tabKey === activeTab && 'active'}
                      onClick={() => this.setState({ activeTab: tabKey })}
                    >
                      {tabs[tabKey]}
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
        {Object.keys(tabs).map(tabKey =>
          <div className='row' id={tabKey} key={tabKey}>
            {activeTab === tabKey && masonryComp}
          </div>
        )}
        {/* <Card.Group itemsPerRow={2}>
          {images.map((f, i) => {
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
        </Card.Group> */}
      </div>
    )
  }
}

export default Images
