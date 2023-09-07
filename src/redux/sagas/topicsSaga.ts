import { all, takeLatest, call, put } from "redux-saga/effects";
import { ApiResponse } from "apisauce";
import { PayloadAction } from "@reduxjs/toolkit";
import { getTopicsData, setTopicsData } from "../reducers/topicsSlice.ts";
import { setArticlesData } from "../reducers/articlesSlice.ts";
import {
  TopicsSectionListType,
  getTopicsDataPayload,
  ArticlesSectionType,
} from "@/@types";
import API from "@/utils/api";

function* getTopicsWorker(action: PayloadAction<getTopicsDataPayload>) {
  const { communityId } = action.payload;
  const response: ApiResponse<TopicsSectionListType> = yield call(
    API.getAllTopics,
    communityId
  );
  if (response.ok && response.data) {
    yield put(setTopicsData(response.data));
    const topicsIds = response.data.map((topic) => topic.id);
    const topicsResponse: ApiResponse<ArticlesSectionType>[] = yield all(
      topicsIds.map((topic) => call(API.getArticles, communityId, topic))
    );
    if (
      topicsResponse.every(
        (topicResponse) => topicResponse.ok && topicResponse.data
      )
    ) {
      const mappedTopicsResponse = topicsResponse.map(
        (topicResponse, index) => ({
          id: topicsIds[index],
          data: topicResponse.data,
        })
      );
      yield put(setArticlesData(mappedTopicsResponse));
    }
  }
}

export default function* topicsSaga() {
  yield all([takeLatest(getTopicsData, getTopicsWorker)]);
}
