import React, { Component } from 'react'
import { Header, Segment, Form } from 'semantic-ui-react'

class Story extends Component {
  render () {
    return (
      <div>
        <Header as='h1' dividing>
          Share a Story
        </Header>
        <Segment raised>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
            imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
            link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus
            elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo
            ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam
            lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus
            viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean
            imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper
            ultricies nisi.
          </p>
        </Segment>
        <Form>
          <Form.Group>
            <Form.Input label='First Name' placeholder='First Name' width={8} />
            <Form.Input label='Last Name' placeholder='Last Name' width={8} />
          </Form.Group>
          <Form.TextArea
            label='Your Story'
            placeholder='Detail your story here'
            width={16}
          />
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default Story
