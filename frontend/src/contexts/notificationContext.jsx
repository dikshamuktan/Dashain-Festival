// import { createContext, useContext, useState, useEffect } from "react";
// import { useSocket } from "./socketContext";
// import { useAuth } from "./authContext";
// import api from "../utils/api";
// import toast from "react-hot-toast";

// const NotificationContext = createContext({
//   notification: [],
// });

// export function useNotifications() {
//   const context = useContext(NotificationContext);
//   if (context === undefined) {
//     throw new Error(
//       "useNotifications must be used within a NotificationProvider"
//     );
//   }
//   return context;
// }

// export function NotificationProvider({ children }) {
//   const [notification, setNotification] = useState([]);
//   const { user } = useAuth();
//   const { socket } = useSocket();

//   useEffect(() => {
//     if (socket) {
//       socket.on("new-notification", handleNewNotification);
//       socket.on("family-request-response", handleFamilyRequestResponse);
//       fetchNotifications();

//       return () => {
//         socket.off("new-notification");
//         socket.off("family-request-response");
//       };
//     }
//   }, [socket]);

//   const fetchNotifications = async () => {
//     try {
//       const res = await api.get("notifications");
//       setNotification(res.data);
//     } catch (error) {
//       toast.error("failed to fetch notification");
//     }
//   };

//   const handleNewNotification = (notification) => {
//     setNotification((prev) => [notification, ...prev]);

//     const message =
//       notification.type === "FAMILY_REQUEST"
//         ? `${notification.sender.name} sent you a family request`
//         : `${notification.sender.name} joined your event ${notification.eventId.title}`;

//     toast(message, {
//       icon: notification.type === "FAMILY_REQUEST" ? "👨‍👩‍👧‍👦" : "🎉",
//     });
//   };

//   const handleFamilyRequestResponse = ({ notification, accepted }) => {
//     if (accepted) {
//       toast.success(
//         `${notification.recipient.name} accepted your family request!`
//       );
//     } else {
//       toast.error(
//         `${notification.recipient.name} declined your family request`
//       );
//     }

//     // Update notifications list
//     setNotification((prev) =>
//       prev.map((n) => (n._id === notification._id ? notification : n))
//     );
//   };

//   const respondToFamilyRequest = (notificationId, accept) => {
//     socket.emit("respond-family-request", { notificationId, accept });
//   };
//   return (
//     <NotificationContext.Provider
//       value={{ notification, respondToFamilyRequest }}
//     >
//       {children}
//     </NotificationContext.Provider>
//   );
// }
