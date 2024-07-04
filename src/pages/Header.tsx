// import {
//     Carousel,
//     CarouselContent,
//     CarouselItem,
//     CarouselNext,
//     CarouselPrevious,
// } from "@/components/ui/carousel"
import { CiUser } from "react-icons/ci";
import { FaBell } from "react-icons/fa"
import { FaBarsProgress } from "react-icons/fa6";

export default function Header() {
    return (
        <>
        <header className="bg-slate-500 w-full">
            <div className="flex justify-between items-center w-full h-16 px-4 py-2 shadow-md shadow-black">
                <div className="flex items-center gap-4">
                    <img className="w-10 h-10 rounded" src="https://picsum.photos/200/300" alt="logo" />
                    <h1 className="text-red text-2xl font-bold">Digital Store</h1>
                </div>
                <div className="flex items-center gap-4">
                    <button className="bg-white text-black rounded-full px-4 py-2 shadow-md shadow-black">
                    <CiUser />
                    </button>
                    <button className="bg-white text-black rounded-full px-4 py-2 shadow-md shadow-black">
                        <FaBell />
                    </button>
                    <button className="bg-white text-black rounded-full px-4 py-2 shadow-md shadow-black">
                        <FaBarsProgress />
                    </button>
                </div>
            </div>
            </header>

            {/* <Carousel></Carousel><Carousel>
                <CarouselContent>
                    <CarouselItem><img src="https://picsum.photos/200/300" alt="pic" /></CarouselItem>
                    <CarouselItem><img src="https://picsum.photos/200/300" alt="pic" /></CarouselItem>
                    <CarouselItem><img src="https://picsum.photos/200/300" alt="pic" /></CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel> */}
        </>

    )
}


