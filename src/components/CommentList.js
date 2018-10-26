import React from 'react'
import PropTypes from 'prop-types'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'

const CommentList = ({comments = [], isOpen, toggleOpen}) => {
	const text = isOpen ? 'hide comments' : 'show comments'		
	return (
		<div>
			<button onClick={toggleOpen}>{text}</button>
			{getBody({comments, isOpen})}
		</div>
	)
}

CommentList.propTypes = {
	comments: PropTypes.array.isRequired,
	isOpen: PropTypes.bool.isRequired,
	toggleOpen: PropTypes.func.isRequired
}

const getBody = ({comments, isOpen}) => {
	if(!isOpen) return null
	if(!comments.length) return <p>No comment yet</p>
	const commentElement = comments.map(comment =>
		<li key={comment.id}><Comment comment={comment}/></li>)
	return (
		<ul>
			{commentElement}
		</ul>
	)
}


export default toggleOpen(CommentList)
