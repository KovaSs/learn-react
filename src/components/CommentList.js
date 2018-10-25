import React, { Component } from 'react'
import Comment from './Comment'

export class CommentList extends Component {
  static defaultProps = {
    comments: []
  }

  state = {
    isOpen: false
  }
  
  render() {
    const text = this.state.isOpen ? 'hide comments' : 'show comments'
    return (
      <div>
        <button onClick={this.toggleOpen}>{text}</button>
        {this.getBody()}
      </div>
    )
  }

  getBody = () => {
    if(!this.state.isOpen) return null
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

  toggleOpen = e => (
    this.setState({
      isOpen: !this.state.isOpen
    })
  )
}

export default CommentList
