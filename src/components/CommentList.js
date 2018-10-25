import React from 'react'
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
