import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import {
  TopicsSectionListType,
  getTopicsDataPayload,
  TopicsSectionType,
} from "@/@types";
import { RootState } from "../store.ts";

type InitialState = { sectionData: TopicsSectionListType };

const initialState: InitialState = { sectionData: [] };

const topicsSlice = createSlice({
  name: "topics",
  initialState,
  reducers: {
    getTopicsData: (_, __: PayloadAction<getTopicsDataPayload>) => {},
    setTopicsData: (state, action: PayloadAction<TopicsSectionListType>) => {
      state.sectionData = action.payload;
    },
  },
});

export const { setTopicsData, getTopicsData } = topicsSlice.actions;
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
};
