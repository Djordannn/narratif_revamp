"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { TypeImgAsset } from "@/types/typeImage";
import contentfulClient from "@/lib/contentfulClient";
import { TypeImageGallerySkeleton } from "@/types/typeImageGaller";
import { Entry } from "contentful";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";

const Jersey = () => {
  const [data, setData] = useState<Entry<TypeImageGallerySkeleton>[]>([]);

  const fetchData = async () => {
    try {
      const res = await contentfulClient.getEntries<TypeImageGallerySkeleton>({
        content_type: "imageGallery",
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
    <div className="mx-[5%] pt-16 pb-24">
      <div className="mb-[3rem] text-center">
        <h1 className="text-4xl uppercase font-bold">gallery</h1>
        <hr className="h-1 w-[10%] mx-auto bg-[#2d2d2d] mt-3" />
        <p className="mt-4">discover our story</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {data.map((value, index) => (
          <Dialog key={index}>
            <DialogTrigger>
              <div>
                <Image
                  src={`https:${
                    (value.fields.img as TypeImgAsset)?.fields.file.url
                  }`}
                  alt="img"
                  width={1000}
                  height={300}
                  quality={100}
                  className="object-cover h-[200px] md:h-[400px] lg:h-[300px] w-full"
                />
              </div>
            </DialogTrigger>
            <DialogContent className="h-[350px] md:h-[470px]">
              <Card className="m-2">
                <CardContent className="p-0">
                  <div>
                    <Image
                      src={`https:${
                        (value.fields.img as TypeImgAsset)?.fields.file.url
                      }`}
                      alt="img"
                      width={1000}
                      height={300}
                      quality={100}
                      className="object-cover h-[290px] md:h-[400px] rounded-lg"
                    />
                  </div>
                </CardContent>
              </Card>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
};

export default Jersey;
