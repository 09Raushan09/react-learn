import { useContext } from 'react'
import Usercontext from '../context/Usercontext'

function Profile() {
    const {user} = useContext(Usercontext)

    if(!user) return <>Please login</>

    return <> Welcome {user.username} </>
}

export default Profile