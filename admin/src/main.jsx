import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { App } from './App'
import { Admin } from './pages/admin/admin'
import Analis from './pages/Analis/Analis'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/admin" element={<Admin />} />
        <Route path='/analis' element={<Analis />} />
      </Routes>
  </BrowserRouter>
)
