import React from "react";

export default function Post({ title, score, url, by, time }) {
  let date = new Date(time * 1000);
  return (
    <React.Fragment>
      <a href={url}>{title}</a>
      <p>
        by {by} on {date.toUTCString()} with{" "}
        <u>TODO:TRAVERSE TREE AND COUNT COMMENTS</u> comments
      </p>
    </React.Fragment>
  );
}
