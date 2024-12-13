import React from 'react'
import { Link} from 'react-router-dom'

const Navbar = () => {
  return (
<nav className='flex justify-between bg-blue-700 text-white py-2'>
    <div className="logo">
        <span className='font-bold text-xl mx-9'>Todo List</span>
    </div>
    <ul className='flex gap-8 mx-9'>
      <Link to='/'>Home</Link>
      <Link to='/create-todo'>Add Todo</Link>
      <Link to='/signup'>Sign Up</Link>
      <Link to='/login'>Login</Link>
      <Link to='/logout'>Logout</Link>
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