import { createContext, useContext, useState, useEffect } from "react";
import { io } from "socket.io-client";
import { useAuth } from "./authContext";

const SocketContext = createContext();

export function SocketProvider({ children }) {
  const { isAuthenticated } = useAuth();
  const [socket, setSocket] = useState(null);

  //   console.log(isAuthenticated);
  let newSocket = null;
  useEffect(() => {
    if (isAuthenticated) {
      newSocket = io("https://13.126.44.173", {
        auth: {
          token: localStorage.getItem("token"),
        },
      });
      setSocket(newSocket);
      newSocket.on("connect", () => {
        console.log("connected to socket server");
      });

      newSocket.on("disconnect", () => {
        console.log("disconnected fron socket server");
      });

      newSocket.on("error", () => {
        console.log("socket error");
      });

      return () => {
        if (newSocket) {
          newSocket.close();
        }
      };
    }
  }, [isAuthenticated]);

  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  );
}

export function useSocket() {
  return useContext(SocketContext);
}
