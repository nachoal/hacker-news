import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Top from "./components/Top";
import PostShow from "./components/PostShow";
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <PostShow />;
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
