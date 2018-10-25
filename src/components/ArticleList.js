import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Article from './Article'

export default class ArticleList extends Component {
  static propTypes = {
    articles: PropTypes.array.isRequired
  }

  state = {
    openArticleId: null
  }

  render() {
    const {articles} = this.props
    const articleElements = articles.map(article => 
      <li key={article.id}>
        <Article 
          article  = {article}
          isOpen = {article.id === this.state.openArticleId}
          toggleOpen = {this.toggleOpenArticle(article.id)}
        /></li>)
    return (
      <ul>
        {articleElements}
      </ul>
    )
  }

  // Каррирование
  toggleOpenArticle = openArticleId => ev => {
    this.setState({
      openArticleId
    })
  }
}