import React from "react";
import addAnime from "../../pages/Search/Search";
import "./renderAnime.css";

const RenderAnime = ({ item }) => {
  return (
    <div className="anime-card">
      <h4>{item.title}</h4>
      <h5>{item.title_japanese}</h5>
      <h6>{item.aired.string}</h6>
      <img
        src={item.images.jpg.image_url}
        alt={item.title}
      />
      <p>{item.synopsis}</p>
      <button onClick={addAnime}>Add</button>
    </div>
  );
};

export default RenderAnime;
