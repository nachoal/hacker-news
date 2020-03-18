// Base
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Styling
import "./index.css";

// Custom Components
import Nav from "./components/Nav";
import { ThemeProvider } from "./contexts/theme";
import Top from "./components/Top";
import New from "./components/New";
import PostShow from "./components/PostShow";
import UserShow from "./components/UserShow";
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: "light",
      toggleTheme: () => {
        this.setState(({ theme }) => ({
          theme: theme === "light" ? "dark" : "light"
        }));
      }
    };
  }
  render() {
    return (
      <Router>
        <ThemeProvider value={this.state}>
          <div className={this.state.theme}>
            <Nav />
            <Switch>
              <Route exact path="/" component={Top} />
              <Route exact path="/new" component={New} />
              <Route render={() => <h1>404</h1>} />
            </Switch>
          </div>
        </ThemeProvider>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
