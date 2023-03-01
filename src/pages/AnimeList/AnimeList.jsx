import React from "react";
import "./AnimeList.css";
import axios from "axios";
import { useState, useEffect } from "react";

const Database = "http://localhost:3001";

const AnimeList = () => {
  const [anime, setAnime] = useState([]);

  useEffect(() => {
    const getAnime = async () => {
      try {
        const response = await axios.get(`${Database}/animelist`);
        setAnime(response.data);
      } catch (err) {
        console.error("Error: ", err);
      }
    };

    getAnime();
  }, []);
  console.log(anime);
  return (
    <div>
      <h1>Your watchlist</h1>
      {anime.map((anime) => (
        <div
          className="anime-card"
          key={anime._id}
        >
          <div className="checkbox"></div>
          <div className="text">
            <img
              width="150px"
              src={anime.imageUrl}
              alt={anime.title_english}
            />
            <h3>{anime.title_english}</h3>
            <h4>{anime.title_japanese}</h4>
            <p>{anime.aired}</p>
          </div>
          <div className="delete-anime">x</div>
        </div>
      ))}
    </div>
  );
};

export default AnimeList;
