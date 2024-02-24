import './App.css'
import UsercontextProvider from './context/UsercontextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {

  return (
    <UsercontextProvider >
      <Login />
      <Profile />
    </UsercontextProvider>
  )
}

export default App
