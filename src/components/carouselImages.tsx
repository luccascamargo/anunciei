"use client";
import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Imagen } from "@/types/FilterAdverts";
import Image from "next/image";

type ICarousel = {
  images: Imagen[];
};

export function CarouselImages({ images }: ICarousel) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const handleThumbClick = (index: number) => {
    if (api) {
      api.scrollTo(index);
    }
  };

  return (
    <div className=" w-full max-w-5xl">
      <Carousel setApi={setApi} className="w-full">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index} className="h-[500px] basis-full">
              <div className="relative w-full h-full rounded-xl">
                <Image
                  src={image.url}
                  fill
                  objectFit="contain"
                  className="rounded-xl"
                  alt={"Imagem"}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />

        <div className="flex justify-center mt-4">
          {images.map((image, index) => (
            <div
              key={index}
              className={`cursor-pointer mx-2 ${
                current === index + 1 ? "border-2 b border-primary" : ""
              }`}
              onClick={() => handleThumbClick(index)}
            >
              <Image src={image.url} width={80} height={80} alt={"Thumb"} />
            </div>
          ))}
        </div>
      </Carousel>
    </div>
  );
}
