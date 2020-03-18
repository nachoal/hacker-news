import React from "react";
import { ThemeConsumer } from "../contexts/theme";

export default function SimplePost({ title, descendants, url, by, time, id }) {
  let date = new Date(time * 1000);
  return (
    <ThemeConsumer>
      {({ theme }) => (
        <div className={`post bg-${theme}`}>
          <a href={url}>{title}</a>
          <p>
            by <a href={`/user?id=${by}`}>{by}</a> on {date.toLocaleString()}{" "}
            with <a href={`/post?id=${id}`}>{descendants}</a> comments
          </p>
        </div>
      )}
    </ThemeConsumer>
  );
}
