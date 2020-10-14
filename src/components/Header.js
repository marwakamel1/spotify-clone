import React from "react";
import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { connect } from "react-redux";

function Header({ spotify, user }) {
  return (
    <div className="header">
      <div className="header_left">
        <SearchIcon />
        <input placeholder="Search for Artists,Songs,Albums" type="text" />
      </div>
      <div className="header_right">
        <Avatar src={user?.images[0]?.url} alt="dc" />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}
function mapStateToProps({ user }) {
  return { user: user?.user };
}
export default connect(mapStateToProps)(Header);
