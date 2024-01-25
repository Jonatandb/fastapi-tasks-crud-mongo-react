import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<h1>Home</h1>} />
        <Route path='/new' element={<h1>New Task Page</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
