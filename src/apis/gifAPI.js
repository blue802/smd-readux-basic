import axios from "axios";

export const getListGifData = () => {
  return axios.get(
    `${process.env.REACT_APP_API}/gifs/trending?api_key=${process.env.REACT_APP_API_KEY}&limit=16`
  );
};
