import React from "react";
import post from "../services/postService";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
function DeleteModel(props) {
  const { setDeleteFormState, post_id } = props;
  const history = useHistory();
  const handleDelte = async () => {
    try {
      console.log(await post.deletePost(post_id));
      history.replace("/");
      toast.success("Post delete Successfully");
    } catch (ex) {
      //setDeleteFormState(false);
      toast.error("Some server error occured!!!");
    }
  };
  return (
    <div className="modal-content mt-5">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">
          Edit Post
        </h5>
        <button
          type="button"
          className="close"
          data-dismiss="modal"
          aria-label="Close"
        >
          <span aria-hidden="true" onClick={() => setDeleteFormState(false)}>
            &times;
          </span>
        </button>
      </div>
      <div className="modal-body">Do you want to delete this post ???</div>
      <div className="modal-footer">
        <div className="form-group">
          <button className="btn btn-danger" onClick={handleDelte}>
            Yes
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModel;
