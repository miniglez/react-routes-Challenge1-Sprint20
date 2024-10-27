import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Routes/Home.jsx'
import Projects from './Routes/Projects.jsx'
import ProjectDetail from "./Routes/ProjectDetail.jsx"
import Resume from './Routes/Resume.jsx'
import './App.css'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path='/'
            element={<Home />}></Route>
          <Route
            path='/projects'
            element={<Projects />}></Route>
          <Route
            path='/resume'
            element={<Resume />}></Route>
          <Route
            path='/projects/:id'
            element={<ProjectDetail />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
