import {combineReducers} from 'redux'
import counterReducer from './counter'
import filters from './filters'
import comments from './comments'
import articles from './articles'

export default  combineReducers({
  count: counterReducer,
  articles, comments, filters
})