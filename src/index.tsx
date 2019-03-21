import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import { myTheme } from './theme'
import { ThemeProvider } from './theme/styled'
import AppRouter from './routes/AppRouter'

ReactDOM.render(
  <ThemeProvider theme={myTheme}>
    <AppRouter />
  </ThemeProvider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
