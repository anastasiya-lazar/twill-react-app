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

export type ArticleType = {
  publisher?: string;
  publisher_name?: string;
  publisher_image?: string;
  publisher_info?: string;
  authors: {author_name: string}[];
  experts: {expert_name: string, expert_link?: string}[];
  image: string;
  og_image: string;
  right_rail_image: string;
  date: string;
  id: number;
  title: string;
  human_url: string;
  description: string;
  communities: {id: number, community_id: string, name: string}[];
  content_type?: string;
  suggested_index: number;
  audio_duration?: string;
  has_interactions: boolean;
  tags: SubtopicType[];
  replies: number;
  reactions: number;
  reacted_by_me: boolean;
  top_reactions?: [];
  model_type: string;
  is_bookmarked: boolean;
  happifier_type: string;
  score: number;
  likes: number;
}

export type ArticlesSectionType = {
  records: ArticleType[];
  next_page: string;
  context: object;
};

export type ArticlesByTopicSectionType = {
  topics: string;
  articles_section_data: ArticlesSectionType;
};

export type ArticlesSectionListType = ArticlesByTopicSectionType[];

export type getArticlesDataPayload = {
  communityId: string;
  topics: string;
  limit?: number;
};