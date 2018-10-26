import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class UserForm extends Component {
  static propTypes = {

  }

  state = {
    username: ''
  }  

  render() {
    console.log('---', 'update')
    const {username} = this.state
    return (
      <div>
        Name: 
        <input type='text'
          value = {username}
          onChange = {this.handleUserChange}
        />
      </div>
    )
  }

  
  handleUserChange = e => (
    this.setState({
      username: e.target.value
    })
  )
}

export default UserForm
