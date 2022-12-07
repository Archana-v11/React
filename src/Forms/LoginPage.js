import React, { useState } from 'react'

function LoginPage() 
{
  const[Username,setUsername]=useState('');
  const[Password,setPassword]=useState('');
  const formHandler=(event)=>
  {
     const loginobj={
      name:Username,
      pwd:Password
     }
     console.log(loginobj);
     alert(JSON.stringify(loginobj));
  }
  return (
    <div>
    <h2>Login page</h2>
    <form onSubmit={formHandler}>
    Username : <input type="text" value={Username} placeholder="Username" onChange={(e)=>setUsername(e.target.value)}/><br/>
    Password : <input type="password" value={Password} placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/><br/>
    <button type="submit">Login</button>
    </form>
    </div>
  )
}

export default LoginPage
