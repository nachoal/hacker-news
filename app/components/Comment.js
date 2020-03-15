import React from "react";

export default function Comment({ by, time, text }) {
  let date = new Date(time * 1000);
  return (
    <React.Fragment>
      <p>
        by <a href={`/user?id=${by}`}>{by}</a> on {date.toLocaleString()}
      </p>
      <p>{text}</p>
    </React.Fragment>
  );
}
