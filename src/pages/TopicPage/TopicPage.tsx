import { useEffect } from "react";
import { useParams } from "react-router-dom";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";

import {
  TopicsSelectors,
  getSubtopicsData,
} from "@/redux/reducers/topicsSlice.ts";
import Button, { ButtonType } from "@/components/Button";
import SectionContainer from "@/components/SectionContainer";
import styles from "./TopicPage.module.scss";

const TopicPage = () => {
  const dispatch = useDispatch();
  const { communityId, topicId } = useParams();
  const parsedTopicId = Number(topicId);

  const subtopicFilters = useSelector( (state) =>
    TopicsSelectors.getSubtopicsSectionData(state, parsedTopicId)
  );
  console.log(subtopicFilters);

  // const topics = useSelector(TopicsSelectors.getTopicsSectionData);

  useEffect(() => {
    if (communityId && parsedTopicId) {
      dispatch(
        getSubtopicsData({
          communityId,
          topicId: parsedTopicId,
        })
      );
    }
  }, [dispatch, communityId, parsedTopicId]);

  return (
    <div className="w-full flex flex-col">
      {subtopicFilters.length > 0 ? (
        <>
          <div
            className={classNames(styles.filterBlock, "flex flex-wrap gap-1.5")}
          >
            {subtopicFilters.map(({ name, id }) => (
              <Button
                key={`filter_${id}`}
                title={name}
                onClick={() => {}}
                type={ButtonType.Secondary}
              />
            ))}
          </div>
          <SectionContainer
            title={"title"}
            description={"description"}
            filters={subtopicFilters}
            topics={subtopicFilters}
          />
        </>
      ) : (
        <div>There are no subtopics</div>
      )}
    </div>
  );
};

export default TopicPage;
