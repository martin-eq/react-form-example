import React, { Component } from 'react'
import PropTypes from 'prop-types'
import RequiredControl from 'required-control/RequiredControl'
import css from './Form.css'

class Form extends Component {
  constructor (props) {
    super(props)

    this.controls = []
  }

  validateForm (evt) {
    let isFormValid = true
    let data = {}

    evt.preventDefault()

    this.controls.forEach((control) => {
      // Check if the required field is empty
      if (!control.state.value.trim()) {
        isFormValid = false

        // Trigger error message for this input
        control.validate()
      }

      // Map each control to a value on the data object
      data[control.name] = control.value
    })

    if (!isFormValid) return

    this.props.onFormSubmit(data)
  }

  render () {
    return (
      <form onSubmit={(e) => this.validateForm(e)}>
        <RequiredControl control='input' label='Name' name='name' ref={(c) => this.controls.push(c)} />
        <RequiredControl control='input' label='Email' type='email' name='email' ref={(c) => this.controls.push(c)} />
        <RequiredControl control='textarea' label='Feedback' name='feedback' ref={(c) => this.controls.push(c)} />
        <button type='submit' className={css.submit}>Submit</button>
      </form>
    )
  }
}

Form.propTypes = {
  onFormSubmit: PropTypes.func.isRequired
}

export default Form
