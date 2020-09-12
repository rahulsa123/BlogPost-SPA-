import React from "react";
const Input = ({ name, label, error, type, ...rest }) => {
  return (
    <div className="class-form mb-2">
      <label htmlFor={name}>
        <b>{label}</b>
      </label>
      <input
        label={label}
        name={name}
        id={name}
        className="form-control"
        type={type}
        {...rest}
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
