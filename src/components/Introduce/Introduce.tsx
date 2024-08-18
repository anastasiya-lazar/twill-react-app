import {useMemo} from "react";
import IntroduceContent from "./IntroduceContent";
import styles from "./Introduce.module.scss";
import classNames from "classnames";
import pic1 from "@/assets/img/landing/Mockup-3.svg";

const Introduce = () => {
  const contentList = useMemo(() => [
    {
      image: pic1,
      title: "Learn from Healthcare Experts",
      description:
        "See posts from board-certified experts and ask them questions. Learn how to handle symptoms and care for your well-being. ",
      buttonTitle: "Get Expert Opinions",
      onClick: () => {},
    },
    {
      image: pic1,
      title: "Get Support from the Community",
      description:
        "Connect with people who understand the challenges you’re experiencing. Ask questions, swap advice, and learn what works for others.",
      buttonTitle: "Find Support",
      onClick: () => {},
    },
    {
      image: pic1,
      title: "Access Personalized Content",
      description:
        "Twill Care’s informative content helps you understand your health concerns and discover remedies and treatments that work.",
      buttonTitle: "Explore",
      onClick: () => {},
    },
  ],[])

  return (
    <div>
      {contentList.map((item, index) => (
        <IntroduceContent
          key={`introduceContent_${index}`}
          className={classNames({ [styles.reversedBlock]: index % 2 > 0 })}
          {...item}
        />
      ))}
    </div>
  );
};

export default Introduce;
