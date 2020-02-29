import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h1>Hacker News</h1>;
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
