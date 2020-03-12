import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Top from "./components/Top";
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Top />;
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
