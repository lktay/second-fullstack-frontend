import React from "react";
import "./Search.css";
import axios from "axios";
import { useState } from "react";
import RenderAnime from "../../components/renderAnime/renderAnime";
const Search = () => {
  const [searchKey, setSearchKey] = useState("");
  const [animeData, setAnimeData] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [anime, setAnime] = useState([]);

  const Database = "http://localhost:3001";

  const addAnime = async ({ item }) => {
    const data = await fetch(`${Database}/animelist/new`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title_english: item.title,
        title_japanese: item.title_japanese,
        imageUrl: item.images.jpg.image_url,
        aired: item.aired.string,
      }),
    }).then((res) => res.json());

    setAnime([...anime, data]);
  };

  const searchAnime = async (e) => {
    if (searchKey !== "") {
      e.preventDefault();
      const response = await axios.get(
        `https://api.jikan.moe/v4/anime?q=${searchKey}&sfw`
      );
      console.log(response.data.data);
      setAnimeData(response.data.data);
      setHasSearched("true");
    } else setHasSearched("false");
  };

  const getAnime = (anime) => {
    return (
      <RenderAnime
        item={anime}
        key={anime.id}
      />
    );
  };

  // const addAnime = async () => {
  //   const data = await fetch(`${Database}/animelist/new`);
  // };

  return (
    <div className="search-container">
      <h2>Anime Search</h2>
      <form onSubmit={searchAnime}>
        <input
          type="text"
          placeholder="What are we looking for...?"
          onChange={(e) => setSearchKey(e.target.value)}
        ></input>
        <button
          className="search-btn"
          type={"submit"}
        >
          Search
        </button>
      </form>
      {hasSearched ? animeData.map((anime) => getAnime(anime)) : <></>}
    </div>
  );
};

export default Search;
