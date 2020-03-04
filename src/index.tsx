import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import Provider from './context/Provider'
import reducers from './reducers'

const Main = () => (
  <Provider reducer={reducers}>
    <App />
  </Provider>
)

ReactDOM.render(<Main />, document.getElementById('root'))

serviceWorker.unregister()
