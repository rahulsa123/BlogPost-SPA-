import React from "react";
import Time from "./common/Time";

function PostHeader(props) {
  const { author, title, created_at, updated_at } = props;
  return (
    <div className="card-header ">
      <img
        src={author.profile.image}
        className="card-img-left card-image"
        alt="No face"
      />
      <span className="post-header-detail">
        <h4>{title.toUpperCase()}</h4>
        <h5>
          <b>post by</b> {author.first_name}
          <br />
          <Time time={created_at} refer_to={" created at"} />
          <Time time={updated_at} refer_to={" last updated at"} />
        </h5>
      </span>
    </div>
  );
}

export default PostHeader;
