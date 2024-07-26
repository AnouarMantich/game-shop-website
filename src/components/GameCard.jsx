/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from "react";
import "./GameCard.css";
import { GameRating } from "./GameRating";
import { AppContext } from "../App";
export const GameCard = ({ game }) => {
  const { library, setLibrary, bag, setBag } = useContext(AppContext);

  const handleAddLibrary = (game) => {
    setLibrary([...library, game]);
  };

  const handleRemoveFromLibrary = (game) => {
    setLibrary(library.filter((item) => item._id !== game._id));
  };

  const handleAddBag = (game) => {
    if (bag.includes(game)) return;
    setBag([...bag, game]);
  };

  return (
    <div className="col-xl-3 col-lg-4 col-md-6">
      <div className="gameCard">
        <img src={game.img} alt={game.title} className="img-fluid" />
        <a
          href="#"
          className={`like ${library.includes(game) ? "active" : ""}`}
          onClick={
            library.includes(game)
              ? () => handleRemoveFromLibrary(game)
              : () => handleAddLibrary(game)
          }
        >
          <i className="bi bi-heart-fill"></i>
        </a>
        <div className="gameFeature">
          <span className="gameType">{game.level}</span>
          <GameRating rating={game.rating} />
        </div>
        <div className="gameTitle mt-4 nb-3">{game.title}</div>
        <div className="gamePrice">
          {game.discount !== 0 && (
            <>
              <span className="discount">
                <i>{game.discount * 100}</i>
              </span>
              <span className="prevPrice">${game.price.toFixed(2)}</span>
            </>
          )}
          <span className="currentPrice">
            ${((1 - game.discount) * game.price).toFixed(2)}
          </span>
        </div>
        <a href="#" className="addBag" onClick={() => handleAddBag(game)}>
          <i className="bi bi-bag-plus-fill"></i>
        </a>
      </div>
    </div>
  );
};
