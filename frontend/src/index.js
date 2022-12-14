import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
// import store from "./store";
import App from "./views/routes";
import "./styles/output.css";
import "antd/dist/antd.less";
import "antd/dist/antd.css";
import { store } from "./store";
// import { refreshUserData } from "./store/ducks/auth/actions";

import "./index.css";

// store.dispatch(refreshUserData());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
