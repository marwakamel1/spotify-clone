import React from "react";
import { connect } from "react-redux";
import Sidebar from "./Sidebar";
import Body from "./Body";
import Footer from "./Footer";
function Player({ spotify }) {
  return (
    <div className="player">
      <div className="player_body">
        <Sidebar />
        <Body spotify={spotify} />
        <Footer spotify={spotify} />
      </div>
    </div>
  );
}

export default connect()(Player);
