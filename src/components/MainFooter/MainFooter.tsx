import React from "react";
import { NavLink } from "react-router-dom";
import classNames from "classnames";
import styles from "./MainFooter.module.scss";
import footerLogo from "../../assets/img/logoHorizontal.svg";

import "./MainFooter.module.scss";

const MainFooter = () => {
  return (
    <footer>
      <div className={styles.mainFooter}>
        <img src={footerLogo} alt="logo" />
        <div className="flex justify-between">
          <div className="flex flex-col">
            <p>Twill Care. Let's face life's challenges together.</p>
            <p>
              Twill Care is created by{" "}
              <NavLink
                to={"https://www.twill.health/"}
                className={"text-white"}
              >
                Twill Health
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;
