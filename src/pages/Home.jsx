/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Home.css";

import GameSwiper from "../components/GameSwiper";
import { GameCard } from "../components/GameCard";

export const Home = ({ games, reference }) => {
  return (
    <section id="home" className="home active" ref={reference}>
      <div className="container-fluid">
        <div className="row ">
          <GameSwiper games={games} />
        </div>
        <div className="row mb-2 mt-2">
          <div className="col-lg-6">
            <h2 className="sectionTitle">Games on promotion</h2>
          </div>
          <div className="col-lg-6 d-flex justify-content-end align-items-center">
            <a href="#" className="viewMore">
              View More Games <i className="bi bi-arrow-right"> </i>
            </a>
          </div>
        </div>
        <div className="row">
          {games.slice(0, 4).map((game) => (
            <GameCard key={game._id} game={game} />
          ))}
        </div>
      </div>
    </section>
  );
};
