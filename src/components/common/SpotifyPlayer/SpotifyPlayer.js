import React from "react";

const SpotifyPlayer = ({ playlistId }) => {
  const src = `https://open.spotify.com/embed/playlist/${playlistId}`;

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <iframe
        src={src} // Usamos la variable dinámica aquí
        width="300"
        height="380"
        allowTransparency="true" // Cambié `allowtransparency` a camelCase
        allow="encrypted-media"
        title="Spotify Playlist"
      ></iframe>
    </div>
  );
};

export default SpotifyPlayer;
