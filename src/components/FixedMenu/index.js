import React from 'react'
import { Container, Image, Menu } from 'semantic-ui-react'
import MenuItem from '../MenuItem'
import logo from '../../logo.svg'

const links = [
  { isExact: true, linkTo: '/', text: 'Home' },
  { isExact: true, linkTo: '/projects', text: 'Projects' },
  { isExact: true, linkTo: '/tasks', text: 'Open Tasks' },
  { isExact: true, linkTo: '/images', text: 'Images' },
  { isExact: true, linkTo: '/letter-templates', text: 'Letter Templates' },
  { isExact: true, linkTo: '/submit-request', text: 'Request' },
  { isExact: true, linkTo: '/tutorial', text: 'Tutorial' }
]

const FixedMenu = () =>
  <Menu fixed='top' inverted>
    <Container>
      <Menu.Item header>
        <Image
          size='tiny'
          src={logo}
          style={{ marginRight: '1.5em' }}
          className='App-logo'
        />
        QW Resource Centre
      </Menu.Item>
      {links.map((link, i) => {
        return (
          <MenuItem
            isExact={link.isExact}
            linkTo={link.linkTo}
            text={link.text}
            key={i}
          />
        )
      })}
    </Container>
  </Menu>

export default FixedMenu
