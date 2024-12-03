import React from "react";
import SpotifyPlayer from "../SpotifyPlayer/SpotifyPlayer";
import "./FloatingWindow.css";

const FloatingWindow = ({ playlistId, onClose }) => {
  return (
    <div className="floating-window">
      <button className="close-button" onClick={onClose}>
        X
      </button>
      <SpotifyPlayer playlistId={playlistId} />
    </div>
  );
};

export default FloatingWindow;
