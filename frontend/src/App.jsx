import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Register from './components/Register'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Login from './components/Login'
import ProtectedRoute from './ProtectedRoute'
import Dashboard from './components/Dashboard'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Navigate to='/login'/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>

          <Route element={<ProtectedRoute/>}>
            <Route path='/dashboard' element={<Dashboard/>}/>
          </Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App
