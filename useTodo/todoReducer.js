
export const TodoReducer = (initialState = [], action = {}) => {
   /*
   initialState=[
      {
         id:xx,
         desc:'xxx',
         done:true/false
      }
   ]
   */

   switch (action.type) {
      case 'Add Todo':
         //console.log(action);
         return [...initialState, action.payload];
      case 'Tachar Todo':
         return initialState.map(todo => {
            if (todo.id === action.payload) {
               return {
                  ...todo,
                  done: !todo.done,
               }
            }
            return todo;
         });
      case 'Borrar Todo':
         return initialState.filter(todo => todo.id != action.payload);
      default:
         return initialState;

   }

}
