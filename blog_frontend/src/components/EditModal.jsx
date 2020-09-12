import React from "react";
import EditForm from "./EditForm";

function EditModal(props) {
  const { setEditFormState } = props;
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
          <span aria-hidden="true" onClick={() => setEditFormState(false)}>
            &times;
          </span>
        </button>
      </div>
      <div className="modal-body">
        <EditForm
          post={props.post}
          postDispatch={props.postDispatch}
          setEditFormState={setEditFormState}
        />
      </div>
    </div>
  );
}

export default EditModal;
