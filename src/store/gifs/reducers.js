import {
  GIFS_REQUEST_PENDING,
  GIFS_REQUEST_SUCCESS,
  GIFS_REQUEST_FAILURE,
} from "./constants";

const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

export default function gifsReducer(state = initialState, action) {
  switch (action.type) {
    case GIFS_REQUEST_PENDING: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case GIFS_REQUEST_SUCCESS: {
      return {
        data: action.payload,
        isLoading: false,
      };
    }

    case GIFS_REQUEST_FAILURE: {
      return {
        ...state,
        error: action.payload,
      };
    }

    default:
      return state;
  }
}
