import React from "react";
import Joi from "joi-browser";
import postService from "../services/postService";
import useForm from "./common/useForm";
import { toast } from "react-toastify";

function EditForm(props) {
  const { post, postDispatch, setEditFormState } = props;

  const initialState = {
    title: post.title,
    body: post.body,
  };
  const schema = {
    title: Joi.string().min(10).required().label("Title"),
    body: Joi.string().required().label("body"),
  };
  const doSubmit = async (state, dispatch) => {
    const { title, body } = state.data;
    try {
      const updated_post = { ...post };
      updated_post.title = title;
      updated_post.body = body;
      console.log(updated_post);
      await postService.updatePost(updated_post);
      postDispatch({ type: "DATA_UPDATED", payload: updated_post });
      toast.success("post updated");
    } catch (ex) {
      console.log(ex);
      toast.error("Some Error occured!!");
    }
    setEditFormState(false);
  };
  const editForm = useForm(initialState, schema, doSubmit);
  return (
    <div>
      <form onSubmit={editForm.handleSubmit}>
        <div className="form-group">
          {editForm.renderInput("title", "Title")}
        </div>
        <div className="form-group">
          {editForm.renderTextarea("body", "Body", "4", "50")}
        </div>
        <div className="modal-footer">
          <div className="form-group">
            {editForm.renderSubmitButton("Update")}
          </div>
        </div>
      </form>
    </div>
  );
}

export default EditForm;
