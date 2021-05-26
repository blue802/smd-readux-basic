import React from "react";
import "./GifsGrid.css";

const GifsGrid = ({ data }) => {
  const listGifs =
    data.length &&
    data.map((item) => (
      <div className="gif-item" key={item.id}>
        <img src={item.url} alt="" />
      </div>
    ));

  return <div className="gifs-grid">{listGifs}</div>;
};

export default GifsGrid;
