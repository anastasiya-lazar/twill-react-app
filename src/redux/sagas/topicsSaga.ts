import { all, takeLatest, call, put } from "redux-saga/effects";
import { ApiResponse } from "apisauce";
import { PayloadAction } from "@reduxjs/toolkit";
import {
  getTopicsData,
  setTopicsData,
  getSubtopicsData,
} from "../reducers/topicsSlice.ts";
import {
  getCommunities,
  setArticlesData,
  setCommunities,
} from "../reducers/topicsSlice.ts";
import {
  TopicsSectionListType,
  getTopicsDataPayload,
  ArticlesSectionType,
  CommunitiesListType,
  getSubtopicsDataPayload,
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

function* getSubtopicsWorker(action: PayloadAction<getSubtopicsDataPayload>) {
  const { communityId, topicId } = action.payload;
  const response: ApiResponse<TopicsSectionListType> = yield call(
    API.getAllTopics,
    communityId
  );
  if (response.ok && response.data) {
    yield put(setTopicsData(response.data));
    const subtopicsIds = response.data
      .find((topic) => topic.id === topicId)
      ?.subtopics?.map((subtopic) => subtopic.id);
    if (subtopicsIds) {
      const topicsResponse: ApiResponse<ArticlesSectionType>[] = yield all(
        subtopicsIds.map((subtopic) =>
          call(API.getArticles, communityId, subtopic)
        )
      );
      if (
        topicsResponse.every(
          (topicResponse) => topicResponse.ok && topicResponse.data
        )
      ) {
        const mappedTopicsResponse = topicsResponse.map(
          (topicResponse, index) => ({
            id: subtopicsIds[index],
            data: topicResponse.data,
          })
        );
        yield put(setArticlesData(mappedTopicsResponse));
      }
    }
  }
}

function* getCommunitiesWorker() {
  const response: ApiResponse<CommunitiesListType> = yield call(
    API.getAllCommunities
  );
  if (response.ok && response.data) {
    yield put(setCommunities(response.data));
  }
}

export default function* topicsSaga() {
  yield all([
    takeLatest(getTopicsData, getTopicsWorker),
    takeLatest(getCommunities, getCommunitiesWorker),
    takeLatest(getSubtopicsData, getSubtopicsWorker),
  ]);
}
