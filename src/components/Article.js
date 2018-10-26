import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CommentList from './CommentList'
import toggleOpen from '../decorators/toggleOpen'

class Article extends Component {
  
  static propTypes = {
    article: PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string,
      title: PropTypes.string.isRequired
    }).isRequired,
    isOpen: PropTypes.bool.isRequired,
    toggleOpen: PropTypes.func.isRequired
  }

  render() {
    const {article, isOpen, toggleOpen} = this.props
    return (
      <div>
        <h3>{article.title}</h3>
        <button onClick={toggleOpen}>
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
    const {article, isOpen} = this.props
    if(!isOpen) return null
    return (
      <section>
        <i> Дата: ({this.formatDate(new Date(article.date))})</i><br/>
        {article.text}
        <CommentList comments = {article.comments}/>
      </section>
    )
  }
}

export default Article

