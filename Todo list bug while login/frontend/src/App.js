import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Todos from './components/Todos';
import CreateTodo from './pages/CreateTodo';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import EditTodo from './pages/EditTodo';
import ViewTodo from './pages/ViewTodo';
import { useContext } from 'react';
import { AuthContext } from './AuthContext';
import Logout from './pages/Logout';


function App() {
  const {token} = useContext(AuthContext)
  return (
    <>
  <Navbar />
    <Routes>
      {(token) ? (    <>
      <Route path='/create-todo' element={<CreateTodo />} />
    <Route path='/' element={<Todos/>} />
    <Route path='/logout' element = {<Logout />} />
    <Route path='/edit-todo/:id' element= {<EditTodo />}/>
    <Route path='/:id' element = {<ViewTodo />}/>
    </>
    ) : (
<>
      <Route path='/signup' element = {<SignUp />} />
      <Route path='/login' element = {<Login />} />
      </>
      )}


    </Routes>
    </>

  );
}

export default App;
