import './App.css'
import { Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing';
import Login from './pages/Login';
import { SignUp } from './pages/SignUp';

function App() {

  return (
    <>
      <Routes>
        <Route index element={<Landing/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='signup' element={<SignUp/>}/>
      </Routes>
    </>
  )
}

export default App
