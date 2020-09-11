import { useHistory } from "react-router-dom";
import { useEffect } from "react";

function useDataFetch(dispatch, getData, ...rest) {
  const history = useHistory();

  useEffect(() => {
    let didCancel = false;
    async function callBackEnd() {
      dispatch({ type: "FETCH_INIT" });
      try {
        const { data } = await getData(...rest);

        if (!didCancel) dispatch({ type: "FETCH_SUCCESS", payload: data });
      } catch (error) {
        if (!didCancel) {
          dispatch({ type: "FETCH_FAILURE" });
          history.push("/not-found");
        }
      }
    }
    callBackEnd();
    return () => {
      didCancel = true;
    };
  }, [history]);
}

export default useDataFetch;
