import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './components/App'
import { BrowserRouter as Router } from 'react-router-dom'

interface Survey {
  name: string
  url: string
}

declare global {
  interface Window { 
    __INITIAL__DATA__: {
      surveys: Survey[]
    }
  }
}

const HomeWithRouter = () => (
  <Router>
    <App surveys={window.__INITIAL__DATA__.surveys} />
  </Router>
) 

ReactDOM.hydrate(
  <HomeWithRouter />,
  document.getElementById('root')
)