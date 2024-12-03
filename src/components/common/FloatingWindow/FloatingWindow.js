import React, { useState } from "react";
import SpotifyPlayer from "../SpotifyPlayer/SpotifyPlayer";
import { Tooltip } from "react-tooltip";
import "./FloatingWindow.css";

const FloatingWindow = ({ playlistId }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`floating-window ${isOpen ? "open" : "closed"}`}>
      <button
        className="close-button"
        onClick={handleToggle}
        data-tooltip-id="toggle-tooltip"
        data-tooltip-content={!isOpen ? "Open Player" : ""}
      >
        {isOpen ? "X" : "<"}
      </button>
      <Tooltip id="toggle-tooltip" />
      {isOpen && <SpotifyPlayer playlistId={playlistId} />}
    </div>
  );
};

export default FloatingWindow;
