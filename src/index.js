import React from "react";
import ReactDOM from "react-dom";
import Provider from "./store/store";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>,
  rootElement
);

// import React from "react";
// import { Provider } from "react-redux";
// import ReactDOM from "react-dom";

// import App from "./App";
// import { createStore } from "redux";

// const counter = (state = 0, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return (state = state + 1);

//     case "DECREMENT":
//       return (state = state - 1);
//     default:
//       return state;
//   }
// };

// const rootElement = document.getElementById("root");
// const store = createStore(counter);

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   rootElement
// );
