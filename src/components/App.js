import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ArticleList from './ArticleList'
import UserForm from './UserForm';
// import Select from './Select';
import { Select } from 'antd';
import 'antd/dist/antd.css'; 

export class App extends Component {
  static propTypes = {
    articles: PropTypes.array.isRequired
  }

  state = {
    selection: []
  }

  render() {
    const {articles} = this.props
    const Option = Select.Option;

    const children = this.props.articles.map(article =>
      <Option key={article.id}>{article.title}</Option>);
    return (
      <div>
        <UserForm/>
        <Select
          mode = "multiple"
          style = {{ width: '20%' }}
          placeholder = "Please select"
          onChange = {this.handleChange}
          value = {this.state.selection}
        >
          {children}
        </Select>
        <ArticleList articles = {articles} />
      </div>
    )
  }

  handleChange = selection => {
    this.setState({ selection })
  }
}

export default App
