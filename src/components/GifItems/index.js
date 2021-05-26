import React from "react";
import PropTypes from "prop-types";

import "./GifItems.css";

const GifItems = ({ data }) => {
  const listGifs =
    data.length &&
    data.map((item) => (
      <div className="gif-item" key={item.id}>
        <img src={item.url} alt="" />
      </div>
    ));

  return <div className="gifs-grid">{listGifs}</div>;
};

GifItems.propTypes = {
  data: PropTypes.array.isRequired,
};

export default GifItems;
