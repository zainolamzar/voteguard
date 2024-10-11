import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './login/Login'
import Register from './register/Register'
import Dashboard from './dashboard/Dashboard'

function App() {

  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </>
  )
}

export default App
