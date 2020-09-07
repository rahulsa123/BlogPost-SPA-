import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

function Time({ time, refer_to }) {
  const relativeTime = moment(time).fromNow();
  return (
    <span>
      <b>{refer_to} </b>
      {relativeTime}{" "}
    </span>
  );
}
Time.propTypes = {
  time: PropTypes.string.isRequired,
  refer_to: PropTypes.string.isRequired,
};
export default Time;
