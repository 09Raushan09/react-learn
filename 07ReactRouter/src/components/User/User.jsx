import { useParams } from "react-router-dom"


function User() {
    const {userid} = useParams()

  return (
    <div className="bg-gray-600 text-white text-3xl p-4 m-auto">User : {userid}</div>
  )
}

export default User