import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Home'
import Pets from './Pets'
import Header from '../components/Header'

const AppRouter = () => (
  <>
    <Header />
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/pets" exact component={Pets} />
    </Router>
  </>
)

export default AppRouter
