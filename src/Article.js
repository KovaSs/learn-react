import React, { Component } from 'react'

export class Article extends Component {
  state = {
    isOpen: false
  }
  
  render() {
    const {article} = this.props
		const {isOpen} = this.state
    return (
      <div>
        <h3>{article.title}</h3>
        <button onClick={this.toggleOpen}>
          {isOpen ? 'close' : 'open'}
        </button>
        {this.getBody()}
      </div>
    )
  }

  getBody = () => {
		if(!this.state.isOpen) return null
    const {article} = this.props
    return <section>{article.text}</section>
  }
	
  toggleOpen = e => {
		e.preventDefault()
		console.log(e)
    this.setState({
      isOpen: !this.state.isOpen
		})
	}
}

export default Article

