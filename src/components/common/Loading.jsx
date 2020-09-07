import React from "react";

function Loading({ isLoading, children }) {
  if (isLoading) {
    return (
      <div className="d-flex justify-content-center mt-5">
        <div
          className="spinner-border spinner-border mt-5"
          style={{ width: "3rem", height: "3rem" }}
          role="status"
        >
          <span className="sr-only mt-5">Loading...</span>
        </div>
      </div>
    );
  } else {
    return <span>{children}</span>;
  }
}

export default Loading;
