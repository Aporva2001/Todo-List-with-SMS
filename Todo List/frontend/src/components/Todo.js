import axios from 'axios'
import React from 'react'
import { Route } from 'react-router-dom'
import Todos from './Todos'

const Todo = ({ title, onEdit, onView, status, todoId, deleteTodo,updateTodo,viewTodo }) => {
  return (
<div className="flex items-center justify-between bg-blue-700 shadow-md rounded-md p-4 mb-4 w-1/2 m-auto my-5">
      {/* Todo Details */}
      <div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        {/* <p className="text-sm text-gray-600">{description}</p> */}
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-2">
        <button
          onClick={() => viewTodo(todoId)}
          className="px-3 py-1 bg-blue-500 text-white text-sm rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-300"
        >
          View
        </button>
        <button
          onClick={()=> updateTodo(todoId)}
          className="px-3 py-1 bg-yellow-500 text-white text-sm rounded-md hover:bg-yellow-600 focus:ring-2 focus:ring-yellow-300"
        >
          Edit
        </button>
        <button
          onClick={() => deleteTodo(todoId)}
          className="px-3 py-1 bg-red-500 text-white text-sm rounded-md hover:bg-red-600 focus:ring-2 focus:ring-red-300"
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default Todo