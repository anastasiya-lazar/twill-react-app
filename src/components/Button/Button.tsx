import { FC, ReactNode } from "react";
import classNames from "classnames";

import styles from "./Button.module.scss";
import { NavLink } from "react-router-dom";
export enum ButtonType {
  Primary = "primary",
  Secondary = "secondary",
  PrimaryOutline = "primaryOutline",
}

type ButtonProps = {
  title: string | ReactNode;
  to?: string;
  onClick?: () => void;
  type: ButtonType;
  disabled?: boolean;
  className?: string;
};

const Button: FC<ButtonProps> = ({
  title,
  to,
  onClick,
  type,
  disabled,
  className,
}) => {
  const buttonStyle = styles[type];

  const commonProps = {
    className: classNames(buttonStyle, className, {
      [styles.disabled]: disabled,
    }),
  };

  if (onClick) {
    return (
      <div {...commonProps} onClick={onClick}>
        {title}
      </div>
    );
  } else if (to) {
    return (
      <NavLink {...commonProps} to={to}>
        {title}
      </NavLink>
    );
  } else {
    return <div {...commonProps}>{title}</div>;
  }
};

export default Button;
