import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../contexts/authContext";
import toast from "react-hot-toast";
function LoginForm() {
  const { login } = useAuth();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(user);
  };

  return (
    <div className="flex flex-col h-screen  items-center w-full p-4">
      <form
        className="flex flex-col h-96 w-2/6 bg-white p-5 mt-9 rounded-lg shadow-lg "
        onSubmit={handleSubmit}
      >
        <h1 className="text-center text-lime-600 font-bold text-2xl p-3 ">
          Sign in
        </h1>
        <input
          className="block w-full p-3 mb-4  rounded outline outline-lime-400  focus:border-lime-400"
          name="email"
          value={user.email}
          type="text"
          placeholder="Email"
          onChange={handleChange}
        />

        <input
          className="block w-full p-3 mb-4  rounded outline outline-lime-400 focus:border-lime-400"
          name="password"
          type="text"
          placeholder="Password"
          value={user.password}
          onChange={handleChange}
        />

        <button
          type="submit"
          className="font-medium text-white bg-lime-600 p-3 block mb-2  rounded outline outline-lime-300  focus:border-lime-400"
        >
          Sign in
        </button>
        <Link className="text-lime-600 underline " to="/register">
          New registration ?
        </Link>
      </form>
    </div>
  );
}

export default LoginForm;
