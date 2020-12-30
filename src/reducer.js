export const initialState = {
   user: null,
};

const reducer = (state, action) => {
   //console.log(action);

   // Action -> type, [payload]
   switch (action.type) {
      case "SET_USER":
         return { ...state, user: action.user };
   }
};

export default reducer;
