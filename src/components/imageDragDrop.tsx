"use client";
import { X } from "lucide-react";
import { Draggable } from "@hello-pangea/dnd";
import Image from "next/image";

interface iImageProp {
  index: number;
  id: string;
  thumb: string;
  handleRemoveImage: (thumb: string) => void;
}

export function ImageDragDrop({
  handleRemoveImage,
  index,
  thumb,
  id,
}: iImageProp) {
  return (
    <Draggable draggableId={id.toString()} index={index} key={id}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="flex flex-col items-center w-32 h-32 shadow-sm rounded-md relative"
        >
          <Image
            src={thumb}
            alt={`Preview ${index}`}
            fill
            className=" object-cover absolute top-0 left-0 rounded-md"
          />
          <div
            onClick={() => handleRemoveImage(thumb)}
            className="absolute -right-4 -top-4 p-1 rounded-full bg-primary-foreground shadow-sm cursor-pointer"
          >
            <X />
          </div>
        </div>
      )}
    </Draggable>
  );
}
