"use client";

import React from "react";
import Image from "next/image";
import imgRounded1 from "../../public/image/runner.jpg";
import imgRounded2 from "../../public/image/futsal.jpg";
import imgRounded3 from "../../public/image/satria2.jpg";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const Jumbotron = () => {
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
        <p className="w-[90%] md:w-[40%] lg:w-[80%]  text-sm lg:text-lg mx-auto 2xl:text-lg 2xl:w-[30%]">
          We will be part of your story, every moment and process our narrators
          are ready to be involved.
          <span className="hidden lg:block">
            everyone has a memorable moment in every corner of their life, the
            clothes/clothes you wear become one of the objects to remember that
            moment. Narratif Apparel is committed to being a friend in every
            moment of yours. which realizes custom apparel so that later it will
            become a separate story for the wearer.
          </span>
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
    </div>
  );
};

export default Jumbotron;
