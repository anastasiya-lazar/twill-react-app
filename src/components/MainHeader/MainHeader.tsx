import React from "react";
import { NavLink } from "react-router-dom";
import { Logo } from "@/assets/icons";
import Button, { ButtonType } from "@/components/Button";

const MAIN_HEADER_LINKS = [
  {
    url: "/well_being",
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
    url: "/wam",
    name: "Women & Midlife",
  },
];
const MainHeader: React.FC = () => {
  return (
    <div className="flex items-center pr-2">
    <div className="w-full h-20 flex">
      <NavLink className="w-56 flex items-center" to={"/"}>
        <Logo />
      </NavLink>
      <div className={"flex items-center"}>
        {MAIN_HEADER_LINKS.map(({ url, name }, index) => (
          <NavLink className="mr-10" key={`${url}_${index}`} to={`/explore${url}`}>
            {name}
          </NavLink>
        ))}
      </div>
    </div>
        <div className="flex items-center whitespace-nowrap gap-4">
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
