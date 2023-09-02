import React from "react";
import {Carousel} from "@/components/Carousel/Carousel.tsx";
import Introduce from "@/components/Introduce";

const Home = () => {
    return (
        <div className="w-full flex flex-col">
            <Carousel/>
            <Introduce/>
            <div>Content</div>
            <div>carousel</div>
            <div>Connection</div>
        </div>)
}

export default Home;