import { FC, ReactNode } from "react";
import classNames from "classnames";

import styles from "./Button.module.scss";
export enum ButtonType {
  Primary = "primary",
  Secondary = "secondary",
  PrimaryOutline = "primaryOutline",
}

type ButtonProps = {
  title: string | ReactNode;
  onClick: () => void;
  type: ButtonType;
  disabled?: boolean;
  className?: string;
};

const Button: FC<ButtonProps> = ({
  title,
  onClick,
  type,
  disabled,
  className,
}) => {
  const buttonStyle = styles[type];

  return (
    <div
      className={classNames(buttonStyle, className, {
        [styles.disabled]: disabled,
      })}
      onClick={onClick}
    >
      {title}
    </div>
  );
};

export default Button;
