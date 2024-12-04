import React from "react";

const SpotifyPlayer = ({ playlistId }) => {
  const src = `https://open.spotify.com/embed/playlist/${playlistId}?theme=0`;

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <iframe
        src={src}
        width="300"
        frameBorder="0"
        allowTransparency="true"
        allow="encrypted-media"
        title="Spotify Playlist"
        className="spotify-player"
      ></iframe>
    </div>
  );
};

export default SpotifyPlayer;
