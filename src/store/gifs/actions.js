import {
  GIFS_REQUEST_PENDING,
  GIFS_REQUEST_SUCCESS,
  GIFS_REQUEST_FAILURE,
  GET_GIFS_REQUEST,
} from "./constants";

export const getGifsPending = () => {
  return { type: GIFS_REQUEST_PENDING };
};

export const getGifsSuccess = (gifs) => {
  return { type: GIFS_REQUEST_SUCCESS, payload: gifs };
};

export const getGifsFailure = (error) => {
  return { type: GIFS_REQUEST_FAILURE, payload: error };
};

export const getGifsAction = () => {
  return { type: GET_GIFS_REQUEST };
};
