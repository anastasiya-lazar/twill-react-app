import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import LandingPageContainer from "./LandingPageContainer";
import MainPageContainer from "./MainPageContainer/MainPageContainer.tsx";
import { AboutPage } from "../components/SideBar/More/More.tsx";
import Explore from "../components/Explore";
import SignPageContainer from "@/pages/SignPageContainer/SignPageContainer.tsx";

export enum RoutesList {
  LandingHome = "/", // Home page
  // Articles = "/articles", // Articles page
  Experts = "/experts", // Experts page
  AboutUs = "/about-us", // About Us page
  Explore = "/explore/:communityId", // Explore page
  SignUp = "/sign-up", // Sign Up page
  LogIn = "/log-in", // Log In page
}
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RoutesList.LandingHome} element={<LandingPageContainer />}>
          <Route path={RoutesList.LandingHome} element={<Home />} />
        </Route>
        <Route path={RoutesList.LandingHome} element={<MainPageContainer />}>
          {/*<Route path={RoutesList.Articles} element={<div>Articles</div>} />*/}
          <Route path={RoutesList.Experts} element={<div>Experts</div>} />
          <Route path={RoutesList.AboutUs} element={<AboutPage />} />
          <Route path={RoutesList.Explore} element={<Explore />} />
        </Route>
        <Route path={RoutesList.LandingHome} element={<SignPageContainer />}>
          <Route path={RoutesList.SignUp} element={<div>Sign Up</div>} />
          <Route path={RoutesList.LogIn} element={<div>Log In</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
