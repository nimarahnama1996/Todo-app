import {useContext , useState} from "react";
import { TodoContext } from "../../context/TodoContext";


const AddTodo = () => {

    const [inputText, setInputText] = useState('');
    const {addTodo,clearTodos} =useContext(TodoContext);

    return(
        <form
        className='form'
        onSubmit={(event) =>{
         event.preventDefault();
         addTodo(inputText);
         setInputText('')
         }}
        >
            <input
            value={inputText}
            type='text'
            placeholder='Add Todo...'
            onChange={(event) => setInputText(event.target.value)}
            />

            <div>
            <button type='submit'>Add Todo</button>
            <button onclick={clearTodos}>Delete</button>
            </div>
        </form>
    );

};



export default AddTodo;