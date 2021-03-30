import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import BlogPostListContainer from "./components/BlogPostListContainer";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={LoginForm} />
        <Route path="/" component={BlogPostListContainer} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
