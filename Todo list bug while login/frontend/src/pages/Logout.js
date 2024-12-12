import React, { useContext } from 'react'
import { AuthContext } from '../AuthContext'
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const {setToken} = useContext(AuthContext)
    setToken(null);
    const navigate= useNavigate()
  return (
    <>
    {navigate("/signup")}
    </>
  )
}

export default Logout