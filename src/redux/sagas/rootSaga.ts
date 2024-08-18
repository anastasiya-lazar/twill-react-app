import { all } from "redux-saga/effects";
import topicsSaga from "./topicsSaga.ts";

export default function* rootSaga() {
  yield all([topicsSaga()]);
}
