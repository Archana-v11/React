import React,{useEffect, useState} from 'react'

function HooksEx() {
    const[count,setCount]=useState(0)
    useEffect(()=>{
        document.title="Hi Archana";
        console.log({count})
    })
  return (
    <div>
    {count}
    <button onClick={()=>{setCount(count+1)}}>PlusOne</button>
    <button onClick={()=>{setCount(count-1)}}>MinusOne</button>
    <button onClick={()=>{setCount(count+5)}}>PlusFive</button>
    </div>
  )
}

export default HooksEx