import React from "react";
import { useNavigate } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  const navigate = useNavigate();

  const goTo = (id) => {
    if (id === "home") {
      navigate("/");
    }
    if (id === "about") {
      navigate("/about");
    }
    if (id === "anime-list") {
      navigate("/animelist");
    }
    if (id === "search") {
      navigate("/search");
    }
  };

  return (
    <div className="NavBar">
      <button
        id="home"
        onClick={(e) => goTo(e.target.id)}
      >
        Home
      </button>
      <button
        id="about"
        onClick={(e) => goTo(e.target.id)}
      >
        About
      </button>
      <button
        id="anime-list"
        onClick={(e) => goTo(e.target.id)}
      >
        Anime List
      </button>
      <button
        id="search"
        onClick={(e) => goTo(e.target.id)}
      >
        Search
      </button>
    </div>
  );
};
export default NavBar;
