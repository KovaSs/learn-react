import {createStore} from 'redux'
import reducer from '../reducer'


const devToolsCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
const enhancer = devToolsCompose()

const store = createStore(reducer, enhancer)

window.store = store

export default store