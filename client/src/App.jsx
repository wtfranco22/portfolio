import { Route, Routes } from 'react-router-dom'
import './App.css'
import Nav from './components/nav/Nav'
import Home from './pages/Home'

function App() {
  return (
    <div className='app'> 
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<div>404 Not Found</div>}/>
      </Routes>
    </div>
  )
}

export default App
