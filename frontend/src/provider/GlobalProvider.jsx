import { AuthProvider } from "../contexts/authContext";
import { BrowserRouter } from "react-router-dom";
import { EventProvider } from "../contexts/eventContext";
import { FamilyProvider } from "../contexts/familyContext";
import { PhotoProvider } from "../contexts/photoContext";
import { SocketProvider } from "../contexts/socketContext";
// import { NotificationProvider } from "../contexts/notificationContext";
export function GlobalProvider({ children }) {
  return (
    <BrowserRouter>
      <AuthProvider>
        <SocketProvider>
          {/* <NotificationProvider> */}
          <EventProvider>
            <FamilyProvider>
              <PhotoProvider>{children}</PhotoProvider>
            </FamilyProvider>
          </EventProvider>
          {/* </NotificationProvider> */}
        </SocketProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
