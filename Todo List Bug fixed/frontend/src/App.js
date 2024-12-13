import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Todos from "./components/Todos";
import CreateTodo from "./pages/CreateTodo";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import EditTodo from "./pages/EditTodo";
import ViewTodo from "./pages/ViewTodo";
import Logout from "./pages/Logout";

function App() {
  return (
    <>
        <Navbar />
        <Routes>
          <Route path="/create-todo" element={<CreateTodo />} />
          <Route path="/" element={<Todos />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/edit-todo/:id" element={<EditTodo />} />
          <Route path="/:id" element={<ViewTodo />} />
        </Routes>
    </>
  );
}

export default App;
