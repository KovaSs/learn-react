import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import App from './components/App'
import {articles} from './fixtures'
import store from './store'


render(
  <Provider store={store}>
    <App articles = {articles}/>
  </Provider>
, document.querySelector('#container'))