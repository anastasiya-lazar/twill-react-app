import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TopicsSectionListType, getTopicsDataPayload } from "@/@types";
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

export const TopicsSelectors = {
  getTagsSectionData: (state: RootState) => {
    const sectionData = state.topicsReducer.sectionData;
    return [
      { name: `View All`, id: -1 },
      ...sectionData.map((filter) => ({ name: filter.name, id: filter.id})),
    ];
  },
  getTopicsSectionData: (state: RootState) => {
    const sectionData = state.topicsReducer.sectionData;
    return sectionData.map((filter) => ({ name: filter.name, id: filter.id, description: filter.description }));
  }
};


