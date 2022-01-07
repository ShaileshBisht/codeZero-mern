import React from "react";
import "./TopBar.css";
import { Link } from "react-router-dom";

function TopBar() {
  return (
    <div className="topBar ">
      <div className="topBar__container wrapper">
        <div className="topBar__container-left">
          <Link className="link-Style" to="/">
            <h2 className="topBar__container-left-logo">CodeZero</h2>
          </Link>
        </div>
        <div className="topBar__container-right">
          <Link className="link-Style" to="/alluser">
            <button className="topBar__container-right-btn">
              View all Form
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
