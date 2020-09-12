import React from "react";

function Button({ label, disabled, type, classes }) {
  return (
    <div className="class-form mt-2">
      {console.log(disabled)}
      <button disabled={disabled} type={type} className={classes}>
        {label}
      </button>
    </div>
  );
}

export default Button;
