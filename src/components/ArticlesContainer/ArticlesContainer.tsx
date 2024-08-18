import {FC, ReactNode} from "react";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import styles from "./ArticlesContainer.module.scss";
import classNames from "classnames";

import { BeatLoader } from "react-spinners";
import { TopicsSelectors } from "@/redux/reducers/topicsSlice.ts";
import { ArticleType } from "@/@types"; // Import BeatLoader from react-spinners

type ArticlesContainerProps = {
  topicId: number;
};

SwiperCore.use([Navigation]);
type ArticleCardProps = {
  article: ArticleType;
}

type RecordsSlideType = {[k in string]:ReactNode}[]

const ArticleCard: FC<ArticleCardProps> = ({ article }) => {
  const { image, title, communities } = article;
  return (
    <div className="cover-slide">
      <img className={"h-20"} src={image} alt={title} />
      <div>{title}</div>
      {communities.map(({ name }) => (
        <div key={`community_${name}`}>{name}</div>
      ))}
    </div>
  );
};

const ArticlesContainer: FC<ArticlesContainerProps> = ({ topicId }) => {
  console.log(topicId);
  const articles = useSelector(
    TopicsSelectors.getArticlesSectionDataByTopic(topicId)
  );
  console.log(articles);

  const renderSlides = () => {
    if (articles && articles.records) {
      const formattedArticles: RecordsSlideType =
        articles.records.reduce((prevArr: RecordsSlideType, article: ArticleType) => {
        if (
          !prevArr.length ||
          prevArr.length === 1 ||
          prevArr[prevArr.length - 1].bottom
        ) {
          return [
            ...prevArr,
            {
              top: <ArticleCard article={article} />,
              bottom: null,
            },
          ];
        } else {
          const formattedLastItem = {
            ...prevArr[prevArr.length - 1],
            bottom: <ArticleCard article={article} />,
          };
          return [...prevArr.slice(0, prevArr.length - 1), formattedLastItem];
        }
      }, []);

      return formattedArticles.map(({ top, bottom }, i) => {
        return (
          <SwiperSlide
            key={`slide_${i}`}
            className={
              !bottom ? styles["special-slide"] : styles["regular-slide"]
            }
          >
            {top}
            {bottom}
          </SwiperSlide>
        );
      });
    } else {
      console.log("skeleton");
      return (
        <SwiperSlide>
          <div className="cover-slide">
            <div className={"h-20 w-20 bg-gray-200"}></div>
            <BeatLoader color={"#123abc"} loading={true} />
          </div>
        </SwiperSlide>
      );
    }
  };

  return (
    <Swiper
      loop={false}
      slidesPerView={3}
      spaceBetween={30}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      className={"articles-slider"}
    >
      {renderSlides()}
      <div className="flex mt-7">
        <div
          className={classNames(
            "swiper-button-next",
            styles["navigation-btn"],
            styles["next"]
          )}
        ></div>
        <div
          className={classNames(
            "swiper-button-prev",
            styles["navigation-btn"],
            styles["prev"]
          )}
        ></div>
      </div>
    </Swiper>
  );
};

export default ArticlesContainer;
