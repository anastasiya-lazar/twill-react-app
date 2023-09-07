import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  ArticlesByTopicSectionType,
  ArticlesSectionListType,
  getArticlesDataPayload,
} from "@/@types";
import { RootState } from "../store.ts";

type InitialState = { sectionArticlesData: ArticlesSectionListType };

const initialState: InitialState = { sectionArticlesData: [] };

const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    getArticlesData: (_, __: PayloadAction<getArticlesDataPayload>) => {},
    setArticlesData: (
      state,
      action: PayloadAction<ArticlesSectionListType>
    ) => {
      state.sectionArticlesData = action.payload;
    },
  },
});

export const { setArticlesData, getArticlesData } = articlesSlice.actions;
export default articlesSlice.reducer;

export const ArticlesSelectors = {
  getArticlesSectionDataByTopic: (topicId: number) => (state: RootState) => {
    const sectionArticlesData: ArticlesByTopicSectionType[] =
      state.articlesReducer.sectionArticlesData;
    return sectionArticlesData
      ? sectionArticlesData.find((filter) => filter.id === topicId)?.data
      : undefined;
  },
};
