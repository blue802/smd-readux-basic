import { all, call, put, takeLatest } from "redux-saga/effects";

import { getGifsPending, getGifsSuccess, getGifsFailure } from "./actions";
import { getListGifData } from "../../apis/gifAPI";
import { GET_GIFS_REQUEST } from "./constants";

function* getListGifAsync() {
  try {
    yield put(getGifsPending());
    const data = yield call(getListGifData);
    yield put(getGifsSuccess(data.data.data));
  } catch (error) {
    yield put(getGifsFailure(error));
  }
}

function* watchFetchListGifAsync() {
  yield takeLatest(GET_GIFS_REQUEST, getListGifAsync);
}

export default function* rootSaga() {
  yield all([watchFetchListGifAsync()]);
}
