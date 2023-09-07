import { Outlet } from "react-router-dom";
import AsidePic from "@/pages/SignPageContainer/AsidePic/AsidePic.tsx";

const SignPageContainer = () => {
  return (
    <div className="flex">
      <AsidePic />
      <Outlet />
    </div>
  );
};

export default SignPageContainer;
