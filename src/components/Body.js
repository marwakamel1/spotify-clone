import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import Song from "./Song";
import { setPlaying, setItem } from "../actions";
function Body({ spotify, discoverWeekly, item, dispatch }) {
  const playSong = (id) => {
    console.log(id);
    spotify
      .play({
        uri: [`spotify:track:${id}`],
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch(setItem(r.item));
          dispatch(setPlaying(true));
        });
      });
  };
  const playPlaylist = (id) => {
    spotify
      .play({
        context_uri: `spotify:playlist:37i9dQZEVXcJZyENOWUFo7`,
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };
  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body_info">
        <img src={discoverWeekly?.images[0].url} alt="" />
        <div className="body_infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover weekly</h2>
          <p>{discoverWeekly?.description}</p>
        </div>
      </div>

      <div className="body_songs">
        <div className="body_icons">
          <PlayCircleFilledIcon
            onClick={playPlaylist}
            className="body_shuffle"
          />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>
        {discoverWeekly?.tracks.items.map((item, index) => (
          <Song track={item.track} playSong={playSong} key={index} />
        ))}
      </div>
    </div>
  );
}
function mapStateToProps({ discoverWeekly }) {
  return { discoverWeekly: discoverWeekly?.playlists };
}
export default connect(mapStateToProps)(Body);
