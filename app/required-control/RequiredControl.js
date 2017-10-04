import React, { Component } from 'react'
import PropTypes from 'prop-types'
import css from './RequiredControl.css'

class RequiredControl extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isValid: true
    }
  }

  validateControl (evt) {
    const { value } = evt.target

    this.setState({
      isValid: !!value.trim()
    })
  }

  render () {
    const { label, name, type, control: Control } = this.props
    const { isValid } = this.state

    return (
      <div>
        { label && <label className={css.label}>{label}</label> }
        <Control name={name} type={type} onBlur={(e) => this.validateControl(e)} />
        {
          !isValid &&
          <div className={css.errorMsg}>This field is Required</div>
        }
      </div>
    )
  }
}

RequiredControl.propTypes = {
  control: PropTypes.string.isRequired,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string
}

export default RequiredControl
