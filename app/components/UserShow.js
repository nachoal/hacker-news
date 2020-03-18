import React from "react";
import { getUser } from "../utils/api";
import User from "./User";
import Loading from "./Loading";

export default class PostShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
      error: null
    };
    this.updateUser = this.updateUser.bind(this);
    this.isLoading = this.isLoading.bind(this);
  }

  componentDidMount() {
    this.updateUser(this.state.user);
  }

  updateUser(user) {
    this.setState({
      user,
      error: null
    });
    if (Object.keys(this.state.user).length === 0) {
      getUser("raspasov")
        .then(data => {
          this.setState({
            user: data
          });
        })
        .catch(() => {
          console.warn("Error fetching user", error);
          this.setState({
            error: `There was an error fetching the user`
          });
        });
    }
  }

  isLoading() {
    const { user, error } = this.state;

    return Object.keys(user).length === 0 && error === null;
  }

  render() {
    const { user, error } = this.state;

    const { about, created, karma, submitted, id } = user;

    return (
      <React.Fragment>
        {this.isLoading() && <Loading text="Fetching user" />}
        {error && <p className="center-text error">{error}</p>}

        {!(Object.keys(user).length === 0) && (
          <User
            about={about}
            karma={karma}
            submitted={submitted}
            created={created}
            id={id}
          />
        )}
      </React.Fragment>
    );
  }
}
