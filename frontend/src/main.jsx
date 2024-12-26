import { render } from "preact";
import "./index.css";
import { App } from "./app.jsx";
import { GlobalProvider } from "./provider/GlobalProvider.jsx";

render(
  <GlobalProvider>
    <App />
  </GlobalProvider>,

  document.getElementById("app")
);
