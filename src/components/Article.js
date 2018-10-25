import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CommentList from './CommentList'

export class Article extends Component {
  static propTypes = {
    article: PropTypes.object.isRequired
  }

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

  formatDate = date => {
    let dd = date.getDate()
    if (dd < 10) dd = `0${dd}`
    let mm = date.getMonth() + 1
    if (mm < 10) mm = `0${mm}`
    let yy = date.getFullYear() % 100
    if (yy < 10) yy = `0${yy}`
    return `${dd}.${mm}.${yy}`
  }

  getBody = () => {
		if(!this.state.isOpen) return null
    const {article} = this.props
    return (
      <section>
        <i> Дата: ({this.formatDate(new Date(article.date))})</i><br/>
        {article.text}
        <CommentList comments = {article.comments}/>
      </section>
    )
  }
	
  toggleOpen = e => {
		e.preventDefault()
    this.setState({
      isOpen: !this.state.isOpen
		})
	}
}

export default Article

