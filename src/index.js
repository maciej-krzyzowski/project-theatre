import React from "react";
import ReactDOM from "react-dom";
import "./styles/global.scss";
import store from "./store/index";
import { Provider } from "react-redux";
import App from "./component/App/App";

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
