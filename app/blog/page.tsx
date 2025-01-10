"use clinet";
import React from "react";
import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface IProduct {
  title: string;
  text: string;
  imgUrl: string;
}

const blogItem: IProduct[] = [];

const Blog = () => {
  const newBlogItem = blogItem.map((value, index) => {
    return (
      <Card key={index}>
        <CardHeader className="p-0">
          <Image
            src={value.imgUrl}
            alt="img"
            className="w-full h-[250px] object-cover"
          />
        </CardHeader>
        <CardContent className="py-4">
          <CardTitle className="font-semibold text-2xl mb-2 tracking-normal">
            {value.title}
          </CardTitle>
          <CardDescription>{value.text}</CardDescription>
        </CardContent>
      </Card>
    );
  });
  return (
    <div className="mx-[5%] pt-14 pb-14 2xl:pb-44">
      <div className="mb-[5rem] text-center">
        <h1 className="text-4xl uppercase font-bold">blog</h1>
        <hr className="h-1 w-[10%] mx-auto bg-[#2d2d2d] mt-3" />
        <p className="mt-4">discover our story</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-24 gap-4 md:gap-6 ">
        {newBlogItem.length > 0 ? newBlogItem : <p>Data not found!!</p>}
      </div>
    </div>
  );
};

export default Blog;
