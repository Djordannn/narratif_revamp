"use client";

import Image from "next/image";
import imgCustom from "../../public/image/ladaPapat.jpg";
import React, { useEffect, useState } from "react";
import { TypeImgAsset } from "@/types/typeImage";
import contentfulClient from "@/lib/contentfulClient";
import { TypeCustomSkeleton } from "@/types/typeCustom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Entry } from "contentful";

const CustomJersey = () => {
  const [data, setData] = useState<Entry<TypeCustomSkeleton>[]>([]);

  const fetchData = async () => {
    try {
      const res = await contentfulClient.getEntries<TypeCustomSkeleton>({
        content_type: "custom",
      });
      console.log(res.items);

      setData(res.items);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="pb-14 mx-[5%]">
      <div>
        <Image
          src={imgCustom}
          alt="img"
          className="w-[100%] h-[170px] md:h-[300px] object-cover object-top"
        />
      </div>
      <div>
        <div className="my-[3rem] md:my-[5rem] text-center">
          <h1 className="text-2xl md:text-4xl uppercase font-bold">
            custom jersey
          </h1>
          <hr className="h-1 w-[20%] md:w-[10%] mx-auto bg-[#2d2d2d] mt-3" />
          <p className="mt-4 md:w-[50%] mx-auto 2xl:text-lg">
            hello Narrator Want to customize Jersey but don&apos;t have a design
            yet? Here, Narratif will make your dream design come true
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {data.map((value, index) => (
          <Card key={index} className="border-none shadow-none">
            <CardHeader className="p-0">
              <Image
                src={`https:${
                  (value.fields.img as TypeImgAsset)?.fields.file.url
                }`}
                width={1000}
                height={300}
                quality={100}
                alt="img"
                className="w-[100%] h-[200px] object-cover bg-[#eeee] md:h-[250px] lg:h-[250px] xl:h-[300px] 2xl:h-[300px]"
              />
            </CardHeader>
            <CardContent className="mt-4 p-0">
              <CardTitle className="xl:text-xl font-medium">
                {value.fields.title && typeof value.fields.title === "string"
                  ? value.fields.title
                  : "No Title"}
              </CardTitle>
              <CardDescription className="xl:text-xl font-[300]]">
                {typeof value.fields.price === "object" && value.fields.price.en
                  ? parseInt(value.fields.price.en).toLocaleString("id", {
                      style: "currency",
                      currency: "IDR",
                    })
                  : "Harga tidak tersedia"}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CustomJersey;
