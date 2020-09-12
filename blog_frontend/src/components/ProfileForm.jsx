import React, { useEffect, useState, useRef } from "react";
import Joi from "joi-browser";
import useForm from "./common/useForm";
import _ from "lodash";
import userService from "../services/userService";
import { toast } from "react-toastify";
function ProfileForm(props) {
  const schema = {
    first_name: Joi.string().required().label("First Name"),
    last_name: Joi.string().required().label("Last name"),
  };
  const doSubmit = async (state, dispatch) => {
    const data = { ...state.data };
    try {
      if (data.first_name === props.profile.first_name) delete data.first_name;
      if (data.last_name === props.profile.last_name) delete data.last_name;
      if (!_.isEmpty(data)) {
        await userService.updateProfile(props.profile.id, data);
        profileForm.dispatch({
          type: "SET_DATA",
          payload: state.data,
        });

        toast.success("Profile updated");
      }
    } catch (ex) {
      console.log(ex, data);
    }
  };
  const initialState = {
    first_name: props.profile.first_name,
    last_name: props.profile.last_name,
  };
  const profileForm = useForm(initialState, schema, doSubmit);
  const profilePicRef = useRef(null);
  const [picUploading, setpicUploading] = useState(false);
  const handleProfilePic = async (event) => {
    if (profilePicRef === null) return;
    try {
      setpicUploading(true);
      const { data } = await userService.updateProfilePic(props.profile.id, {
        "profile.image": profilePicRef,
      });
      props.setProfile(data);
      setpicUploading(false);
      toast.success("Profile pic updated");
    } catch (ex) {
      console.log(ex);
    }
  };
  useEffect(() => {
    profileForm.dispatch({
      type: "SET_DATA",
      payload: {
        first_name: props.profile.first_name,
        last_name: props.profile.last_name,
      },
    });
  }, [props.profile]);
  return (
    <>
      <form onSubmit={profileForm.handleSubmit}>
        {profileForm.renderInput("first_name", "First Name")}
        {profileForm.renderInput("last_name", "Last Name")}
        {profileForm.renderSubmitButton("Update profile")}
      </form>
      <div className="class-form mb-2 mt-2">
        <label htmlFor={"profile.image"}>
          <b>{"Profile Pic"}</b>
        </label>
        <input
          label={"Profile Pic"}
          name={"profile.image"}
          id={"profile.image"}
          className="form-control"
          ref={profilePicRef}
          type={"file"}
        />
        <button
          className="btn btn-primary m-2"
          type="button"
          onClick={handleProfilePic}
        >
          {picUploading && (
            <>
              <span
                className="spinner-grow spinner-grow-sm mr-2"
                role="status"
                aria-hidden="true"
              ></span>
              {"Uploading..."}
            </>
          )}
          {!picUploading && <>{"Upload"}</>}
        </button>
      </div>
    </>
  );
}

export default ProfileForm;
