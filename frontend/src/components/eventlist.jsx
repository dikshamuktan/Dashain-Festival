import {
  Users,
  MessageSquare,
  Send,
  CodeSquare,
  User,
  CircleUser,
} from "lucide-react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuth } from "../contexts/authContext";
import { useEvents } from "../contexts/eventContext";
import { useSocket } from "../contexts/socketContext";
import toast from "react-hot-toast";
import api from "../utils/api";

const EventList = () => {
  const { eventId } = useParams();
  const { user } = useAuth();
  const { events, fetchEventDetails, eventDetails } = useEvents();
  const { socket } = useSocket();

  const [messages, setMessages] = useState();
  const [newMessage, setNewMessage] = useState();

  useEffect(() => {
    fetchEventDetails(eventId);
    fetchEventMessage();
    if (socket) {
      socket.emit("join-event", eventId);

      socket.on("new-message", (message) => {
        console.log(message);
        setMessages((prev) => {
          return [...prev, message];
        });
      });
    }
  }, [socket]);

  const fetchEventMessage = async () => {
    try {
      const res = await api.get(`/events/${eventId}/messages`);
      setMessages(res.data);
      console.log(res);
    } catch (error) {
      toast.error("failed to fetch event message");
    }
  };
  // console.log(messages);

  // const handleInput = (e) => {
  //   const { name, value } = e.target;
  //   setChat({ ...chat, [name]: value });
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;
    socket.emit("send-message", { eventId: eventId, content: newMessage });

    setNewMessage("");
  };
  const currentTime = new Date().toLocaleTimeString();

  return (
    <div className="flex flex-col justify-center items-center  ">
      <div className=" bg-white mt-10  w-4/6 border-t-2 rounded-lg shadow-md gap-6">
        <div className="ms-3 p-4 flex flex-col gap-4">
          <div className=" gap-2 flex flex-col">
            <h2 className="font-bold text-xl text-black">
              {eventDetails?.title}
            </h2>
            <p className="opacity-70">
              {new Date(eventDetails?.date).toLocaleString()}
            </p>
            <p className="opacity-70">{eventDetails?.description}</p>

            <div className="flex gap-3 mt-4 ">
              <Users />
              <p className="opacity-70">
                {eventDetails?.participants.length} particiants
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-6 overflow-hidden  w-4/6 h-auto border-t-2 justify-between rounded-lg shadow-md">
        <div className="flex flex-col gap-6  p-4">
          <div className="flex gap-3 items-center">
            <MessageSquare />
            <h2 className="text-2xl font-bold">Chat</h2>
          </div>
          <div className="rounded-lg  p-2 flex flex-col gap-4">
            {messages?.map((message) => (
              <div key={message._id} className="flex gap-4">
                {message.sender.profilePicture ? (
                  <img
                    className="w-8 h-8 rounded-full overflow-hidden "
                    src={`${message.sender.profilePicture}`}
                  />
                ) : (
                  <CircleUser size={30} className="opacity-50" />
                )}
                <div className="flex flex-col">
                  <p className="font-bold">{message.sender.name}</p>
                  {/* <p>{currentDate}</p> */}

                  <p className="opacity-80">{message.content}</p>
                  <p className="opacity-60 text-sm">
                    {new Date(message.createdAt).toLocaleString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* chat  */}
        <form onSubmit={handleSubmit} className="flex space-x-2 p-5 gap-2 ">
          <input
            className="flex-1 p-2 border border-5 rounded-md"
            type="text"
            value={newMessage}
            name="message"
            placeholder="type a message..."
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <button className="bg-lime-600 p-3 text-white rounded-lg hover:bg-lime-400 hover:text-lime-700">
            <Send />
          </button>
        </form>
      </div>
    </div>
  );
};

export default EventList;
