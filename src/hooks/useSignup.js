// import { useState } from "react";
// import { useLoginAuth } from "./useAuthenticate";

// export const useSignup = () => {
//   const [error, setError] = useState(null);
//   const [isloading, setIsloading] = useState(false);

//   const { dispatch } = useLoginAuth();

//   const signup = async (email, password, username) => {
//     const response = await fetch("/api/users/userSignup", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ email, password, username }),
//     });

//     const json = response.json();

//     if (!response.ok) {
//       setError(error.json());
//       setIsloading(true);
//     }

//     if (response.ok) {
//       dispatch({ type: "LOGIN", payload: json });
//     }
//   };
//   return { signup, error, isloading };
// };
