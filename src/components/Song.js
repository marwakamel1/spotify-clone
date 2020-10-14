import React from "react";
import SpotifyWebApi from "spotify-web-api-js";

function Song({ track, playSong }) {
  return (
    <div className="song" onClick={() => playSong(track.id)}>
      <img src={track.album.images[0].url} className="song_album" />
      <div className="songRow_info">
        <h1>{track.name}</h1>
        <p>
          {track.artists.map((artist) => artist.name).join(", ")}
          {track.album.name}
        </p>
      </div>
    </div>
  );
}

export default Song;
