import {useContext} from "react";
import { TodoContext } from "../../context/TodoContext";


const Todo = ({id,title}) => {

    const {deleteTodo} = useContext(TodoContext)

    return(
        <li>
            <span>{title}</span>
            <button onclick={() =>deleteTodo(id)}>!</button>
        </li>
    )

}



export default Todo;