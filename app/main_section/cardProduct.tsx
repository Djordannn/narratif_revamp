"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { TypePopularProductSkeleton } from "@/types/typePopularPrdct";
import { TypeImgAsset } from "@/types/typeImage";
import contentfulClient from "@/lib/contentfulClient";
import { Entry } from "contentful";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const CardProduct = () => {
  const [data, setData] = useState<Entry<TypePopularProductSkeleton>[]>([]);

  const fetchData = async () => {
    try {
      const res = await contentfulClient.getEntries<TypePopularProductSkeleton>(
        {
          content_type: "popularProduct",
        }
      );
      setData(res.items);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div id="product" className="py-8 md:py-24 mb-[4rem] mx-[5%]">
      <div className="text-center animation">
        <h2 className="text-3xl">popular products</h2>
        <hr className="h-1 w-[20%] md:w-[10%] mx-auto bg-[#2d2d2d] mt-3" />
        <p className="mt-4 2xl:text-lg">
          we present products with the best quality
        </p>
      </div>
      <div className="grid mt-12 grid-cols-2 gap-4 md:hidden">
        {data.map((value, index) => (
          <div
            key={index}
            className="md:basis-1/3 lg:basis-[29%] 2xl:basis-[25%] flex-shrink-0"
          >
            <div className="bg-[#eeee]">
              <Image
                src={`https:${
                  (value.fields.image as TypeImgAsset)?.fields.file.url
                }`}
                width={1000}
                height={300}
                quality={100}
                alt="img"
                className="w-[100%] h-[200px] object-cover bg-[#eeee]"
              />
            </div>
            <div className="mt-2">
              <h3 className="text-md font-medium">
                {" "}
                {value.fields.title && typeof value.fields.title === "string"
                  ? value.fields.title
                  : "No Title"}
              </h3>
              <p className="text-sm">
                {typeof value.fields.price === "object" && value.fields.price.en
                  ? parseInt(value.fields.price.en).toLocaleString("id", {
                      style: "currency",
                      currency: "IDR",
                    })
                  : "Harga tidak tersedia"}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="hidden md:block">
        <Carousel className="py-12">
          <CarouselContent className="flex w-full gap-2">
            {data.map((value, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/3 lg:basis-[29%] 2xl:basis-[25%] flex-shrink-0"
              >
                <div className="bg-[#eeee]">
                  <Image
                    src={`https:${
                      (value.fields.image as TypeImgAsset)?.fields.file.url
                    }`}
                    width={1000}
                    height={300}
                    quality={100}
                    alt="img"
                    className="w-[100%] h-[200px] object-cover md:h-[200px] bg-[#eeee] lg:h-[220px] xl:h-[270px] 2xl:h-[300px]"
                  />
                </div>
                <div className="mt-2">
                  <h3 className="text-lg font-medium">
                    {" "}
                    {value.fields.title &&
                    typeof value.fields.title === "string"
                      ? value.fields.title
                      : "No Title"}
                  </h3>
                  <p className="text-xl">
                    {typeof value.fields.price === "object" &&
                    value.fields.price.en
                      ? parseInt(value.fields.price.en).toLocaleString("id", {
                          style: "currency",
                          currency: "IDR",
                        })
                      : "Harga tidak tersedia"}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-black" />
          <CarouselNext className="text-black" />
        </Carousel>

        <div className="mt-5">
          <Link href="product" className="py-4 px-7 bg-[#2d2d2d] text-white">
            more products
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
