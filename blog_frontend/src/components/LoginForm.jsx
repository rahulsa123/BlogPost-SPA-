import React from "react";
import Joi from "joi-browser";
import useForm from "./common/useForm";
import auth from "../services/authservices";

function LoginForm(props) {
  const initialState = {
    username: "",
    password: "",
  };
  const schema = {
    username: Joi.string().min(2).required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  const doSubmit = async (state, dispatch) => {
    try {
      const { username, password } = state.data;
      await auth.login(username, password);
      const { state: redirectState } = props.location;
      window.location = redirectState ? redirectState.from.pathname : "/";
    } catch (ex) {
      if (ex.response && ex.response && ex.response.status === 400) {
        const errors = { ...state.errors };
        errors.username = ex.response.data["non_field_errors"][0];
        dispatch({ type: "SET_ERRORS", payload: errors });
      }
      console.log(ex);
    }
  };

  const formhandler = useForm(initialState, schema, doSubmit);
  return (
    <div className="container mt-5 form">
      <h3>Login</h3>
      <form onSubmit={formhandler.handleSubmit}>
        {formhandler.renderInput("username", "Username", "text")}
        {formhandler.renderInput("password", "Password", "password")}
        {formhandler.renderSubmitButton("login")}
      </form>
    </div>
  );
}

export default LoginForm;
