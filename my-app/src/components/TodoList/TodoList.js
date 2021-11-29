import {useContext} from "react";
import { TodoContext } from "../../context/TodoContext";
import Todo from "../Todo/Todo";



const TodoList = () => {
  
    const {todos} = useContext(TodoContext)

    return (
        <div>
          {todos.length ? (
            <ul className="list">
              {todos?.map(({ id, title }) => (
                <Todo key={id} title={title} id={id} />
              ))}
            </ul>
          ) : (
            <div className="no-todos">No Todos</div>
          )}
        </div>
      );
    };


export default TodoList;