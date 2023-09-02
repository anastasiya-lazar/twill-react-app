import { useMemo } from "react";
import classNames from "classnames";
import styles from "./CommunitiesIntro.module.scss";
import wellBeing from "@/assets/img/landing/wellb.jpg";
import pregnancy from "@/assets/img/landing/pregnancy.jpg";
import ms from "@/assets/img/landing/ms.jpg";
import psoriasis from "@/assets/img/landing/psoriasis.jpg";
import wam from "@/assets/img/landing/wam.jpg";

const CommunitiesIntro = () => {
  const cardData = useMemo(
    () => [
      {
        image: wellBeing,
        title: "Well-Being",
        description:
          "A welcoming space for caring for mental and emotional wellness.",
      },
      {
        image: pregnancy,
        title: "Pregnancy",
        description:
          "Support to help you safely and confidently navigate pregnancy.",
      },
      {
        image: ms,
        title: "MS",
        description:
          "An all-in-one resource for people living with multiple sclerosis.",
      },
      {
        image: psoriasis,
        title: "Psoriasis",
        description:
          "A judgment-free zone for life with psoriasis or psoriatic arthritis.",
      },
      {
        image: wam,
        title: "Women & Midlife",
        description:
          "A community of people managing midlife and stages of menopause.",
      },
    ],
    []
  );

  return (
    <div style={{ backgroundColor: "#1f313c" }}>
      <h2 className={classNames(styles.communityHeader)}>
        Twill Care Communities
      </h2>
      <div className={classNames(styles.communityCardList)}>
        {cardData.map((item, index) => (
          <div
            key={`card_${index}`}
            className={classNames(styles.communityCard)}
          >
            <img src={item.image} alt="" />
            <div className={classNames(styles.communityCardOverlay)}>
              <div className={classNames(styles.communityCardName)}>
                {item.title}
              </div>
              <p className={classNames(styles.communityCardDescription)}>{item.description}</p>
              <div className={classNames(styles.communityCardButton)}>
                Learn More
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommunitiesIntro;
