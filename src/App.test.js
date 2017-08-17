import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

describe('<App />', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  it('should have a div with className="App"', () => {
    expect(wrapper.find('.App').length).toBe(1)
  })
})
