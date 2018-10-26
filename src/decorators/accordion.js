import React, { Component } from 'react'

export default Component => class Accordion extends Component {

  state = {
    openItemId: null
  }

  render() {
    return (
      <Component 
        {...this.props}
        openItemId = {this.state.openItemId}
        toggleOpenItem = {this.toggleOpenItem}
      />
    )
  }

  // Каррирование
  toggleOpenItem = openItemId => ev => {
    this.setState({
      openItemId: openItemId === this.state.openItemId ? null : openItemId
    })
  }
}
