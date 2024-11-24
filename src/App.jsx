import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Introduce from './pages/introduce/Introduce'
import Quiz from './pages/quiz/Quiz'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Introduce />} />
          <Route path='/quiz/:difficulty/:category/:amount' element={<Quiz />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
