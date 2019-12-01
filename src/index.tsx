import express from 'express'
import * as path from 'path'
import * as React from 'react'
import * as ReactDOMServer from 'react-dom/server'
import App from './public/components/App'
import { StaticRouter as Router } from 'react-router-dom'
import * as dotenv from 'dotenv'
import { fetch } from './models/survey'

const app = express()

app.use('/static', express.static(path.resolve(__dirname, 'public')))
dotenv.config({ path: './.env' })

app.get('/*', async (req, res) => {
  const context: {url?: string} = {}
  const surveys = req.params['0'] ? [] : await fetch()

  const component = ReactDOMServer.renderToString(
    <Router location={req.url} context={context}>
      <App surveys={surveys} />
    </Router>
  )

  const html = `
  <!doctype html>
    <html>
    <head>
      <script>window.__INITIAL__DATA__ = ${JSON.stringify({ surveys })}</script>
    </head>
    <body bgcolor="lavender">
    <div id="root">${component}</div>
    <script src="/static/home.js"></script>
  </body>
  </html>`

  if (context.url) {
    res.writeHead(301, { Location: context.url })
    res.end()
  } else {
    res.send(html)
  }
})

app.listen(3000)