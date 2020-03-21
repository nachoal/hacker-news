import React from "react";
import { ThemeConsumer } from "../contexts/theme";
import { Link } from "react-router-dom";

export default function SimplePost({ title, descendants, url, by, time, id }) {
  let date = new Date(time * 1000);
  return (
    <ThemeConsumer>
      {({ theme }) => (
        <div className={`post bg-${theme}`}>
          <a href={url}>{title}</a>
          <p>
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
          </p>
        </div>
      )}
    </ThemeConsumer>
  );
}
