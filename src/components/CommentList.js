import React, { Component } from 'react'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'

export class CommentList extends Component {
  static defaultProps = {
    comments: []
  }

  render() {
    const text = this.props.isOpen ? 'hide comments' : 'show comments'
    return (
      <div>
        <button onClick={this.props.toggleOpen}>{text}</button>
        {this.getBody()}
      </div>
    )
  }

  getBody = () => {
    if(!this.props.isOpen) return null
    const {comments} = this.props
    if(!comments.length) return <p>No comment yet</p>
    const commentElement = comments.map(comment =>
      <li key={comment.id}><Comment comment={comment}/></li>)
    return (
      <ul>
        {commentElement}
      </ul>
    )
  }
}

export default toggleOpen(CommentList)
