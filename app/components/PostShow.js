import React from "react";
import { getPost } from "../utils/api";
import Post from "./Post";
import Loading from "./Loading";

export default class PostShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      post: {},
      error: null
    };
    this.updatePost = this.updatePost.bind(this);
    this.isLoading = this.isLoading.bind(this);
  }

  componentDidMount() {
    this.updatePost(this.state.post);
  }

  updatePost(post) {
    this.setState({
      post,
      error: null
    });
    if (Object.keys(this.state.post).length === 0) {
      getPost("22575775")
        .then(data => {
          this.setState({
            post: data
          });
        })
        .catch(() => {
          console.warn("Error fetching post", error);
          this.setState({
            error: `There was an error fetching the post`
          });
        });
    }
  }

  isLoading() {
    const { post, error } = this.state;

    return Object.keys(post).length === 0 && error === null;
  }

  render() {
    const { post, error } = this.state;
    const { title, descendants, url, by, time, id, kids, score } = post;
    return (
      <React.Fragment>
        {this.isLoading() && <Loading text="Fetching post" />}
        {error && <p className="center-text error">{error}</p>}

        {!(Object.keys(post).length === 0) && (
          <Post
            title={title}
            score={score}
            url={url}
            by={by}
            time={time}
            descendants={descendants}
            kids={kids}
            id={id}
          />
        )}
      </React.Fragment>
    );
  }
}
