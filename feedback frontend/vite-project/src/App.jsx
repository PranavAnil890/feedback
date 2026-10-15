import React from 'react'
import Navbar from './components/Navbar'
import {Routes,Route} from  'react-router-dom'
import AddFeedback from './components/AddFeedback'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path = '/' element={<AddFeedback/>}/>
        
      </Routes>
    </div>
  )
}

export default App
