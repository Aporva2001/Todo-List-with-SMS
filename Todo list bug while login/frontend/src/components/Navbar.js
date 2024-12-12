import React, { useContext } from 'react'
import { Link, useNavigate} from 'react-router-dom'
import { AuthContext } from '../AuthContext'

const Navbar = () => {
  const navigate= useNavigate();
  const {token} = useContext(AuthContext)
  return (
<nav className='flex justify-between bg-blue-700 text-white py-2'>
    <div className="logo">
        <span className='font-bold text-xl mx-9'>Todo List</span>
    </div>
    <ul className='flex gap-8 mx-9'>
     {token ? (<Link to='/'>Home</Link>) : null}  
     {token ? (<Link to='/create-todo'>Add Todo</Link>) : null} 
     {!token ? (<Link to='/signup'>SignUp</Link>) : null} 
     {!token ? (<Link to='/login'>Login</Link>) : null} 
      {token ? (<Link to='/signup'>Logout</Link>) : null} 
        {/* <li>All Tasks</li>
        <li>Add a Task</li>
        <li>Login</li>
        <li>Logout</li>
        <li>Signup</li> */}

    </ul>
</nav>
  )
}

export default Navbar