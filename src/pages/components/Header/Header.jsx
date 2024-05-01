import Banner from "./Banner/Banner";
import Carousel from "./Carousel/Carousel";
import Navbar from "./Navbar/Navbar";

export default function Header() {
    return (
        <div className="relative">
            <Navbar />
            <Banner />
            <div className=" bg-gradient-to-b from-[#652A24] to-white -mt-40 pb-10">
                <Carousel />
            </div>
        </div>
    )
}
