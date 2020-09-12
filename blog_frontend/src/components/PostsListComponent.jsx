import React, { useReducer, useEffect, useState } from "react";
import _ from "lodash";
import { getPosts } from "../services/postService";
import Post from "./Post";
import Loading from "./common/Loading";
import { dataFetchReducer } from "./common/dataFetchReducer";

import { useHistory } from "react-router-dom";

const PostsListComponent = (props) => {
  const [posts, postsDispatch] = useReducer(dataFetchReducer, {
    isLoading: true,
    isError: false,
    data: {},
  });
  const [fetchUrl, setFetchUrl] = useState("");
  const history = useHistory();
  useEffect(() => {
    let didCancel = false;
    async function callBackEnd() {
      postsDispatch({ type: "FETCH_INIT" });
      try {
        const { data } = await getPosts(fetchUrl);

        if (!didCancel) postsDispatch({ type: "FETCH_SUCCESS", payload: data });
      } catch (error) {
        if (!didCancel) {
          postsDispatch({ type: "FETCH_FAILURE" });
          history.push("/not-found");
        }
      }
    }
    callBackEnd();
    return () => {
      didCancel = true;
    };
  }, [history, fetchUrl]);
  return (
    <div className="container-fluid posts mt-5">
      <Loading isLoading={posts.isLoading}>
        {!_.isEmpty(posts.data) &&
          posts.data.results.map((post) => <Post key={post.id} post={post} />)}
      </Loading>
      {!posts.isLoading && (
        <center>
          <button
            className="btn btn-outline-primary m-2 mb-4"
            disabled={posts.data.previous === null}
            onClick={() => setFetchUrl(posts.data.previous)}
          >
            Previous
          </button>
          <button
            className="btn btn-outline-primary m-2 mb-4"
            disabled={posts.data.next === null}
            onClick={() => setFetchUrl(posts.data.next)}
          >
            Next
          </button>
        </center>
      )}
    </div>
  );
};

export default PostsListComponent;
