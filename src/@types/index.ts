export type FilterItemType = { name: string; id: number};
export type FilterItemsListType = FilterItemType[];
export type TopicItemType = { name: string; id: number, description: string };
export type TopicItemsListType = TopicItemType[];

export type SubtopicType = {
  id: number;
  name: string;
  description: string;
  human_url: string;
  parent_id: number;
  parent_name: string;
  articles_count: number;
};

export type SubtopicsListType = SubtopicType[];

export type TopicsSectionType = {
  id: number;
  name: string;
  description: string;
  text: string;
  parent_id: number;
  parent_name: string;
  subtopics: SubtopicsListType;
};

export type TopicsSectionListType = TopicsSectionType[];

export type getTopicsDataPayload = {
  communityId: string;
};
