import {Carousel} from "@/components/Carousel/Carousel.tsx";
import Introduce from "@/components/Introduce";
import CommunitiesIntro from "@/components/CommunitiesIntro";

const Home = () => {
    return (
        <div className="w-full flex flex-col">
            <Carousel/>
            <Introduce/>
            <CommunitiesIntro/>
            <div>carousel</div>
            <div>Connection</div>
        </div>)
}

export default Home;