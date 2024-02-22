import {useState} from 'react'

function Color() {
    const [color,setColor] = useState("olive");
  return (
    <>
    <div className="w-full h-screen duration-200"
      style={{backgroundColor:color}}>
        <div className="fixed flex flex-wrap justify-content-center  bottom-12 insert-x-0 px-2 ml-16">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 roundered-3xl mx-auto">
            <button className="outline-none px-4 rounded-full " style={{backgroundColor:"red"}}
            onClick={()=> setColor("red")}>Red</button>
            <button className="outline-none px-4 rounded-full " style={{backgroundColor:"blue"}}
            onClick={()=> setColor("blue")}>Blue</button>
            <button className="outline-none px-4 rounded-full " style={{backgroundColor:"yellow"}}
            onClick={()=> setColor("yellow")}>yellow</button>
            <button className="outline-none px-4 rounded-full " style={{backgroundColor:"green"}}
            onClick={()=> setColor("green")}>Green</button>
            <button className="outline-none px-4 rounded-full " style={{backgroundColor:"orange"}}
            onClick={()=> setColor("orange")}>Orange</button>
            </div>
        </div>
      </div>
    </>
  )
}

export default Color