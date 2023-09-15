import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
// import { store } from "./Store";
import { Tooltip } from "react-tooltip";
import { createStore } from "redux";
// import { AuthenticateContext } from "./Context/AuthenticateContext";
import rootReducer from "./hooks/Reducer";

const root = ReactDOM.createRoot(document.getElementById("root"));

const store = createStore(rootReducer);
root.render(
  <React.StrictMode>
    {/* <AuthenticateContext> */}
    <Provider store={store}>
      <App />
      <Tooltip id="my-tooltip" />
      <ToastContainer position="top-center" reverseOrder={false} />
    </Provider>
    {/* </AuthenticateContext> */}
  </React.StrictMode>
);
