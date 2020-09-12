import React from "react";

import PostHeader from "./PostHeader";
import PostBody from "./PostBody";

const Post = (props) => {
  const { author, title, created_at, updated_at } = props.post;
  return (
    <div className=" card post">
      <PostHeader
        author={author}
        title={title}
        created_at={created_at}
        updated_at={updated_at}
      />
      <PostBody post={props.post} />
    </div>
  );
};

export default Post;
