import { Outlet } from "react-router-dom";
import SideBar from "@/components/SideBar";
import MainHeader from "@/components/MainHeader";

const MainPageContainer = () => {
  return (
    <div>
      <MainHeader />
      <div className='flex'>
        <SideBar />
        <Outlet />
      </div>
    </div>
  );
};

export default MainPageContainer;
