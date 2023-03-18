import { useEffect, useReducer } from "react"
import { TodoReducer } from "../08-useReducer/TodoReducer";



const init = () => {
   return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodo = () => {
   const [todos, dispatchTodo] = useReducer(TodoReducer, [], init);

   useEffect(() => { // Se guarda en Localstorage cada vez que cambia el estado de los ToDos...
      localStorage.setItem('todos', JSON.stringify(todos));
   }, [todos]);

   const addNewTodo = (newTodoItem) => {
      const action = {
         type: 'Add Todo',
         payload: newTodoItem,
      }
      dispatchTodo(action);
   }

   const removeTodo = (idTodo) => {
      const action = {
         type: 'Borrar Todo',
         payload: idTodo,
      }
      dispatchTodo(action);
   }

   const tacharTodo = (idTodo) => {
      //console.log(idTodo);
      const action = {
         type: 'Tachar Todo',
         payload: idTodo,
      }
      dispatchTodo(action);
      console.log(todos);
   }

   return {
      todos,
      todosCount: todos.length,
      todosPending: todos.filter(todo => !todo.done).length,
      addNewTodo,
      removeTodo,
      tacharTodo
   }
}
