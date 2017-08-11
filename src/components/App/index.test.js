import React from 'react'
import { shallow } from 'enzyme'
import { Container } from 'semantic-ui-react'
import App from './'

describe('<App />', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  it('should have a div with className="App"', () => {
    expect(
      wrapper.contains(
        <Container className='App-content' style={{ marginTop: '9em' }} />
      )
    ).toBe(true)
  })
})
