import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../pages/About/About";
import Search from "../pages/Search/Search";
import AnimeList from "../pages/AnimeList/AnimeList";
import App from "../App";

const RouteNavigator = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<App />}
      />
      <Route
        path="/about"
        element={<About />}
      />
      <Route
        path="/search"
        element={<Search />}
      />
      <Route
        path="/animelist"
        element={<AnimeList />}
      />
    </Routes>
  );
};

export default RouteNavigator;
