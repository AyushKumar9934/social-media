import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import AllUser from './AllUser'

import Header from './Header'
import "./App.css"
import ParticularCard from './ParticularCard'

const App = () => {
  return (
    <>
  <Header />
  <Router>
    <Routes>
      <Route path='/' element={<AllUser />}/>


      <Route path='/item/:id' element={<ParticularCard />}/>
    </Routes>
  </Router>
  </>
  )
}

export default App