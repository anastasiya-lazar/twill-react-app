import React, { useState } from "react";
import classNames from "classnames";

import styles from "./SideBar.module.scss";
import MainFooter from "../MainFooter";
import { NavLink } from "react-router-dom";

enum SideBarItems {
  Explore = "explore",
  Experts = "experts",
  More = "more",
}

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
      // setSelected(item);
      if (Object.values(MoreDropdownItems).includes(item)) {
        setSelected(SideBarItems.More);
        setMoreItemSelected(item);
      } else {
        setMoreItemSelected(null);
        setSelected(item);
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
          className={classNames(styles.menuitem, {
            [styles.selected]: selected === key,
            [styles.opened]: isOpened && key === SideBarItems.More,
          })}
          onClick={onClick(key)}
          to={`/${key}`}
        >
          {name}
        </NavLink>
      ) : (
        <div
          className={classNames(styles.menuitem, {
            [styles.selected]: selected === key,
            [styles.opened]: isOpened && key === SideBarItems.More,
          })}
          onClick={onClick(key)}
        >
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
          [styles.selected]: moreItemSelected === key,
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
      className={classNames(styles.asideBar, "flex flex-col justify-between")}
    >
      <div className="flex flex-col text-left px-5">
        {menuItems.map(renderItems)}
        {isOpened && <div>{MoreItems.map(renderMoreItems)}</div>}
      </div>
      <MainFooter />
    </aside>
  );
};

export default SideBar;
