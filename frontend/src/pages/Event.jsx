// import axios from "axios";
import { Calendar, Plus, CircleUser, MessageSquare } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useEvents } from "../contexts/eventContext";

export default function Events() {
  const {
    createEvents,
    fetchEvents,
    fetchUnjoinedEvents,
    JoinEvents,
    unjoinedEvents,
    events,
  } = useEvents();

  const [showForm, setShowForm] = useState(false);

  const [event, setEvent] = useState({
    title: "",
    date: "",
    description: "",
  });

  useEffect(() => {
    fetchEvents();
    fetchUnjoinedEvents();
  }, []);

  const handleJoinClick = async (id) => {
    // console.log(event);//
    JoinEvents(id);
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setEvent({ ...event, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    createEvents(event);
    setEvent({
      title: "",
      date: "",
      description: "",
    });

    handleForm();
  };
  const handleForm = () => {
    setShowForm(!showForm);
  };

  console.log(event);

  return (
    <>
      <div>
        <div className="flex justify-between p-4 my-7 mx-11 ">
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
        <div className="grid grid-cols-3 my-11 mx-11 p-4 gap-4 mt-4 ">
          {events.map((event) => (
            <div
              key={event._id}
              className="rounded-lg shadow-lg gap-2 p-5 mb-4 ml-8 w-5/6 overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
            >
              <div className="flex justify-between">
                <h1 className=" font-bold text-xl">{event.title}</h1>
                <p className="p-1 rounded-lg bg-gray-100">
                  {new Date(event.date).toLocaleDateString()}
                </p>
              </div>
              <p className="text-gray-500">{event.description}</p>
              <div className="flex gap-4 mt-4 ">
                {event.creator.profilePicture ? (
                  <img
                    className="w-8 h-8 rounded-full overflow-hidden "
                    src={`${event.creator.profilePicture}`}
                  />
                ) : (
                  <CircleUser size={30} className="text-gray-500" />
                )}
                <p className="mt-1 text-gray-500">
                  Created by {event.creator.name}
                </p>
              </div>
              <hr className="border-t border-gray-300 my-4" />
              <div className="flex justify-between">
                <div className="flex gap-3 opacity-60">
                  {/* <img
                    className="w-8 h-8 rounded-full overflow-hidden "
                    src={`${event.creator.profilePicture}`}
                  /> */}
                  {event.participants.profilePicture ? (
                    <img
                      className="w-8 h-8 rounded-full overflow-hidden "
                      src={`${event.participants.profilePicture}`}
                    />
                  ) : (
                    <CircleUser size={30} />
                  )}

                  <p className="mt-1">
                    {event.participants.length} participants
                  </p>
                </div>
                <Link
                  to={`/events/${event._id}`}
                  className="mr-4 text-lime-600"
                >
                  <MessageSquare />
                </Link>
              </div>
            </div>
          ))}
        </div>
        {unjoinedEvents.length > 0 && (
          <div className=" p-4 my-7 mx-11">
            <div className="flex gap-2">
              <Calendar />
              <h1 className="font-bold text-xl">Family Events You May Like</h1>
            </div>
            <div className="grid grid-cols-3 gap-11 mt-7 ">
              {unjoinedEvents.map((event) => (
                <div className="rounded-lg flex flex-col shadow-lg  p-5 mb-4 ml-4 w-5/5 overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
                  <li key={event._id} className="gap-5 flex flex-col">
                    <div className="flex justify-between">
                      {" "}
                      <p className="text-lime-500 font-bold text-xl">
                        {event.title}
                      </p>
                      <button
                        onClick={() => handleJoinClick(event._id)}
                        className="bg-gray-200 text-lime-600 rounded-lg p-1 text-sm "
                      >
                        Join Event
                      </button>
                      {/* <p className=" bg-gray-100 rounded-md p-1">
                        {new Date(event.date).toLocaleDateString()}
                      </p> */}
                    </div>
                    <p>{event.description}</p>

                    <div>
                      {" "}
                      <div className="flex gap-2 mt-4 opacity-60">
                        <img src={`${event.creator.profilePicture}`} />
                        <p className="">Created by {event.creator.name}</p>
                      </div>
                      <hr className="border-t border-gray-300 my-4" />
                      <div className="flex justify-between">
                        <div className="flex gap-3 opacity-60">
                          <CircleUser /> <p>{event.participants.length}</p>
                        </div>
                        <Link to={`/events/${event._id}`} className="mr-4">
                          <MessageSquare />
                        </Link>
                      </div>
                    </div>
                  </li>
                </div>
              ))}
            </div>
          </div>
        )}
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
