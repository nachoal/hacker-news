import React from "react";
import { ThemeConsumer } from "../contexts/theme";
import { NavLink } from "react-router-dom";

const activeStyle = {
  color: "#01e412",
  textDecoration: "underline",
  fontWeight: "bolder"
};

export default function Nav() {
  return (
    <ThemeConsumer>
      {({ theme, toggleTheme }) => (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="/">
            Hacker News
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <NavLink
                  className="nav-link"
                  activeStyle={activeStyle}
                  exact
                  to="/"
                >
                  Top
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink
                  className="nav-link"
                  activeStyle={activeStyle}
                  to="/new"
                >
                  New
                </NavLink>
              </li>
            </ul>
            <button id="nav" style={{ fontSize: 30 }} onClick={toggleTheme}>
              {theme === "light" ? "🔦" : "💡"}
            </button>
          </div>
        </nav>
      )}
    </ThemeConsumer>
  );
}
