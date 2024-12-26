import { createContext, useContext, useState } from "react";
import api from "../utils/api";
import toast from "react-hot-toast";

const EventContext = createContext({
  events: [],
  fetchEvents: () => {},
  createEvents: () => {},
  fetchUnjoinedEvents: () => {},
  JoinEvents: () => {},
  fetchEventDetails: () => {},
  unjoinedEvents: [],
  eventDetails: [],
});

export const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([]);
  const [eventDetails, setEventDetails] = useState();
  const [unjoinedEvents, setUnjoinedEvents] = useState([]);

  //to get events data
  const fetchEvents = async () => {
    try {
      const response = await api.get("/events");
      setEvents(response.data);
    } catch (err) {
      toast.error("failed to fetch events");
    }
  };

  //to get unjoined data
  const fetchUnjoinedEvents = async () => {
    try {
      const res = await api.get("/events/unjoined");
      setUnjoinedEvents(res.data);
    } catch (error) {
      toast.error("failed to fetch unjoined events");
    }
  };

  // to create events
  const createEvents = async (eventData) => {
    try {
      const response = await api.post("/events", eventData);
      console.log(response.data);
      setEvents((prev) => [...prev, response.data]);
      toast.success("event created successfully !");
    } catch (err) {
      toast.error("failed to create event");
    }
  };

  const JoinEvents = async (eventId) => {
    try {
      const res = await api.post(`/events/${eventId}/join`);
      await Promise.all([fetchEvents(), fetchUnjoinedEvents()]);
      toast.success("successfully joined the event!");
    } catch (err) {
      toast.error("faile to join events");
    }
  };

  const fetchEventDetails = async (id) => {
    try {
      const res = await api.get(`/events/${id}`);
      setEventDetails(await res.data.event);
      return true;
    } catch (err) {
      toast.error("faile to fetch event deteails");
    }
  };

  return (
    <EventContext.Provider
      value={{
        events,
        createEvents,
        fetchEvents,
        fetchUnjoinedEvents,
        fetchEventDetails,
        JoinEvents,
        unjoinedEvents,
        eventDetails,
      }}
    >
      {children}
    </EventContext.Provider>
  );
};

export function useEvents() {
  return useContext(EventContext);
}
