import React from "react";
import { NavLink } from "react-router-dom";
import { Logo } from "../../assets/icons";
import Button, { ButtonType } from "../../components/Button";

const MAIN_HEADER_LINKS = [
  {
    url: "/well-being",
    name: "Well-Being",
  },
  {
    url: "/pregnancy",
    name: "Pregnancy",
  },
  {
    url: "/ms",
    name: "MS",
  },
  {
    url: "/psoriasis",
    name: "Psoriasis",
  },
  {
    url: "/women-midlife",
    name: "Women & Midlife",
  },
];
const MainHeader: React.FC = () => {
  return (
    <div className="w-full h-20 px-8 flex justify-between">
      <NavLink className="w-56" to={"/"}>
        <Logo />
      </NavLink>
      <div className={"flex items-center"}>
        {MAIN_HEADER_LINKS.map(({ url, name }, index) => (
          <NavLink className="mr-10" key={`${url}_${index}`} to={url}>
            {name}
          </NavLink>
        ))}
        <Button
          title={"Log In"}
          onClick={() => {}}
          type={ButtonType.PrimaryOutline}
        />
        <Button
          title={"Sign Up"}
          onClick={() => {}}
          type={ButtonType.Primary}
        />
      </div>
    </div>
  );
};

export default MainHeader;
