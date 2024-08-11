import { FC } from "react";

import { FilterItemsListType, TopicItemsListType } from "@/@types";
import classNames from "classnames";
import Button, { ButtonType } from "../Button";
import styles from "./SectionContainer.module.scss";

import ArticlesContainer from "@/components/ArticlesContainer";

type SectionContainerProps = {
  title: string;
  description: string;
  filters: FilterItemsListType;
  topics: TopicItemsListType;
};
const SectionContainer: FC<SectionContainerProps> = ({
  title,
  description,
  filters,
  topics,
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
            <div>{id}</div>
            <div>{name}</div>
            <div>{description}</div>
            <ArticlesContainer topicId={id} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionContainer;
