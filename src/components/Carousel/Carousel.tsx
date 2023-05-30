import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper/core";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/swiper.min.css";
import styles from "./Carousel.module.scss";
import Button, { ButtonType } from "../Button";
import classNames from "classnames";


interface Community {
  title: string;
  description: string;
  imageClass: string;
}

const communities: Community[] = [
  {
    title: "Find Support for Multiple Sclerosis",
    description:
      "Our multiple sclerosis community is an all-in-one resource for people living with MS.",
    imageClass: "cover-slide__image_2",
  },
  {
    title: "Journey through Midlife with Community and Compassion",
    description:
      "Our Women & Midlife community is designed to help you navigate midlife and menopause. Get peer support and consult experts.",
    imageClass: "cover-slide__image_4",
  },
  {
    title: "Get Support and Information to Manage Psoriasis",
    description:
      "Our psoriasis community offers the support you need to care for your skin and joints, explore treatments, and get expert information.",
    imageClass: "cover-slide__image_5",
  },
  {
    title: "Build Healthy Habits in Our Well-Being Community",
    description:
      "Our well-being community offers support and self-care strategies to help relieve stress, sleep better, lift mood, or handle anxious feelings.",
    imageClass: "cover-slide__image_6",
  },
];

SwiperCore.use([Pagination, Autoplay]);

export const Carousel = () => {

  const renderSlides = () =>
    communities.map((community, index) => (
      <SwiperSlide key={index}>
        <div className="cover-slide">
          <h1 className="title">{community.title}</h1>
          <h4 className="description">{community.description}</h4>
          <Button
            title={"Join now"}
            onClick={() => {}}
            type={ButtonType.Primary}
            className={`w-40`}
          />
        </div>
        <div className={`image ${community.imageClass}`}></div>
      </SwiperSlide>
    ));

  return (
    <div>
      <Swiper
        grabCursor={true}
        centeredSlides={true}
        centeredSlidesBounds={true}
        loop={true} // stay
        slidesPerView={1}
        pagination={{
          el: `.${styles["dot-list-intro"]}`,
          clickable: true,
          bulletClass: styles.dot,
          bulletElement: "button",
          bulletActiveClass: styles["dot-active"],
        }}
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          waitForTransition: false,
        }}
        className={styles.introduceCarousel}
      >
        {renderSlides()}

        <div
          className={classNames(
            "flex justify-center mt-4",
            styles["dot-list-intro"]
          )}
        ></div>
      </Swiper>
    </div>
  );
};
