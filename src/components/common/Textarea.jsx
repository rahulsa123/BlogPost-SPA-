import React from "react";
const Input = ({ name, label, error, rows, cols, ...rest }) => {
  return (
    <div className="class-form">
      <label htmlFor={name}>
        <b>{label}</b>
      </label>
      <textarea
        {...rest}
        label={label}
        name={name}
        id={name}
        rows={rows}
        cols={cols}
        className="form-control"
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
