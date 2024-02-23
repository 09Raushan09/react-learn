import { useState } from 'react'
import './App.css'
import UsercontextProvider from './context/UsercontextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UsercontextProvider >
      <Login />
      <Profile />
    </UsercontextProvider>
  )
}

export default App
