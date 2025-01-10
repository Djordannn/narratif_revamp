"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { TypeImgAsset } from "@/types/typeImage";
import contentfulClient from "@/lib/contentfulClient";
import { TypeVintageSkeleton } from "@/types/typeVintage";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const TShirt = () => {
  const [data, setData] = useState<TypeVintageSkeleton[]>([]);

  const fetchData = async () => {
    try {
      const res = await contentfulClient.getEntries<TypeVintageSkeleton>({
        content_type: "vintage",
      });
      setData(res.items);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {data.map((value, index) => (
          <Card key={index} className="border-none shadow-none">
            <CardHeader className="p-0">
              <Image
                src={`https:${
                  (value.fields.image as TypeImgAsset)?.fields.file.url
                }`}
                width={1000}
                height={300}
                quality={100}
                alt="img"
                className="w-[100%] h-[200px] object-cover md:h-[150px] lg:h-[200px] xl:h-[250px] 2xl:h-[300px]"
              />
            </CardHeader>
            <CardContent className="mt-4 p-0">
              <CardTitle className="xl:text-xl font-medium">
                {value.fields.title}
              </CardTitle>
              <CardDescription className="xl:text-xl font-[300]]">
                {value.fields.price
                  ? parseInt(value.fields.price).toLocaleString("id", {
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

export default TShirt;
