import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import axios from "axios";

function RegisterPage() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phoneNo: "",
    password: "",
  });

  const handleChange = (e) => {
    console.log(handleChange);
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const getReq = () => {
    console.log(user);
    localStorage.setItem("userData", JSON.stringify(user));
    console.log("User data saved to localStorage");
    navigate("/");
  };

  return (
    <div className="flex justify-center p-5">
      <form
        onSubmit={getReq}
        className="w-2/6 mt-11 rounded-lg shadow-lg items-center"
      >
        <h2 className="mb-4 p-4 w-full text-lime-600 text-2xl font-bold text-center ">
          Register Here
        </h2>
        <input
          className="w-full p-3 mb-4 mr-3  rounded outline outline-lime-300 focus:border-lime-400 "
          type="text"
          name="name"
          placeholder="Full Name"
          value={user.name}
          onChange={handleChange}
        />
        <input
          className=" w-full p-3 mb-4 rounded outline outline-lime-300 focus:border-lime-400"
          type="text"
          name="email"
          placeholder="Email"
          value={user.email}
          onChange={handleChange}
        />
        <input
          className=" w-full p-3 mb-4 rounded outline outline-lime-300 focus:border-lime-400"
          type="text"
          name="phoneNo"
          placeholder="Phone Number"
          value={user.phoneNo}
          onChange={handleChange}
        />
        <input
          className=" w-full p-3 mb-4 rounded outline outline-lime-300 focus:border-lime-400"
          type="text"
          name="password"
          placeholder="Password"
          value={user.password}
          onChange={handleChange}
        />
        <button className="flex w-full text-white justify-center font-medium rounded bg-lime-500 p-3 justify-self-center ">
          Conform
        </button>
      </form>
    </div>
  );
}
export default RegisterPage;
