import React from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import PostsListComponent from "./components/postsListComponent";
import { Switch, Route, Redirect } from "react-router-dom";
import NotFound from "./components/NotFound";
import PostDetail from "./components/PostDetail";
import NavBar from "./components/NavBar";

function App() {
  return (
    <main>
      <NavBar />
      <Switch>
        <Route path="/post/:id" component={PostDetail} />
        <Route path="/posts" component={PostsListComponent} />
        <Route path="/not-found" component={NotFound} />
        <Redirect from="/" to="/posts" />
        <Redirect to="/not-found" />
      </Switch>
    </main>
  );
}

export default App;
