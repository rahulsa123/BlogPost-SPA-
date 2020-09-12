import React, { useReducer } from "react";
import Joi from "joi-browser";
import Input from "./Input";
import Textarea from "./Textarea.jsx";
import Button from "./Button";
const formDispature = (state, action) => {
  switch (action.type) {
    case "SET_DATA":
      return { ...state, data: action.payload };
    case "SET_ERRORS":
      return { ...state, errors: action.payload };
    default:
      return state;
  }
};
function useForm(intialState, schema, doSubmit) {
  const [state, dispatch] = useReducer(formDispature, {
    data: { ...intialState },
    errors: {},
  });

  const validate = () => {
    const option = { abortEarly: false };

    const { error } = Joi.validate(state.data, schema, option);
    if (!error) return null;
    const errors = {};

    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };
  const validateproperty = ({ name, value }) => {
    const obj = { [name]: value };
    const obj_schema = { [name]: schema[name] };
    const { error } = Joi.validate(obj, obj_schema);
    return error ? error.details[0].message : null;
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validate();
    dispatch({ type: "SET_ERRORS", payload: errors || {} });
    if (errors) return;
    doSubmit(state, dispatch);
  };
  const handleChange = ({ target: input }) => {
    const errors = { ...state.errors };
    const errorMessage = validateproperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];
    const data = { ...state.data };
    data[input.name] = input.value;
    dispatch({ type: "SET_DATA", payload: data });
    dispatch({ type: "SET_ERRORS", payload: errors });
  };
  const renderInput = (name, label, type) => {
    const { data, errors } = state;
    return (
      <Input
        name={name}
        type={type}
        label={label}
        value={data[name]}
        onChange={handleChange}
        error={errors[name]}
      />
    );
  };
  const renderSubmitButton = (label) => {
    return (
      <Button
        label={label}
        disabled={validate()}
        type="submit"
        classes="btn btn-primary"
      />
    );
  };
  const renderTextarea = (name, label, rows, cols) => {
    const { data, errors } = state;
    return (
      <Textarea
        rows={rows}
        cols={cols}
        name={name}
        label={label}
        value={data[name]}
        onChange={handleChange}
        error={errors[name]}
      />
    );
  };
  return {
    handleSubmit,
    renderInput,
    renderSubmitButton,
    renderTextarea,
    dispatch,
  };
}

export default useForm;
