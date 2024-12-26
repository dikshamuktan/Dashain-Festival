import { Link, useNavigate } from "react-router-dom";
// import { useNotifications } from "../contexts/notificationContext";
import {
  User,
  Bell,
  LogOut,
  CircleUser,
  Calendar,
  Users,
  BookImage,
  LayoutDashboard,
  X,
} from "lucide-react";
import { useAuth } from "../contexts/authContext";
import { useState } from "react";
function Navbar() {
  const { user, isAuthenticated, logout } = useAuth();
  // const { notifications, respondToFamilyRequest } = useNotifications();

  const [isOpen, setIsOpen] = useState(false);

  // const handleAcceptRequest = (notificationId) => {
  //   respondToFamilyRequest(notificationId, true);
  // };

  // const handleRejectRequest = (notificationId) => {
  //   respondToFamilyRequest(notificationId, false);
  // };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleProfileSettings = () => {
    setIsOpen(!isOpen);
    // alert("Navigating to Profile Settings...");
    // Add navigation logic here
  };

  const handleLogout = () => {
    logout();
  };
  return (
    <div className=" bg-lime-600 p-4 ">
      <div className="flex text-white text-xl font-bold justify-between items-center  ml-11 mr-11 ">
        <ul>
          <Link className="" to="/">
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
        {isAuthenticated ? (
          <div className="justify-center mt-2">
            <ul className="flex gap-5 align-middle justify-center">
              <li className="relative">
                <Bell />
                <p className="absolute right-[-5px] left-4 bottom-[-2px] top-2 w-4 justify-center text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
                  10
                </p>
              </li>

              <div className="relative">
                <button
                  onClick={toggleMenu}
                  className="dropdown-button rounded "
                >
                  <ul className="flex gap-2 text-md">
                    <li>{<CircleUser className="" />}</li>
                    <li>
                      <div className="hover:text-lime-300">
                        {user?.name.split(" ")[0]}
                      </div>
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
                      <Link to="profile">Profile Settings</Link>
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
        ) : (
          <Link to="login" className="flex gap-1">
            Login
          </Link>
        )}
      </div>
    </div>
  );
}

export default Navbar;
