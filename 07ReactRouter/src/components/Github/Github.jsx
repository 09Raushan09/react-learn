// import { useState } from "react"
// import { useEffect } from "react"
import { useLoaderData } from "react-router-dom"

function Github() {
    const data = useLoaderData()
    // const [data,setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/09Raushan09')
    //     .then(response => response.json())
    //     .then(data=> setData(data))
    // },[])
  return (
    <div className='text-center m-4 bg-gray-600 text-3xl text-white p-4'>
        Github Followers : {data.followers}
        <img src={data.avatar_url} alt="Git Picture" className="text-center  h-160 w-300 m-auto p-auto" />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () =>{
    const response = await fetch('https://api.github.com/users/09Raushan09')
    return response.json()
}