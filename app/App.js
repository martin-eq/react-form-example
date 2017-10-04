import React, { Component } from 'react'
import Form from 'form/Form'
import axios from 'axios'

class App extends Component {
  onFormSubmit (data) {
    debugger
    axios.post('/api/feedback', data)
    .then(() => console.log('Successful response'))
    .catch((err) => console.error(err))
  }

  render () {
    return <Form onFormSubmit={this.onFormSubmit} />
  }
}

export default App
