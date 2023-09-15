// import { createContext, useReducer } from "react";

// export const AuthenticateContext = createContext();

// export const Reducer = (state, action) => {
//   switch (action.type) {
//     case "LOGIN":
//       return {
//         user: action.payload,
//       };
//     case "LOGUT":
//       return {
//         user: null,
//       };
//     default:
//       return state;
//   }
// };

// export const Authenticate = ({ children }) => {
//   const [state, dispatch] = useReducer(Reducer, {
//     user: null,
//   });

//   console.log("Authenticate State", state);
//   return (
//     <AuthenticateContext.Provider value={{ ...state, dispatch }}>
//       {children}
//     </AuthenticateContext.Provider>
//   );
// };
