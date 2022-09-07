import React from "react";

const Waves = ({ currentSong }) => {
  const { color } = currentSong;
  return (
    <div className="ocean" style={{ background: `${color[0]}` }}>
      <div className="wave" style={{ background: `${color[1]}` }}></div>
      <div className="wave" style={{ background: `${color[1]}` }}></div>
    </div>
  );
};

export default Waves;
