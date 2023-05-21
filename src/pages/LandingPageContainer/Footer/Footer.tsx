import React from "react";
import {NavLink} from "react-router-dom";
import classNames from "classnames";

import "./Footer.module.scss";


const Footer = () => {
  return (
    <footer>
      <img src="../../../assets/img/logoHorizontal.svg" alt="logo" />
        <div className="flex justify-between">
            <div className="flex flex-col">
                <p className="text-white">Twill Care. Let's face life's challenges
                    together.</p>
                <p className="text-white">Twill Care is created by <NavLink to={"https://www.twill.health/"} className={"text-white"}>Twill Health</NavLink></p>
            </div>

        </div>
    </footer>
  );
};

export default Footer;
