// import axios from "axios";
import { Calendar, Plus, CircleUser, MessageSquare } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Events() {
  const [showForm, setShowForm] = useState(false);
  const [task, setTasks] = useState([]);
  // const [events, setEvents] = useState([]);

  const [event, setEvent] = useState({
    title: "",
    date: "",
    description: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setEvent({ ...event, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(event);

    if (event.title.trim()) {
      setTasks([...task, event]);
      setEvent({
        title: "",
        date: "",
        description: "",
      });
    }
    console.log(task);
    handleForm();
  };
  const handleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <>
      <div>
        <div className="flex justify-between p-4 my-7 mx-11">
          <div className="flex gap-2">
            <Calendar />
            <h1 className="font-bold text-xl">My Events</h1>
          </div>
          <div
            onClick={handleForm}
            className="flex  bg-lime-600 p-2 rounded text-white gap-1 hover:bg-lime-500 focus:outline focus:ring-white-300"
          >
            <Plus />
            <button className="font-medium  ">Create Event</button>
          </div>
        </div>
        <div className="grid grid-cols-3  ms-11 ">
          {task.map((event) => (
            <div className="rounded-lg shadow-lg gap-4 p-5 mb-4 ml-8 w-4/5 overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
              <div className="flex justify-between">
                <h1 className="text-lime-500 font-bold text-xl">
                  {event.title}
                </h1>
                <p className="p-1 rounded-lg bg-gray-100">{event.date}</p>
              </div>
              <p className="">{event.description}</p>
              <div className="flex gap-2 mt-4 opacity-60">
                <CircleUser />
                <p className="">Created by Diksha</p>
              </div>
              <hr className="border-t border-gray-300 my-4" />
              <div className="flex justify-between">
                <div className="flex gap-3 opacity-60">
                  <CircleUser /> <p>particiants</p>
                </div>
                <Link to="/events/skdgksdks" className="mr-4">
                  <MessageSquare />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      {showForm && (
        <div className="fixed inset-0 z-10 my-auto overflow-y-auto flex justify-center items-center bg-black bg-opacity-50">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col bg-white justify-center p-5 rounded-lg shadow-lg gap-3  w-3/6 "
          >
            <h1 className="text-2xl mt-4 font-bold text-lime-600 ">
              Create New Events
            </h1>
            <div>
              <label className="block font-medium">Title</label>
              <input
                className="border rounded w-full p-2"
                type="text"
                name="title"
                placeholder="Event name"
                onChange={handleInput}
                value={event.title}
              />
            </div>
            <div className="">
              <label className="block font-medium">Date</label>
              <input
                className="border rounded w-full p-2"
                type="date"
                name="date"
                value={event.date}
                placeholder="Event Date"
                onChange={handleInput}
              />
            </div>
            <div>
              <label className="block font-medium">Description</label>
              <textarea
                className="border rounded w-full p-2"
                type="text"
                name="description"
                placeholder="Event Description"
                onChange={handleInput}
                value={event.description}
              ></textarea>
            </div>

            <div className="flex justify-end gap-3">
              <button onClick={handleForm} type="button">
                Close
              </button>
              <button
                type="submit"
                className="border bg-lime-600 p-2 hover:bg-lime-500 focus:outline focus:ring-white-300  rounded text-white"
              >
                Create
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
