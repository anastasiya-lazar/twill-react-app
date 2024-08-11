import { useState } from "react";
import classNames from "classnames";

import styles from "./SideBar.module.scss";
import MainFooter from "../MainFooter";
import { NavLink } from "react-router-dom";
import explore from "@/assets/icons/explore.svg";
import experts from "@/assets/icons/user-md.svg";
import more from "@/assets/icons/more_round.svg";
import exploreActive from "@/assets/icons/explore_solid.svg";
import expertsActive from "@/assets/icons/user-md-solid.svg";
import moreActive from "@/assets/icons/more_round_solid.svg";

enum SideBarItems {
  Explore = "explore",
  Experts = "experts",
  More = "more",
}

const Icons = {
  [SideBarItems.Explore]: explore,
  [SideBarItems.Experts]: experts,
  [SideBarItems.More]: more,
  [SideBarItems.Explore + "Active"]: exploreActive,
  [SideBarItems.Experts + "Active"]: expertsActive,
  [SideBarItems.More + "Active"]: moreActive,
};

enum MoreDropdownItems {
  PrivacyPolicy = "privacy-policy",
  TermsAndConditions = "terms-and-conditions",
  CookiePolicy = "cookie-policy",
  Contact = "contact",
  AboutUs = "about-us",
  CookiePreferences = "cookie-preferences",
}
const SideBar = () => {
  const [selected, setSelected] = useState<SideBarItems>(SideBarItems.Explore);
  const [isOpened, setOpened] = useState<boolean>(false);
  const [moreItemSelected, setMoreItemSelected] =
    useState<MoreDropdownItems | null>(null);

  const onClick = (item: SideBarItems | MoreDropdownItems) => () => {
    if (item === SideBarItems.More) {
      setOpened(!isOpened);
    } else {
      if (
        Object.values(MoreDropdownItems).includes(item as MoreDropdownItems)
      ) {
        setSelected(SideBarItems.More);
        setMoreItemSelected(item as MoreDropdownItems);
      } else {
        setMoreItemSelected(null);
        setSelected(item as SideBarItems);
      }
    }
  };

  const menuItems = [
    {
      key: SideBarItems.Explore,
      name: "Explore",
    },
    {
      key: SideBarItems.Experts,
      name: "Experts",
    },
    {
      key: SideBarItems.More,
      name: "More",
    },
  ];

  const MoreItems = [
    {
      key: MoreDropdownItems.PrivacyPolicy,
      name: "Privacy Policy",
    },
    {
      key: MoreDropdownItems.TermsAndConditions,
      name: "Terms and Conditions",
    },
    {
      key: MoreDropdownItems.CookiePolicy,
      name: "Cookie Policy",
    },
    {
      key: MoreDropdownItems.Contact,
      name: "Contact",
    },
    {
      key: MoreDropdownItems.AboutUs,
      name: "About Us",
    },
    {
      key: MoreDropdownItems.CookiePreferences,
      name: "Cookie Preferences",
    },
  ];

  const renderItems = ({ name, key }: { name: string; key: SideBarItems }) => (
    <div key={key}>
      {key !== SideBarItems.More ? (
        <NavLink
          className={classNames(
            styles.menuitem,
            {
              [styles.menuitemSelected]: selected === key,
            },
            "flex",
            "gap-3.5",
            "items-center"
          )}
          onClick={onClick(key)}
          to={`/${key}`}
        >
          <img
            src={selected === key ? Icons[key + "Active"] : Icons[key]}
            alt={key}
            className={styles.icon}
          />
          {name}
        </NavLink>
      ) : (
        <div
          className={classNames(
            styles.menuitem,
            {
              [styles.menuitemSelected]: selected === key,
              [styles.opened]: isOpened && key === SideBarItems.More,
            },
            "flex",
            "gap-3.5",
            "items-center"
          )}
          onClick={onClick(key)}
        >
          <img src={Icons[key]} alt={key} className={styles.icon} />
          {name}
        </div>
      )}
    </div>
  );

  const renderMoreItems = ({
    name,
    key,
  }: {
    name: string;
    key: MoreDropdownItems;
  }) => (
    <div>
      <NavLink
        className={classNames(styles.dropdown, {
          [styles.menuitemSelected]: moreItemSelected === key,
        })}
        key={key}
        onClick={onClick(key)}
        to={`/${key}`}
      >
        {name}
      </NavLink>
    </div>
  );

  return (
    <aside
      className={classNames(styles.asideBar, "flex flex-col justify-between pt-10")}
    >
      <div className="flex flex-col text-left gap-10">
        {menuItems.map(renderItems)}
        {isOpened && <div>{MoreItems.map(renderMoreItems)}</div>}
      </div>
      <MainFooter />
    </aside>
  );
};

export default SideBar;
