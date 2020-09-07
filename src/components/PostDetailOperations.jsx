import React from "react";

function PostDetailOperations(props) {
  return (
    <div
      className="col-auto card m-3 mt-0 p-4"
      style={{ height: "max-content" }}
    >
      <button className="btn btn-primary p-2 m-2">Edit</button>
      <button className="btn btn-danger p-2 m-2">Delete</button>
    </div>
  );
}

export default PostDetailOperations;
