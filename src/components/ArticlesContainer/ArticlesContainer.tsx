import { FC, useMemo } from "react";
import { ArticlesSelectors } from "@/redux/reducers/articlesSlice.ts";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import styles from "./ArticlesContainer.module.scss";
import classNames from "classnames";

import { BeatLoader } from "react-spinners"; // Import BeatLoader from react-spinners

type ArticlesContainerProps = {
  topicId: number;
};

SwiperCore.use([Navigation]);

const ArticlesContainer: FC<ArticlesContainerProps> = ({ topicId }) => {
  const articles = useSelector(
    useMemo(
      () => ArticlesSelectors.getArticlesSectionDataByTopic(topicId),
      [topicId]
    )
  );
  console.log(articles);

  const renderSlides = () => {
    if (articles && articles.records) {
      // Check if articles data is available
      const slides = [];
      for (let i = 0; i < articles.records.length; i += 2) {
        const articlesInSlide =
          i === 0
            ? articles.records.slice(i, i + 1)
            : articles.records.slice(i, i + 2);
        slides.push(
          <SwiperSlide
            key={`slide_${i}`}
            className={
              i === 0 ? styles["special-slide"] : styles["regular-slide"]
            }
          >
            {articlesInSlide.map(({ id, image, title, communities }) => (
              <div className="cover-slide" key={`article_${id}`}>
                <img className={"h-20"} src={image} alt={title} />
                <div>{title}</div>
                {communities.map(({ name }) => (
                  <div key={`community_${name}`}>{name}</div>
                ))}
              </div>
            ))}
          </SwiperSlide>
        );
      }
      return slides;
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
