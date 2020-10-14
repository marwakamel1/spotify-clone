import React, { useEffect, useState } from "react";
import { getTokenFromUrl } from "../spotify";
import Login from "./Login";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { connect } from "react-redux";
import { setUser, setToken, setPlaylists, setDiscoverWeekly } from "../actions";
const spotify = new SpotifyWebApi();
function App({ dispatch, user, token }) {
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    if (_token) {
      dispatch(setToken(_token));
      console.log(_token);
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch(setUser(user));
      });
      spotify.getUserPlaylists().then((playLists) => {
        dispatch(setPlaylists(playLists));
      });
      spotify.getPlaylist("37i9dQZF1DWZd79rJ6a7lp").then((playlists) => {
        dispatch(setDiscoverWeekly(playlists));
      });
    }
  }, [token]);
  return (
    <div className="app">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

function mapStateToProps({ token, user }) {
  return { user, token };
}
export default connect(mapStateToProps)(App);
