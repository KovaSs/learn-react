import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Select } from 'antd';
import 'antd/dist/antd.css'; 

class SelectFilter extends Component {
  state = {
      selected: []
  }

  static propTypes = {
      articles: PropTypes.array.isRequired
  }

  handleChange = selected => this.setState({selected})

  render() {
    const { selected } = this.state
    const { articles } = this.props

    const Option = Select.Option
    const children = this.props.articles.map(article =>
      <Option key={article.id}>{article.title}</Option>)

    return (
    <Select
      mode = "multiple"
      style = {{ width: '17%' }}
      placeholder = "Please select"
      onChange = {this.handleChange}
      value = {selected}
    >
      {children}
    </Select>
    )
  }
}
export default SelectFilter