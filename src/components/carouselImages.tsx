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
    <div className=" w-full">
      <Carousel setApi={setApi} className="w-full">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index} className="h-[500px] basis-full">
              <div className="relative w-full h-full rounded-t-xl">
                <Image
                  src={image.url}
                  fill
                  objectFit="cover"
                  className="rounded-t-xl"
                  alt={"Imagem"}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-1.5" />
        <CarouselNext className="right-1.5" />

        <div className="flex justify-center mt-4">
          {images.map((image, index) => (
            <div
              key={index}
              className={`cursor-pointer rounded-xl  mx-2 relative w-20 h-20 ${
                current === index + 1 ? "border border-primary" : ""
              }`}
              onClick={() => handleThumbClick(index)}
            >
              <Image
                src={image.url}
                fill
                className="object-cover rounded-xl"
                alt={"Thumb"}
                quality={100}
              />
            </div>
          ))}
        </div>
      </Carousel>
    </div>
  );
}
