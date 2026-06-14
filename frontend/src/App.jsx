import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import CreateRequest from './pages/CreateRequest'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/create-request' element={<CreateRequest />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
