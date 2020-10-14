import React from "react";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { connect } from "react-redux";

function Sidebar({ playlists }) {
  return (
    <div className="sidebar">
      <img
        className="sidebar_logo"
        src="https://yungcitizen.com/wp-content/uploads/2018/09/spotify-logo-horizontal-white.png"
        alt=""
      />
      <SidebarOption Icon={HomeIcon} title="Home" />
      <SidebarOption Icon={SearchIcon} title="Search" />
      <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />
      <br />
      <strong className="side_title">PLAYLISTS</strong>
      <hr />
      {playlists?.items?.map((playlist, index) => (
        <SidebarOption title={playlist.name} key={index} />
      ))}
    </div>
  );
}
function mapStateToProps({ playlists }) {
  return { playlists: playlists.playlists };
}
export default connect(mapStateToProps)(Sidebar);
