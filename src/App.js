import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components"

import Header from "./common/header";
import Home from "./page/home";
import Detail from "./page/detail";
import Login from "./page/login";
import store from "./store";
function App() {
  const theme ={
    "night":{
      "background": "#3f3f3f",
      "TopicBackground": "#c8c8c8",
      "color": "#c8c8c8",
      "borderColor": "#2f2f2f",
      "titleColor": "#c8c8c8",
      "searchColor": "#4f4f4f",
      "textColor": "#999",
      "borderShadow":"0 2px 8px rgba(0, 0, 0, 0.8)",
    },
    "day":{
      "background": "#fff",
      "TopicBackground": "#f7f7f7",
      "color": "#969696",
      "borderColor": "#f0f0f0",
      "titleColor": "#333",
      "searchColor": "#eee",
      "textColor": "#999",
      "borderShadow":"0 2px 8px rgba(0, 0, 0, 0.1)",
    }
  }
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <Header />
          <Route path="/" exact component={Home}></Route>
          <Route path="/detail/:id" exact component={Detail}></Route>
          <Route path="/login" exact component={Login}></Route>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
