import { useContext, useEffect } from "react";
import { TodoContext } from "./context/TodoContext";


import './App.css';
import AddTodo from './components/AddTodo/AddTodo';
import Header from './components/Header/Header'
import TodoList from './components/TodoList/TodoList'


function App() {
  const  { todos } = useContext(TodoContext);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return(
    <div>
      <Header/>
      <AddTodo/>
      <TodoList/>
    </div>
  )


}

export default App;
