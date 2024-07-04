import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./app/store.js";
import { LoadingContextProvider, NavContextProvider } from "./context/index.js";
// import Store from "./app/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <LoadingContextProvider>
        <NavContextProvider >
          <App />
        </NavContextProvider >
      </LoadingContextProvider >
    </Provider>
  </React.StrictMode>,
);
