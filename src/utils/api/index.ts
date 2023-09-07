import { create } from "apisauce";

const API = create({
  baseURL: "http://127.0.0.1:7890/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

const getAllTopics = (community: string) => {
  return API.get("/threads/all/", { community });
};

const getArticles = (community: string, topics:number, limit = 10, ) => {
  console.log('requesting api')
  return API.get("/happifiers/list/", {
    limit,
    topics,
    community,
    user_access_token: null,
    next_page: null,
  });
}
export default { getArticles, getAllTopics };
