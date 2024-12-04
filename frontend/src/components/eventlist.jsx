import { Users, MessageSquare, Send, CodeSquare, User } from "lucide-react";
import { useParams } from "react-router-dom";
import { useState } from "react";

const EventList = () => {
  const params = useParams();
  // console.log(params);
  const [chat, setChat] = useState({
    message: "",
  });
  const [messages, setMessages] = useState([]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setChat({ ...chat, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(chat);
    messages.push(chat);
    console.log(messages);
    setMessages(messages);
    setChat({ message: "" });
  };
  // console.log(chat);

  // const currentDate = new Date().toLocaleDateString();
  const currentTime = new Date().toLocaleTimeString();

  return (
    <div className="flex flex-col justify-center items-center  ">
      <div className=" bg-white mt-10  w-4/6 border-t-2 rounded-lg shadow-md gap-6">
        <div className="ms-3 p-4 flex flex-col gap-4">
          {/* <h2>{params.eventId}</h2> */}
          <h2 className="text-2xl font-bold">Hello Event</h2>
          <div className=" opacity-60 gap-2 flex flex-col">
            <p>02/05/2024, 05:55:00</p>
            <p className="">welcome to event</p>
            <div className="flex gap-3 mt-4 ">
              <Users />
              <p>particiants</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-6  w-4/6 h-96 border-t-2 justify-between rounded-lg shadow-md">
        <div className="flex flex-col gap-3  p-4">
          <div className="flex gap-3 items-center">
            <MessageSquare />
            <h2 className="text-2xl font-bold">Chat</h2>
          </div>
          <div className="rounded-lg  p-2">
            {messages.map((msg) => (
              <div className="flex gap-4">
                <img
                  className="w-10 rounded-full h-10"
                  src="https://images.pexels.com/photos/18182843/pexels-photo-18182843/free-photo-of-abstract-image-with-blurred-electric-lights.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                />
                <div className="flex flex-col">
                  <p className="font-bold">diksha</p>
                  {/* <p>{currentDate}</p> */}

                  <p className="opacity-80">{msg.message}</p>
                  <p className="opacity-60">{currentTime}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <form onSubmit={handleSubmit} className="flex space-x-2 p-5 gap-2 ">
          <input
            className="flex-1 p-2 border border-5 rounded-md"
            type="text"
            value={chat.message}
            name="message"
            placeholder="type a message..."
            onChange={handleInput}
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
