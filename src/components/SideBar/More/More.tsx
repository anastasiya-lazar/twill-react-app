import React, { FC, ReactElement } from "react";

type ContainerProps = {
  title: string;
  children?: ReactElement | ReactElement[];
};
const Container: FC<ContainerProps> = ({ children, title }) => {
  return (
    <div>
      <div>{title}</div>
      {children}
    </div>
  );
};

export const AboutPage = () => {
  return (
    <Container title={"About"}>
      <div>Here is info about company</div>
    </Container>
  );
};