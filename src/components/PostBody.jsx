import React from "react";
import { NavLink } from "react-router-dom";

function PostBody(props) {
  const { body, id } = props.post;

  return (
    <div className="card-body">
      <p>{body.substring(0, 100) + "..."} </p>
      <NavLink to={{ pathname: `/post/${id}`, state: { post: props.post } }}>
        More
      </NavLink>
    </div>
  );
}

export default PostBody;
