import React from "react";
import { getTopPosts } from "../utils/api";
import SimplePost from "./SimplePost";

function PostsList({ posts }) {
  return (
    <ul>
      {posts.map((post, index) => {
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

export default class Top extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      error: null
    };

    this.updatePosts = this.updatePosts.bind(this);
  }

  componentDidMount() {
    this.updatePosts(this.state.posts);
  }

  updatePosts(posts) {
    this.setState({
      posts,
      error: null
    });
    if (!Object.keys(this.state.posts).length) {
      getTopPosts()
        .then(data => {
          this.setState({
            posts: data
          });
        })
        .catch(() => {
          console.warn("Error fetching top posts", error);
          this.setState({
            error: `There was an error fetching the posts`
          });
        });
    }
  }

  render() {
    const { posts, error } = this.state;
    return (
      <React.Fragment>
        {error && <p className="center-text error">{error}</p>}
        <PostsList posts={posts} />
      </React.Fragment>
    );
  }
}
