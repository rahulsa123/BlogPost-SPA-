import React from "react";

function PostDetailUser({ author }) {
  const { profile, first_name, last_name } = author;
  return (
    <div className="col-md-auto card  mb-4" style={{ height: "max-content" }}>
      <img
        src={profile.image}
        className="card-img-top rounded p-2 pt-3"
        alt="No face"
        style={{ maxHeight: "250px" }}
      />
      <center className="card-title">
        <h5>{`${first_name} ${last_name}`}</h5>
      </center>
    </div>
  );
}

export default PostDetailUser;
