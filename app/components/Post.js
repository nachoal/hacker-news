import React from "react";

export default function Post({ title, descendants, url, by, time, id }) {
  let date = new Date(time * 1000);
  return (
    <React.Fragment>
      <a href={url}>{title}</a>
      <p>
        by <a href={`/user?id=${by}`}>{by}</a> on {date.toLocaleString()} with{" "}
        <a href={`/post?id=${id}`}>{descendants}</a> comments
      </p>
    </React.Fragment>
  );
}
