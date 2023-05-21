import React from "react";
import {NavLink} from "react-router-dom";
import {HEADER_LINKS} from "../../../constants/links.ts";
import {Logo} from "../../../assets/icons";
import Button, {ButtonType} from "../../../components/Button";

const Header: React.FC = () => {
  return (
    <div className="w-full h-20 pt-10 px-8 flex justify-between">
          <NavLink className="w-56" to={"/"}>
              {/*<img className="max-w-full" src={require("../../assets/img/logo.svg")} alt="logo" />*/}
                <Logo />
          </NavLink>
      <div className={"flex items-center"}>
        {HEADER_LINKS.map(({ url, name }, index) => (
          <NavLink className="mr-10" key={`${url}_${index}`} to={url}>{name}</NavLink>
        ))}
        <Button title={"Sign Up"} onClick={()=>{}} type={ButtonType.Primary} />
      </div>
    </div>
  );
};

export default Header;
