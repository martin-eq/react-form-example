import React, { Component } from 'react'
import PropTypes from 'prop-types'
import RequiredControl from 'required-control/RequiredControl'
import css from './Form.css'

class Form extends Component {
  validateForm (evt) {
    const controls = evt.target.elements
    let isFormValid = true
    let data = {}

    evt.preventDefault()

    // The "elements" property of the form is iterable but it's not an Array
    Array.prototype.forEach.call(controls, (control) => {
      if (control.type !== 'submit') {
        // Check if the required field is empty
        if (!control.value.trim()) {
          isFormValid = false

          // Trigger error message for this input
          control.dispatchEvent(new window.Event('blur'))
        }

        // Map each control to a value on the data object
        data[control.name] = control.value
      }
    })

    if (!isFormValid) return

    this.props.onFormSubmit(data)
  }

  render () {
    return (
      <form onSubmit={(e) => this.validateForm(e)}>
        <RequiredControl control='input' label='Name' name='name' />
        <RequiredControl control='input' label='Email' type='email' name='email' />
        <RequiredControl control='textarea' label='Feedback' name='feedback' />
        <button type='submit' className={css.submit}>Submit</button>
      </form>
    )
  }
}

Form.propTypes = {
  onFormSubmit: PropTypes.func.isRequired
}

export default Form
