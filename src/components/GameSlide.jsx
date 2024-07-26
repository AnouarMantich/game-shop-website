/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export const GameSlide = ({ game, toggleVideo, active, setIsPlaying }) => {
  return (
    <div className="gameSlider">
      <img src={game.img} alt="Game_Image" />
      <div className={`video ${active ? "active" : ""}`}>
        <iframe
          width="1200"
          height="720"
          src={game.trailer}
          title={game.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div className="content">
        <h3>{game.title}</h3>
        <p>{game.description}</p>
        <div className="buttons">
          <a href="#" className="orderBtn">
            Order Now
          </a>
          <a
            href="#"
            className={`playBtn ${active ? "active" : ""}`}
            onClick={() => {
              toggleVideo();
              setIsPlaying((isPlaying) => !isPlaying);
            }}
          >
            <span className="pause">
              <i className="bi bi-pause-fill"></i>
            </span>
            <span className="play">
              <i className="bi bi-play-fill"></i>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};
