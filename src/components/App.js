import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ArticleList from './ArticleList'
import UserForm from './UserForm';

export class App extends Component {
  static propTypes = {
    articles: PropTypes.array.isRequired
  }

  render() {
    const {articles} = this.props
    return (
      <div>
        <UserForm/>
        <ArticleList articles = {articles} />
      </div>
    )
  }
}

export default App
