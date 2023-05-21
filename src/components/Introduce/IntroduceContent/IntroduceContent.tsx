import React, { FC } from "react";
import classNames from "classnames";

import "./IntroduceContent.scss";
import Button, {ButtonType} from "../../Button";

type IntroduceContentProps = {
  className?: string;
  image: string;
  title: string;
  description: string;
  buttonTitle: string;
  onClick: () => void;
};

const IntroduceContent: FC<IntroduceContentProps> = ({
  className,
  image,
  title,
  description,
  buttonTitle,
  onClick,
}) => {
  return (
    <div
      className={classNames(
        "frame-wrap flex justify-center align-center down-xs:flex-col",
        className
      )}
    >
      <img className="frame-img" src={image} alt="" />

      <div className="frame flex flex-col justify-between">
        <div className="frame-header">{title}</div>
        <div className="frame-content">{description}</div>
        <Button className="self-start" title={buttonTitle} onClick={onClick} type={ButtonType.Primary} />
      </div>
    </div>
  );
};

export default IntroduceContent;
