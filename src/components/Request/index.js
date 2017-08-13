import React, { Component } from 'react'
import { Header, Segment, Form } from 'semantic-ui-react'
import DatePicker from 'react-datepicker'
import '../../../node_modules/react-datepicker/dist/react-datepicker.css'

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' }
]

class Request extends Component {
  constructor (props) {
    super(props)
    this.state = {
      startDate: '',
      file: ''
    }
  }

  handleChange = date => {
    this.setState({
      startDate: date
    })
  }

  handleFileInputClick = () => {
    this.fileUpload.click()
  }

  handleFilePath = () => {
    let file = document.getElementById('upload').files
    if (file.length === 0) {
      this.setState({
        file: null
      })
    } else {
      this.setState({
        file: file[0].name
      })
    }
  }

  render () {
    const { value } = this.state
    let fileValue = this.state.file || 'Select a file to upload'
    return (
      <div>
        <Header as='h1' dividing>
          Submit a Request
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
          <Form.Group widths='equal'>
            <Form.Input label='First name' placeholder='First name' />
            <Form.Input label='Last name' placeholder='Last name' />
            <Form.Select
              label='Gender'
              options={options}
              placeholder='Gender'
            />
          </Form.Group>

          <Form.Group widths='3'>
            <Form.Group grouped>
              <label>Size</label>
              <Form.Radio
                label='Small'
                value='sm'
                checked={value === 'sm'}
                onChange={this.handleChange}
              />
              <Form.Radio
                label='Medium'
                value='md'
                checked={value === 'md'}
                onChange={this.handleChange}
              />
              <Form.Radio
                label='Large'
                value='lg'
                checked={value === 'lg'}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Field
              label='Date'
              control={DatePicker}
              dateFormat='Do MMM YYYY'
              selected={this.state.startDate}
              onChange={this.handleChange}
              placeholderText='Click to select a date'
              showYearDropdown
              dateFormatCalendar='MMMM'
              scrollableYearDropdown
              yearDropdownItemNumber={15}
            />
            <Form.Field>
              <label>Related Files</label>
              <input
                type='text'
                readOnly
                value={fileValue}
                onClick={this.handleFileInputClick}
              />
              <Form.Field>
                <input
                  id='upload'
                  type='file'
                  style={{ display: 'none' }}
                  ref={input => {
                    this.fileUpload = input
                  }}
                  onChange={this.handleFilePath}
                />
              </Form.Field>
            </Form.Field>
          </Form.Group>

          <Form.TextArea
            label='About'
            placeholder='Tell us more about you...'
          />
          <Form.Checkbox label='I agree to the Terms and Conditions' />
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default Request
