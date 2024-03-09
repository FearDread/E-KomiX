import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { ThemeProvider } from "@material-ui/styles";
import store from "./Redux/store";
import theme from "./config/theme";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
   <React.StrictMode>
      <Provider store={store}>
         <ThemeProvider theme={theme}>
            <Router>
               <App />
            </Router>
         </ThemeProvider>
      </Provider>
   </React.StrictMode>
);
