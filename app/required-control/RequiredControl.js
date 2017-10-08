import React, { Component } from 'react'
import PropTypes from 'prop-types'
import css from './RequiredControl.css'

class RequiredControl extends Component {
  constructor (props) {
    super(props)

    this.state = {
      value: '',
      validated: false
    }
  }

  setValue (evt) {
    const { value } = evt.target

    this.setState({ value })
  }

  validate () {
    this.setState({
      validated: true
    })
  }

  render () {
    const { label, name, type, control: Control } = this.props
    const { value, validated } = this.state

    return (
      <div>
        { label && <label className={css.label}>{label}</label> }
        <Control name={name} type={type} onChange={(e) => this.validateControl(e)} />
        {
          (validated && !value.trim()) &&
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
