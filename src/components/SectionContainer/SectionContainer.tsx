import { FC } from "react";

import {FilterItemsListType, TopicItemsListType} from "@/@types";
import classNames from "classnames";
import Button, { ButtonType } from "../Button";
import styles from "./SectionContainer.module.scss";

type SectionContainerProps = {
  title: string;
  description: string;
  filters: FilterItemsListType;
  topics: TopicItemsListType;
  communityId?: string;
};
const SectionContainer: FC<SectionContainerProps> = ({
  title,
  description,
  filters,
  topics,
  communityId,
}) => {
  return (
    <div>
      <div>{title}</div>
      <div>{description}</div>
      <div className={classNames(styles.filterBlock, "flex flex-wrap gap-1.5")}>
        {filters.map(({ name, id }) => (
          <Button
            key={`subFilter_${id}`}
            title={name}
            onClick={() => {}}
            type={ButtonType.Secondary}
          />
        ))}
      </div>
      <div>
        {topics.map(({ name, id, description }) => (
          <div key={`subTitle_${id}`}>
            <div>{name}</div>
            <div>{description}</div>
            <div>{communityId}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionContainer;
