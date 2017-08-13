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
      file: {},
      firstName: '',
      lastName: '',
      gender: '',
      size: '',
      date: '',
      desc: '',
      accept: false
    }
  }

  handleDateChange = date => {
    this.setState({
      date: date
    })
  }

  handleFileInputClick = () => {
    this.fileUpload.click()
  }

  handleFilePath = () => {
    let file = this.fileUpload.files

    if (file.length === 0) {
      this.setState({
        file: null
      })
    } else {
      this.setState({
        file: file[0]
      })
    }
  }

  handleInputChange = (e, data) => {
    let value
    let name = data.name

    if (data.type === 'checkbox') {
      value = data.checked
    } else if (data.type === 'text' || data.type === undefined) {
      value = data.value
    } else if (data.type === 'radio') {
      value = data.value
    }

    this.setState({
      [name]: value
    })
  }

  handleFormData = e => {
    e.preventDefault()
    let data = new FormData()

    for (const [key, value] of Object.entries(this.state)) {
      data.append(key, value)
    }

    fetch('/uploads', { method: 'post', body: data }).then(res => {
      console.log('done')
    })
  }

  render () {
    let fileValue = this.state.file.name || 'Select a file to upload'
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

        <Form onSubmit={this.handleFormData}>
          <Form.Group widths='equal'>
            <Form.Input
              label='First name'
              placeholder='First name'
              value={this.state.firstName}
              onChange={this.handleInputChange}
              name='firstName'
            />
            <Form.Input
              label='Last name'
              placeholder='Last name'
              value={this.state.lastName}
              onChange={this.handleInputChange}
              name='lastName'
            />
            <Form.Select
              value={this.state.gender}
              label='Gender'
              options={options}
              placeholder='Gender'
              name='gender'
              onChange={this.handleInputChange}
            />
          </Form.Group>

          <Form.Group widths='3'>
            <Form.Group grouped>
              <label>Size</label>
              <Form.Radio
                label='Small'
                value='sm'
                checked={this.state.size === 'sm'}
                onChange={this.handleInputChange}
                name='size'
              />
              <Form.Radio
                label='Medium'
                value='md'
                checked={this.state.size === 'md'}
                onChange={this.handleInputChange}
                name='size'
              />
              <Form.Radio
                label='Large'
                value='lg'
                checked={this.state.size === 'lg'}
                onChange={this.handleInputChange}
                name='size'
              />
            </Form.Group>
            <Form.Field
              label='Date'
              control={DatePicker}
              dateFormat='Do MMM YYYY'
              selected={this.state.date}
              onChange={this.handleDateChange}
              placeholderText='Click to select a date'
              showYearDropdown
              dateFormatCalendar='MMMM'
              scrollableYearDropdown
              yearDropdownItemNumber={15}
              value={this.state.date}
            />

            <Form.Group>
              <Form.Field>
                <label>Related Files</label>
                <input
                  type='text'
                  readOnly
                  value={fileValue}
                  onClick={this.handleFileInputClick}
                />
              </Form.Field>
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
            </Form.Group>
          </Form.Group>

          <Form.TextArea
            label='About'
            placeholder='Tell us more about you...'
            name='desc'
            value={this.state.desc}
            onChange={this.handleInputChange}
          />
          <Form.Checkbox
            label='I agree to the Terms and Conditions'
            name='accept'
            checked={this.state.accept}
            onChange={this.handleInputChange}
          />
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default Request
