import React, {useEffect} from "react";
import {NavLink, useParams} from "react-router-dom";
import { Logo } from "@/assets/icons";
import Button, { ButtonType } from "@/components/Button";
import {useDispatch, useSelector} from "react-redux";
import {TopicsSelectors, getCommunities} from "@/redux/reducers/topicsSlice.ts";
import {CommunitiesListType} from "@/@types";
import classNames from "classnames";
import styles from "./MainHeader.module.scss";


const MainHeader: React.FC = () => {
  const dispatch = useDispatch();
  const {communityId} = useParams();
  const communities: CommunitiesListType = useSelector(TopicsSelectors.getCommunities);

  useEffect(() => {
    dispatch(getCommunities());
  }, [dispatch]);
  return (
    <div className="flex items-center pr-2">
      <div className="w-full h-20 flex">
        <NavLink className="w-56 flex items-center" to={"/"}>
          <Logo />
        </NavLink>
        <div className={"flex items-center"}>
          {communities.map(({ id, community_id, name }) => (
            <NavLink
              className={classNames("mr-10", {[styles.active]: communityId === community_id})}
              key={`${community_id}_${id}`}
              to={`/explore/${community_id}`}
            >
              {name}
            </NavLink>
          ))}
        </div>
      </div>
      <div className="flex items-center whitespace-nowrap gap-4">
        <Button
          title={"Log In"}
          to={"/log-in"}
          type={ButtonType.PrimaryOutline}
        />
        <Button title={"Sign Up"} to={"/sign-up"} type={ButtonType.Primary} />
      </div>
    </div>
  );
};

export default MainHeader;
