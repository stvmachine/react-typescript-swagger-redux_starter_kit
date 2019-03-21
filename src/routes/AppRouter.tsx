import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Home'
import Header from '../components/Header'

const AppRouter = () => (
  <>
    <Header />
    <Router>
      <Route path="/" exact component={Home} />
    </Router>
  </>
)

export default AppRouter
