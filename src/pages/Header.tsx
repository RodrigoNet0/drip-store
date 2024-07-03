import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
export default function Header() {
    return (
        <>
            <Carousel></Carousel><Carousel>
                <CarouselContent>
                    <CarouselItem><img src="https://picsum.photos/200/300" alt="pic" /></CarouselItem>
                    <CarouselItem><img src="https://picsum.photos/200/300" alt="pic" /></CarouselItem>
                    <CarouselItem><img src="https://picsum.photos/200/300" alt="pic" /></CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </>

    )
}


