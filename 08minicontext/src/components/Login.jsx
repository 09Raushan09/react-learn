import { useState } from 'react'
import Usercontext from '../context/Usercontext'
import { useContext } from 'react'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(Usercontext)

    const handleSubmit = (e) =>{
        e.preventDefault()
        setUser({username, password})
    }
  return (
    <div>
        <h2>Login</h2>
        <input type="text" placeholder="Enter username" 
        value={username}
        onChange={(e)=> setUsername(e.target.value)} />
        <input type="text" placeholder='Enter password' 
        value={password}
        onChange={(e)=> setPassword(e.target.value)} />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login