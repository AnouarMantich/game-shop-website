import React, { useEffect, useState } from "react";
import "./Categories.css";
import filterListData from "../data/filterListData";
import { GameCard } from "../components/GameCard";

export const Categories = ({ games, reference }) => {
  const [filters, setFilters] = useState(filterListData);
  const [data, setData] = useState(games);

  useEffect(() => {
    setData(games);
  }, [games]);

  const handleFilterGames = (category) => {
    setFilters(
      filters.map((filter) => {
        filter.active = false;
        if (filter.name === category) {
          filter.active = true;
        }
        return filter;
      })
    );

    if (category === "All") setData(games);
    else setData(games.filter((game) => game.category === category));
  };

  const [text, setText] = useState("");

  const handleSearch = (e) => {
    setData(
      games.filter((game) =>
        game.title.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
    setText(e.target.value);
  };

  return (
    <section id="categories" className="categories" ref={reference}>
      <div className="container-fluid mt-2">
        <div className="row">
          <div className="col-lg-8 d-flex align-items-center justify-content-start">
            <ul className="filters">
              {filters.map((filter) => (
                <li
                  key={filter._id}
                  className={`${filter.active ? "active" : ""}`}
                  onClick={() => handleFilterGames(filter.name)}
                >
                  {filter.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-lg-4 d-flex align-items-center justify-content-end">
            <div className="search">
              <div className="bi bi-search">
                <input
                  type="text"
                  name="search"
                  placeholder=" Search"
                  value={text}
                  onChange={handleSearch}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {data.map((game) => (
            <GameCard key={game._id} game={game} />
          ))}
        </div>
      </div>
    </section>
  );
};
