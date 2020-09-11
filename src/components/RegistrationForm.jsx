import React from "react";
import Joi from "joi-browser";
import { toast } from "react-toastify";
import useForm from "./common/useForm";
import userService from "../services/userService";
function RegistrationForm(props) {
  const initialState = {
    username: "",
    password1: "",
    password2: "",
  };
  const schema = {
    username: Joi.string().min(8).required().label("Username"),
    password1: Joi.string().min(8).required().label("Password"),
    password2: Joi.string().min(8).required().label("Password"),
  };
  const doSubmit = async (state, dispatch) => {
    const { username, password1, password2 } = state.data;
    if (password1 !== password2) {
      dispatch({
        type: "SET_ERRORS",
        payload: { password2: "both password must be same" },
      });
    } else {
      try {
        await userService.register(username, password1, password2);
        window.location = "/";
        toast.success("User Registerd");
      } catch (ex) {
        if (ex.response && ex.response.status === 400) {
          let errors = { ...state.errors };
          errors = ex.response.data;
          dispatch({
            type: "SET_ERRORS",
            payload: errors,
          });
        }
      }
    }
  };
  const RegistrationForm = useForm(initialState, schema, doSubmit);
  return (
    <div className="container mt-5">
      <h3>Register</h3>
      <form onSubmit={RegistrationForm.handleSubmit}>
        {RegistrationForm.renderInput("username", "Username")}
        {RegistrationForm.renderInput("password1", "Password", "password")}
        {RegistrationForm.renderInput("password2", "Again type", "password")}
        {RegistrationForm.renderSubmitButton("SignUp")}
      </form>
    </div>
  );
}

export default RegistrationForm;
