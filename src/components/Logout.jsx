import React from "react";
import { useEffect } from "react";
import auth from "../services/authservices";
import Loading from "./common/Loading";

function Logout(props) {
  useEffect(() => {
    async function doLogout() {
      try {
        await auth.logout();
        window.location = "/";
      } catch (ex) {
        console.log(ex);
      }
    }
    doLogout();
  });
  return <Loading isLoading={"true"} />;
}

export default Logout;
