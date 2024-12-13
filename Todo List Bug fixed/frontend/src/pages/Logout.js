import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
    localStorage.clear();
    const navigate= useNavigate()
    useEffect(()=>{
        navigate("/login");
    },[])
  return (
<>


</>
  )
}

export default Logout