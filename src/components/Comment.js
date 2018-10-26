import React from 'react'
import PropTypes from 'prop-types'

const Comment = ({comment}) => (
  <div>
    <div><b>{comment.user}</b></div>
    <div>{comment.text}</div>
  </div>
)

Comment.propTypes = {
  comment: PropTypes.shape({
    text: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired
  })
}

export default Comment
