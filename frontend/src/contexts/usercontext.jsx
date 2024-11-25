// import React, { createContext, useState } from "react";

// export const AuthParam = createContext({
//   user: [],
//   register: () => {},
//   login: () => {},
//   logout: () => {},
//   setUser: [],
// });

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState({
//     name: "",
//     email: "",
//     phoneNo: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUser({ ...user, [name]: value });
//   };

//   const register = () => {};

//   const login = () => {
//     console.log("user log in data", user);
//     alert("login Successful!");
//     setUser({
//       email: "",
//       password: "",
//     });
//   };

//   const logout = () => {};
//   return (
//     <AuthParam.Provider
//       value={{
//         user,
//         handleChange,
//         register,
//         login,
//         logout,
//       }}
//     >
//       {children}
//     </AuthParam.Provider>
//   );
// };
