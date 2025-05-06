import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { App } from './App'
import { Admin } from './pages/admin/admin'
import Analis from './pages/Analis/Analis'
import Manager from './pages/Manager/Manager'
import User from './pages/User/User'
import AddWorker from './pages/addWorker/addWorker'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/admin" element={<Admin />} />
        <Route path='/analis' element={<Analis />} />
        <Route path='/manager' element={<Manager />} />
        <Route path='/user' element={<User />} />
        <Route path='/addworker' element={<AddWorker />} />
      </Routes>
  </BrowserRouter>
)
