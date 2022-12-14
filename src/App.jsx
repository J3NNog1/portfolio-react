import './App.css';
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Projects from './pages/Projects'
import ProjectDetails from './pages/ProjectDetails'
import Resume from './pages/Resume'

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route 
          path='/about' 
          element={<About />} 
        />
        <Route 
          path='/contact'
          element={<Contact />}
        />
        <Route 
          path='/home'
          element={<Home />}
        />
        <Route 
          path='/projects'
          element={<Projects />}
        />
        <Route 
          path='/resume'
          element={<Resume />}
        />
        <Route 
        path='projects/:projectDetails' 
        element={<ProjectDetails />} 
        />
      </Routes>
    </>
  )
}

export default App
