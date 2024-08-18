import { createSlice, PayloadAction, createSelector } from "@reduxjs/toolkit";
import {
  TopicsSectionListType,
  getTopicsDataPayload,
  TopicsSectionType,
  getSubtopicsDataPayload,
  ArticlesSectionListType,
  CommunitiesListType,
  getArticlesDataPayload,
  ArticlesByTopicSectionType,
} from "@/@types";
import { RootState } from "../store.ts";
import {get} from "lodash";
type InitialState = { sectionData: TopicsSectionListType, sectionArticlesData: ArticlesSectionListType, communities: CommunitiesListType };

const initialState: InitialState = { sectionData: [], sectionArticlesData: [], communities: [] };

const topicsSlice = createSlice({
  name: "topics",
  initialState,
  reducers: {
    getTopicsData: (_, __: PayloadAction<getTopicsDataPayload>) => {},
    getSubtopicsData: (_, __: PayloadAction<getSubtopicsDataPayload>) => {},
    setTopicsData: (state, action: PayloadAction<TopicsSectionListType>) => {
      state.sectionData = action.payload;
    },
    getArticlesData: (_, __: PayloadAction<getArticlesDataPayload>) => {},
    setArticlesData: (
      state,
      action: PayloadAction<ArticlesSectionListType>
    ) => {
      state.sectionArticlesData = action.payload;
    },
    getCommunities: (_, __: PayloadAction<undefined>) => {},
    setCommunities: (
      state,
      action: PayloadAction<CommunitiesListType>
    ) => {
      state.communities = action.payload;
    }
  },
});

export const {
  setTopicsData,
  getTopicsData,
  getSubtopicsData,
  setArticlesData,
  getArticlesData,
  setCommunities ,
  getCommunities,
} = topicsSlice.actions;
export default topicsSlice.reducer;

const selectTopicsSectionData = (state: RootState) =>
  state.topicsReducer.sectionData;

export const TopicsSelectors = {
  getTagsSectionData: createSelector(
    [selectTopicsSectionData], // List of input selectors
    (sectionData: TopicsSectionListType) => [
      { name: `View All`, id: -1 },
      ...sectionData.map((filter) => ({ name: filter.name, id: filter.id })),
    ]
  ),
  getTopicsSectionData: createSelector(
    [selectTopicsSectionData], // List of input selectors
    (sectionData: TopicsSectionType[]) =>
      sectionData.map((filter) => ({
        name: filter.name,
        id: filter.id,
        description: filter.description,
      }))
  ),

  getSubtopicsSectionData: createSelector(
    [state => state.topicsReducer.sectionData, (_, topicId) => topicId],
    (sectionData: TopicsSectionType[], topicId) => {
      const topic = sectionData.find((section) => section.id === topicId);
      return topic && topic.subtopics ? topic.subtopics.map((subtopic) => ({
          name: subtopic.name,
          id: subtopic.id,
          description: subtopic.description,
        })) : [];
    }
  ),

  getArticlesSectionDataByTopic: (topicId: number) => (state: RootState) => {
    const sectionArticlesData: ArticlesByTopicSectionType[] =
      state.topicsReducer.sectionArticlesData;
    const section = sectionArticlesData.find((article) => article.id === topicId);

    return get(section,"data", null);
  },
  getCommunities: (state: RootState) => state.topicsReducer.communities,
};
