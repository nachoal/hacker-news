import React from "react";
import SimplePost from "./SimplePost";

function UserPosts({ submitted }) {
  return (
    <ul>
      {submitted.map((post, index) => {
        const { title, score, url, by, time, id, descendants } = post;
        return (
          <li key={index}>
            <SimplePost
              title={title}
              score={score}
              url={url}
              by={by}
              time={time}
              descendants={descendants}
              id={id}
            />
          </li>
        );
      })}
    </ul>
  );
}
export default function User({ about, created, karma, submitted, id }) {
  let date = new Date(created * 1000);
  return (
    <React.Fragment>
      <h1 className="header">{id}</h1>
      <div className="meta-info">
        joined {date.toLocaleString()} has {karma} karma
        <p>{about}</p>
      </div>
      <h3>Posts</h3>
      <UserPosts submitted={submitted} />
    </React.Fragment>
  );
}
