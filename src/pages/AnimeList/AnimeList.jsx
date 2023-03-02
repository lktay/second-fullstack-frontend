import React from "react";
import "./AnimeList.css";
import axios from "axios";
import { useState, useEffect } from "react";

const Database = "http://localhost:3001";

const AnimeList = () => {
  const [anime, setAnime] = useState([]);

  useEffect(() => {
    getAnime();
  }, []);
  const getAnime = async () => {
    try {
      const response = await axios.get(`${Database}/animelist`);
      setAnime(response.data);
    } catch (err) {
      console.error("Error: ", err);
    }
  };

  const completeAnime = async (id) => {
    const data = await fetch(`${Database}/animelist/complete/${id}`).then(
      (res) => res.json()
    );
    setAnime((anime) =>
      anime.map((anime) => {
        if (anime._id === data._id) {
          anime.complete = data.complete;
        }
        return anime;
      })
    );
  };

  const deleteAnime = async (id) => {
    const data = await fetch(`${Database}/animelist/delete/${id}`, {
      method: "DELETE",
    }).then((res) => res.json());

    setAnime((animes) => animes.filter((anime) => anime._id !== data._id));
  };

  return (
    <div>
      <h1>Your watchlist</h1>
      <div className="list-container">
        {anime.length > 0 ? (
          anime.map((anime) => (
            <div
              className={"anime-card " + (anime.complete ? "is-complete" : "")}
              key={anime._id}
              onClick={() => completeAnime(anime._id)}
            >
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
              <div
                className="delete-anime"
                onClick={() => deleteAnime(anime._id)}
              >
                x
              </div>
            </div>
          ))
        ) : (
          <p>There is nothing on your watchlist. Trying searching!</p>
        )}
      </div>
    </div>
  );
};

export default AnimeList;
