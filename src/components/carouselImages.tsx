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
import Image from "next/image";
import { X } from "lucide-react";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";

export function CarouselImages({ images }: { images: { url: string }[] }) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [modalCurrent, setModalCurrent] = React.useState(0);

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

  const handleImageClick = (index: number) => {
    setModalCurrent(index);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-full">
      <Carousel setApi={setApi} className="w-full max-w-full">
        {isModalOpen && (
          <div className="fixed inset-0 bg-black/90 z-40 flex items-center justify-center">
            <button
              onClick={handleModalClose}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-50 cursor-pointer"
            >
              <X size={32} />
            </button>

            <div className="relative w-full h-full flex flex-col items-center justify-center">
              <div className="w-full relative flex justify-center">
                <div className="relative w-full max-w-4xl h-[80vh]">
                  <Image
                    src={images[modalCurrent].url}
                    fill
                    objectFit="contain"
                    alt="Imagem em tamanho maior"
                    className="rounded-lg"
                  />
                </div>
              </div>
              <ScrollArea className="w-full">
                <div className="w-full flex justify-center">
                  {images.map((image, index) => (
                    <div
                      key={index}
                      className={`cursor-pointer rounded-xl mx-2 relative w-16 h-16 ${
                        modalCurrent === index ? "border-2 border-white" : ""
                      }`}
                      onClick={() => setModalCurrent(index)}
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
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
            </div>
          </div>
        )}
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem
              key={index}
              className="h-[300px] lg:h-[500px] basis-full"
            >
              <div
                className="relative w-full h-full rounded-t-xl cursor-pointer"
                onClick={() => handleImageClick(index)}
              >
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
      </Carousel>
      <ScrollArea className="w-full whitespace-nowrap">
        <div className="w-full flex justify-center mt-4">
          {images.map((image, index) => (
            <div
              key={index}
              className={`cursor-pointer rounded-xl mx-2 relative w-20 h-20 border border-muted-foreground ${
                current === index + 1 ? " border-primary" : ""
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
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
}
