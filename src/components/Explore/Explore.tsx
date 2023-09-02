import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";

import {
  TopicsSelectors,
  getTopicsData,
} from "@/redux/reducers/topicsSlice.ts";
import Button, { ButtonType } from "../Button";
import SectionContainer from "../SectionContainer";
import styles from "./Explore.module.scss";


const Explore = () => {
  const dispatch = useDispatch();
  const { communityId } = useParams();
  // const [filters, setFilters] = useState<FilterItemsListType>([]);
  // useEffect(() => {
  //   if (communityId) {
  //     const communityFilters = [
  //       { name: `View All`, id: -1 },
  //       ...MockFilters.map((filter) => ({ name: filter.name, id: filter.id })),
  //     ];
  //     setFilters(communityFilters);
  //   }
  // }, [communityId]);
  const filters = useSelector(TopicsSelectors.getTagsSectionData);
  const topics = useSelector(TopicsSelectors.getTopicsSectionData);

  useEffect(() => {
    if (communityId) {
      dispatch(
        getTopicsData({
          communityId,
        })
      );
    }
  }, [dispatch, communityId]);

  return (
    <div>
      <div className={classNames(styles.filterBlock, "flex flex-wrap gap-1.5")}>
        {filters.map(({ name, id }) => (
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
        filters={filters}
        topics={topics}
      />
    </div>
  );
};

export default Explore;
