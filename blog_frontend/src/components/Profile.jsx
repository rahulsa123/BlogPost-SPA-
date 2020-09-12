import React, { useState } from "react";
import { useEffect } from "react";
import userService from "../services/userService";
import authservices from "../services/authservices";
import ProfileForm from "./ProfileForm";

function Profile(props) {
  const profileState = {
    first_name: "",
    last_name: "",
    profile: { image: "" },
  };
  const [profile, setprofile] = useState(profileState);

  useEffect(() => {
    async function getProfile() {
      const { data } = await userService.getProfile(
        authservices.getCurrentUserId()
      );
      setprofile(data);
    }
    if (authservices.getCurrentUserId()) getProfile();
  }, []);
  return (
    <div className="container m-5 row ">
      <div className="col-3 card p-0" style={{ height: "max-content" }}>
        <img
          src={profile.profile.image}
          className="card-img-top rounded p-2 "
          alt=""
          style={{ maxHeight: "250px" }}
        />
      </div>
      <div className="col card text-center p-0 m-3">
        <div className="card-header"> Profile </div>
        <div className="card-body">
          <ProfileForm profile={profile} setProfile={setprofile} />
        </div>
      </div>
    </div>
  );
}

export default Profile;
