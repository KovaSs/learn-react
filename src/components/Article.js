import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import CommentList from './CommentList'
import {deleteArticle} from '../AC'
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

  shouldComponentUpdate = (nextProps, nextState) => (
    nextProps.isOpen !== this.props.isOpen
  )

  render() {
    const {article, isOpen, toggleOpen} = this.props
    // console.log('---', 'update article')
    return (
      <div>
        <h3>{article.title}</h3>
        <button onClick={toggleOpen}>
          {isOpen ? 'close' : 'open'}
        </button>
        <button onClick={this.handleDeleteArticle}>Delete article</button>
          {this.getBody()}
      </div>
    )
  }

  handleDeleteArticle = () => {
    const {deleteArticle, article} = this.props
    deleteArticle(article.id)
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
        <i> Date: ({this.formatDate(new Date(article.date))})</i><br/>
        {article.text}
        <CommentList comments = {article.comments}/>
      </section>
    )
  }
}

export default connect(null, { deleteArticle })(Article)

