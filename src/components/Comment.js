import React from 'react'

const Comment = ({comment}) => (
  <div>
    <div><b>{comment.user}</b></div>
    <div>{comment.text}</div>
  </div>
)

export default Comment
