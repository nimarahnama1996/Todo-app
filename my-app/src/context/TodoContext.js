import { createContext, useState} from "react";
import { v4 as uuid } from "uuid";

export const TodoContext = createContext();


const TodoContextProvider = ({children}) =>{
const [todos, setTodos] = useState('')

const addTodo =(title) => {
    setTodos([...todos, {id:uuid(), title}])
};

const deleteTodo = (id) => {
    setTodos(todos.filter((todo) =>todo.id !==id));
};

const clearTodos = () => {
    setTodos([]);
};

return(
    <TodoContext.Provider value={{todos,addTodo,deleteTodo,clearTodos}}>
        {children}
    </TodoContext.Provider>
);

};


export default TodoContextProvider;

