import React from "react";
import { ToastContainer } from "react-toastify";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import PostsListComponent from "./components/PostsListComponent";
import { Switch, Route, Redirect } from "react-router-dom";
import NotFound from "./components/NotFound";
import PostDetail from "./components/PostDetail";
import NavBar from "./components/NavBar";
import LoginForm from "./components/LoginForm";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from "./components/common/ProtectedRoute";
import Logout from "./components/Logout";
import NewPostForm from "./components/NewPostForm";
import Profile from "./components/Profile";
import RegistrationForm from "./components/RegistrationForm";
function App() {
  return (
    <main>
      <ToastContainer />
      <NavBar />
      <Switch>
        <ProtectedRoute path="/post/:id" component={PostDetail} />
        <ProtectedRoute path="/create/post" component={NewPostForm} />
        <ProtectedRoute path="/profile" component={Profile} />
        <Route path="/register" component={RegistrationForm} />
        <Route path="/posts" component={PostsListComponent} />
        <Route path="/login" component={LoginForm} />
        <Route path="/logout" component={Logout} />
        <Route path="/not-found" component={NotFound} />
        <Redirect from="/" to="/posts" />
        <Redirect to="/not-found" />
      </Switch>
    </main>
  );
}

export default App;
