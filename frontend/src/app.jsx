import "./app.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/homepage";
import Navbar from "./components/navbar";
import Events from "./pages/Event";
import Photo from "./pages/Photo";
import Family from "./pages/family";
import LoginForm from "./pages/login";
import RegisterPage from "./pages/registration";
import EventList from "./components/eventlist";

import { Toaster } from "react-hot-toast";
import ProtectedRoutes from "./components/ProtectedRoutes";
import { useAuth } from "./contexts/authContext";
import ProfilePage from "./pages/profile";

export function App() {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/events"
          element={<ProtectedRoutes Component={Events} />}
        />
        <Route
          path="/events/:eventId"
          element={<ProtectedRoutes Component={EventList} />}
        />
        <Route path="/photo" element={<ProtectedRoutes Component={Photo} />} />
        <Route
          path="/Family"
          element={<ProtectedRoutes Component={Family} />}
        />
        {/* <Route
          path="/profile/:eventId"
          element={<ProtectedRoutes element={<ProfilePage />} />}
        /> */}
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </>
  );
}
