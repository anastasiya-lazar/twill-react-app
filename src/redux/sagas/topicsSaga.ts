import { all, takeLatest, call, put } from "redux-saga/effects";
import { ApiResponse } from "apisauce";
import { PayloadAction } from "@reduxjs/toolkit";
import { getTopicsData, setTopicsData } from "../reducers/topicsSlice.ts";
import { TopicsSectionListType, getTopicsDataPayload } from "@/@types";
import API from "@/utils/api";

function* getTopicsWorker(action: PayloadAction<getTopicsDataPayload>) {
  const { communityId } = action.payload;
  const response: ApiResponse<TopicsSectionListType> = yield call(
    API.getAllTopics,
    communityId
  );
  if (response.ok && response.data) {
    yield put(setTopicsData(response.data));
  }
}

export default function* topicsSaga() {
  yield all([takeLatest(getTopicsData, getTopicsWorker)]);
}
