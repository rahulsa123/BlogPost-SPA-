import React from "react";
import { useLocation, useParams, useHistory } from "react-router-dom";
import { useEffect, useReducer } from "react";

import PostDetailUser from "./PostDetailUser";
import Loading from "./common/Loading";
import { getPost } from "../services/postService";
import { dataFetchReducer } from "./common/dataFetchReducer";

import _ from "lodash";
import PostDetailBody from "./PostDetailBody";
import PostDetailOperations from "./PostDetailOperations";

function PostDetail() {
  const location = useLocation();
  let initialPostData = {};

  if (location.state) {
    initialPostData = location.state.post;
  }

  const [post, postDispatch] = useReducer(dataFetchReducer, {
    isLoading: false,
    isError: false,
    data: initialPostData,
  });

  let { id: post_id } = useParams();

  const history = useHistory();
  useEffect(() => {
    if (_.isEmpty(post.data)) {
      // direct url access fatch post data
      let didCancel = false;
      async function getData() {
        postDispatch({ type: "FETCH_INIT" });
        try {
          const { data } = await getPost(post_id);
          console.log(data, data);
          if (!didCancel)
            postDispatch({ type: "FETCH_SUCCESS", payload: data });
        } catch (error) {
          if (!didCancel) {
            postDispatch({ type: "FETCH_FAILURE" });
            history.push("/not-found");
          }
        }
      }
      getData();
      return () => {
        didCancel = true;
      };
    }
  }, [history]);

  return (
    <Loading isLoading={post.isLoading}>
      {!_.isEmpty(post.data) && (
        <div className="mt-5 row ml-5 mr-4 mb-5">
          <PostDetailUser author={post.data.author} />

          <PostDetailBody
            title={post.data.title}
            body={post.data.body}
            created_at={post.data.created_at}
            updated_at={post.data.updated_at}
          />

          <PostDetailOperations />
        </div>
      )}
    </Loading>
  );
}

export default PostDetail;
