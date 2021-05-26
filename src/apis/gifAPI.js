import axios from "axios";

export const getListGifData = () => {
  return axios.get(
    "https://api.giphy.com/v1/gifs/trending?api_key=dfQgRJCnTbmZIr6Z6QJ94S7pRNJsdch9&limit=16"
  );
};
