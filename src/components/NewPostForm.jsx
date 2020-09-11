import React from "react";
import Joi from "joi-browser";
import postService from "../services/postService";

import { toast } from "react-toastify";
import useForm from "./common/useForm";

function NewPostForm(props) {
  const initialState = {
    title: "",
    body: "",
  };
  const schema = {
    title: Joi.string().min(15).required().label("Title"),
    body: Joi.string().min(20).required().label("Body"),
  };
  const doSubmit = async (state, dispatch) => {
    const { title, body } = state.data;
    try {
      const { data } = await postService.createPost(title, body);
      props.history.replace(`/post/${data.post_id}`);
      toast.success("Post created");
    } catch (ex) {
      console.log(ex);
    }
  };
  const postForm = useForm(initialState, schema, doSubmit);
  return (
    <div className="container mt-5">
      <h3>NEW POST</h3>
      <form onSubmit={postForm.handleSubmit}>
        {postForm.renderInput("title", "Title")}
        {postForm.renderTextarea("body", "Body", "10")}
        {postForm.renderSubmitButton("Add Post")}
      </form>
    </div>
  );
}

export default NewPostForm;
