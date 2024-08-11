import { NavLink } from "react-router-dom";
import classNames from "classnames";
import styles from "./Footer.module.scss";
import logo from "@/assets/img/logoHorizontal.svg";

import "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={classNames(styles.landingFooter)}>
      <img src={logo} alt="logo" />
      <div className="flex justify-between">
        <div className="flex flex-col">
          <p className="text-white">
            Twill Care. Let's face life's challenges together.
          </p>
          <p className="text-white">
            Twill Care is created by{" "}
            <NavLink to={"https://www.twill.health/"} className="text-white">
              Twill Health
            </NavLink>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
