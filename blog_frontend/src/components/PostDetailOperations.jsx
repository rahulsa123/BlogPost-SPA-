import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import EditModal from "./EditModal";
import DeleteModel from "./DeleteModel";

function PostDetailOperations(props) {
  const [editFormState, setEditFormState] = useState(false);
  const [deleteFormState, setDeleteFormState] = useState(false);
  useEffect(() => {
    Modal.setAppElement("body");
  });
  const { post, postDispatch } = props;
  return (
    <div
      className="col-auto card m-3 mt-0 p-4"
      style={{ height: "max-content" }}
    >
      <button
        className="btn btn-primary p-2 m-2"
        onClick={() => setEditFormState(true)}
      >
        Edit
      </button>
      <div
        className="modal fade"
        id="exampleModalCenter"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <Modal
          isOpen={editFormState}
          className="modal-dialog mt-5"
          role="document"
        >
          <EditModal
            setEditFormState={setEditFormState}
            post={post}
            postDispatch={postDispatch}
          />
        </Modal>
      </div>
      <button
        className="btn btn-danger p-2 m-2"
        onClick={() => setDeleteFormState(true)}
      >
        Delete
      </button>
      <div
        className="modal fade"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <Modal
          isOpen={deleteFormState}
          className="modal-dialog mt-5"
          role="document"
        >
          <DeleteModel setDeleteForm={setDeleteFormState} post_id={post.id} />
        </Modal>
      </div>
    </div>
  );
}

export default PostDetailOperations;
