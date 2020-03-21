import React from "react";
import Comment from "./Comment";
import { Link } from "react-router-dom";

function Comments({ kids }) {
  return (
    <ul>
      {kids.map((comment, index) => {
        const { by, time, id, text } = comment;
        return (
          <li key={index}>
            <Comment by={by} time={time} id={id} text={text} />
          </li>
        );
      })}
    </ul>
  );
}
export default function Post({ title, descendants, url, by, time, id, kids }) {
  let date = new Date(time * 1000);
  return (
    <React.Fragment>
      <h1 className="header">
        <a href={url}>{title}</a>
      </h1>
      <div className="meta-info">
        by{" "}
        <Link
          to={{
            pathname: "/user",
            search: `?id=${by}`
          }}
        >
          {by}
        </Link>{" "}
        on {date.toLocaleString()} with{" "}
        <Link
          to={{
            pathname: "/post",
            search: `?id=${id}`
          }}
        >
          {descendants}
        </Link>{" "}
        comments
      </div>
      <Comments kids={kids} />
    </React.Fragment>
  );
}
