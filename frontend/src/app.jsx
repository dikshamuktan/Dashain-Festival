import "./app.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage";
import Navbar from "./components/navbar";
import Events from "./pages/Event";
import Photo from "./pages/Photo";
import Family from "./pages/family";
import LoginForm from "./pages/login";
import RegisterPage from "./pages/registration";
import EventList from "./components/eventlist";

export function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:eventId" element={<EventList />} />
          <Route path="/photo" element={<Photo />} />
          <Route path="/Family" element={<Family />} />
          <Route path="/" element={<LoginForm />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
