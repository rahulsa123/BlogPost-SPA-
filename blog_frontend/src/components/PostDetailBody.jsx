import React from "react";
import PropTypes from "prop-types";
import Time from "./common/Time";

PostDetailBody.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  created_at: PropTypes.string.isRequired,
  updated_at: PropTypes.string.isRequired,
};

function PostDetailBody({ title, body, created_at, updated_at }) {
  return (
    <div className="col card text-center p-0 ml-4 postDetail">
      <div className="card-header" style={{ width: "100%" }}>
        <h5 className="card-title mt-2 mb-2">{title.toUpperCase()}</h5>
      </div>
      <div className="card-body">
        <p className="card-text">{body}</p>
      </div>
      <div className="card-footer text-muted">
        <span className="float-left">
          <Time refer_to="created at" time={created_at} />
        </span>
        <span className="float-right">
          <Time refer_to="last update at" time={updated_at} />
        </span>
      </div>
    </div>
  );
}

export default PostDetailBody;
