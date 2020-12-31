import React from "react";
import ReactDOM from "react-dom";
import Router from "./Router";
import reportWebVitals from "./reportWebVitals";
import { DataLayer } from "./hooks/DataLayer";
import reducer, { initialState } from "./reducer";

import "jquery";

// CSS
import "./assets/scss/sb-admin-2.scss";

// JS
import "./assets/vendor/jquery-easing/jquery.easing.js";
import "./assets/vendor/bootstrap/js/bootstrap.bundle.js";
import "./assets/js/sb-admin-2.min.js";

ReactDOM.render(
   <React.StrictMode>
      <DataLayer initialState={initialState} reducer={reducer}>
         <Router />
      </DataLayer>
   </React.StrictMode>,
   document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
