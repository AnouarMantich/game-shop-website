import React, { useContext, useEffect, useRef, useState } from "react";
import "./Main.css";
import SideMenu from "../components/SideMenu";
import { Header } from "../components/Header";
import { Home } from "./Home";
import { Categories } from "./Categories";
import { MyLibrary } from "./MyLibrary";
import { Bag } from "./Bag";
import { AppContext } from "../App";

const Main = () => {
  const { library, bag } = useContext(AppContext);
  const [activeBar, setActiveBar] = useState(false);
  const [games, setGames] = useState([]);

  const homeRef = useRef();
  const categoriesRef = useRef();
  const libraryRef = useRef();
  const bagRef = useRef();

  const sections = [
    {
      name: "home",
      ref: homeRef,
      active: true,
    },
    {
      name: "categories",
      ref: categoriesRef,
      active: false,
    },
    {
      name: "library",
      ref: libraryRef,
      active: false,
    },
    {
      name: "bag ",
      ref: bagRef,
      active: false,
    },
  ];

  const handleSectionActive = (target) => {
    sections.map((section) => {
      section.ref.current.classList.remove("active");
      if (section.ref.current.id === target) {
        section.ref.current.classList.add("active");
      }
      return section;
    });
  };

  const fetchGames = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/gamesData.json");
      const data = await res.json();
      setGames(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleToggleActive = () => {
    setActiveBar((status) => !status);
  };

  useEffect(() => {
    fetchGames();
  }, []);

  return (
    <main>
      <SideMenu activeBar={activeBar} sectionActive={handleSectionActive} />
      <div className={`banner ${activeBar ? "active" : ""}`}>
        <Header toggleBar={handleToggleActive} />

        <div className="fluid-container">
          <Home games={games} reference={homeRef} />
          <Categories games={games} reference={categoriesRef} />
          <MyLibrary games={library} reference={libraryRef} />
          <Bag games={bag} reference={bagRef} />
        </div>
      </div>
    </main>
  );
};

export default Main;
