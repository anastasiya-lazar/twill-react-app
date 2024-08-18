import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import LandingPageContainer from "./LandingPageContainer";
import MainPageContainer from "./MainPageContainer/MainPageContainer.tsx";
import { AboutPage } from "../components/SideBar/More/More.tsx";
import Explore from "../components/Explore";
import SignPageContainer from "@/pages/SignPageContainer/SignPageContainer.tsx";
import TopicPage from "@/pages/TopicPage/TopicPage.tsx";

export enum RoutesList {
  BaseHome = "/", // Home page
  // Articles = "/articles", // Articles page
  Experts = "/experts", // Experts page
  AboutUs = "/about-us", // About Us page
  Explore = "/explore/:communityId", // Explore page
  TopicPage = "feed/:communityId/topics/:topicId", // Topic page
  SignUp = "/sign-up", // Sign Up page
  LogIn = "/log-in", // Log In page
}
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RoutesList.BaseHome} element={<LandingPageContainer />}>
          <Route path={RoutesList.BaseHome} element={<Home />} />
        </Route>
        <Route path={RoutesList.BaseHome} element={<MainPageContainer />}>
          {/*<Route path={RoutesList.Articles} element={<div>Articles</div>} />*/}
          <Route path={RoutesList.Experts} element={<div>Experts</div>} />
          <Route path={RoutesList.AboutUs} element={<AboutPage />} />
          <Route path={RoutesList.Explore} element={<Explore />} />
          <Route path={RoutesList.TopicPage} element={<TopicPage/>} />
        </Route>
        <Route path={RoutesList.BaseHome} element={<SignPageContainer />}>
          <Route path={RoutesList.SignUp} element={<div>Sign Up</div>} />
          <Route path={RoutesList.LogIn} element={<div>Log In</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
