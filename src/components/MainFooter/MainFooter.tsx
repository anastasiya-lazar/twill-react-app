// import { NavLink } from "react-router-dom";
import styles from "./MainFooter.module.scss";
// import footerLogo from "@/assets/img/logoHorizontal.svg";

import "./MainFooter.module.scss";
import classNames from "classnames";

const MainFooter = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="py-3">
        <div className={classNames(styles.socialIcons)}>
          Follow us
        </div>
        <div className={classNames(styles.disclaimer)}>
          DISCLAIMER: THIS PLATFORM IS BASED IN THE UNITED STATES AND DOES NOT PROVIDE MEDICAL ADVICE.
          See Additional Information.
        </div>
        <div className={classNames(styles.copyRight)}>
          ©{currentYear} All Rights Reserved
        </div>

        {/*<img src={footerLogo} alt="logo" />*/}
        {/*<div className="flex justify-between">*/}
        {/*  <div className="flex flex-col">*/}
        {/*    <p>Twill Care. Let's face life's challenges together.</p>*/}
        {/*    <p>*/}
        {/*      Twill Care is created by{"h"}*/}
        {/*      <NavLink*/}
        {/*        to={"https://www.twill.health/"}*/}
        {/*        className={"text-white"}*/}
        {/*      >*/}
        {/*        Twill Health*/}
        {/*      </NavLink>*/}
        {/*    </p>*/}
        {/*  </div>*/}
        {/*</div>*/}
      </div>
    </footer>
  );
};

export default MainFooter;
