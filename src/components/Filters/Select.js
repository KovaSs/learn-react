import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Select } from 'antd';
import { connect } from 'react-redux'
import { changeSelection } from '../../AC'
import 'antd/dist/antd.css'; 

class SelectFilter extends Component {
  static propTypes = {
    articles: PropTypes.array.isRequired
  }

  handleChange = selected => this.props.changeSelection(selected.map(option => option.value))

  render() {
    const { articles, selected } = this.props
    const Option = Select.Option
    const children = articles.map(article =>
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
export default connect(state => ({
  selected: state.filters.selected,
  articles: state.articles
}), { changeSelection })(SelectFilter)