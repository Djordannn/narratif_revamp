"use client";

import React, { useRef } from "react";
import Image from "next/image";
import img from "../../public/image/banner2.jpg";
import img2 from "../../public/image/banner1.jpg";
import img3 from "../../public/image/paskib4.jpg";
import imgRounded1 from "../../public/image/runner.jpg";
import imgRounded2 from "../../public/image/futsal.jpg";
import imgRounded3 from "../../public/image/satria2.jpg";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const imgJumbotron = [
  {
    title: "Title",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    imgUrl: img,
    link: "product",
  },
  {
    title: "Title",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    imgUrl: img2,
    link: "product",
  },
  {
    title: "Title",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    imgUrl: img3,
    link: "product",
  },
];
const Jumbotron = () => {
  const autoplay = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));
  const newImgJumbotron = imgJumbotron.map((value, index) => {
    return (
      <CarouselItem key={index} className="w-[100%] m-0 p-0">
        <div className="relative w-[100%]">
          <a href={value.link}>
            <Image
              src={value.imgUrl}
              alt="img"
              className="w-[100%] ml-4 h-[250px] sm:h-[350px] md:h-[400px] lg:h-[500px] 2xl:h-[600px] object-cover object-top"
            />
          </a>
        </div>
      </CarouselItem>
    );
  });
  return (
    <div className="mx-[5%]">
      <div className="py-14 md:py-0 md:pt-14 md:pb-24 flex flex-col gap-2 text-center">
        <div className="flex justify-center relative">
          <Avatar className="border-4 border-white ">
            <Image src={imgRounded1} alt="img" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar className="border-4 border-white -ml-4">
            <Image src={imgRounded2} alt="img" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar className="border-4 border-white -ml-4">
            <Image src={imgRounded3} alt="img" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <h1 className="text-3xl md:text-5xl">
          narratif apparel
          <br />
          made to be your story
        </h1>
        <p className="w-[80%] md:w-[40%] text-sm mx-auto 2xl:text-lg 2xl:w-[30%]">
          We will be part of your story, every moment and process our narrators
          are ready to be involved.
        </p>
        <div className="mt-4 flex gap-4 items-center justify-center">
          <a
            href="#product"
            className="bg-[#2d2d2d] text-white py-2 px-8 hover:opacity-85"
          >
            more
          </a>
        </div>
      </div>
      <Carousel
        plugins={[autoplay.current]}
        // options={{ loop: true, containScroll: "trimSnaps" }}
        className="w-[100%]"
      >
        <CarouselContent className="w-[100%]">
          {newImgJumbotron}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Jumbotron;
