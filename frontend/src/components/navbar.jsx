import { Link, useNavigate } from "react-router-dom";
import {
  User,
  Bell,
  LogOut,
  CircleUser,
  Calendar,
  Users,
  BookImage,
  LayoutDashboard,
} from "lucide-react";
import { useState } from "react";
// import { AuthParam } from "../contexts/usercontext";

function Navbar() {
  const navigate = useNavigate();
  // const { user } = useContext({ AuthParam });
  const [isOpen, setIsOpen] = useState(false);
  const [users, setUser] = useState([
    {
      name: "Diksha",
      email: "diksha@example.com",
      phoneNo: "9876543210",
      password: "pass1234",
    },
  ]);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleProfileSettings = () => {
    alert("Navigating to Profile Settings...");
    // Add navigation logic here
  };

  const handleLogout = () => {
    setIsOpen(!isOpen);
    navigate("/");
    // alert("Logging out...");
    // Add logout logic here
  };
  return (
    <div className=" bg-lime-600 p-4 ">
      <div className="flex text-white text-xl font-bold justify-between items-center  ml-11 mr-11 ">
        <ul>
          <Link className="" to="/home">
            <span className="text-xl flex gap-1">
              <LayoutDashboard size={20} className="mt-1" />
              -Board
            </span>
          </Link>
        </ul>
        <ul className="flex gap-20">
          <li>
            <Link to="events" className="flex gap-1 justify-center ">
              <Calendar size={20} className="mt-1" />
              Events
            </Link>
          </li>
          <li>
            <Link to="family" className="flex gap-1">
              <Users size={20} className="mt-1" />
              Family
            </Link>
          </li>
          <li>
            <Link to="photo" className="flex gap-1">
              <BookImage size={20} className="mt-1" />
              Photos
            </Link>
          </li>
        </ul>
        {/* <ul className="flex "> 
          <Link to="login">Login</Link>
        </ul> */}
        <div className="justify-center mt-2">
          <ul className="flex gap-5 align-middle justify-center">
            <li>
              <Bell />
            </li>
            <div className="relative">
              <button onClick={toggleMenu} className="dropdown-button rounded ">
                <ul className="flex gap-2 text-md">
                  <li>{<CircleUser className="" />}</li>
                  <li>
                    {users.map((users) => (
                      <div>{users.name}</div>
                    ))}
                  </li>
                </ul>
              </button>
              {isOpen && (
                <div className="absolute right-0 mt-2 dropdown-menu flex flex-col bg-gray gap-3 shadow-lg text-black bg-white rounded ">
                  <button
                    onClick={handleProfileSettings}
                    className="dropdown-item text-sm flex w-40  items-center gap-1"
                  >
                    {<User />}
                    Profile Settings
                  </button>
                  <button
                    onClick={handleLogout}
                    className="dropdown-item text-sm justify-start flex items-center gap-2"
                  >
                    <LogOut className="text-red-500" />
                    Logout
                  </button>
                </div>
              )}
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
