import React from "react";
import Image from "next/image";
import contentfulClient from "@/lib/contentfulClient";
import { TypeImgGallerySkeleton } from "@/types/galleryCms";
import { TypeImgAsset } from "@/types/typeImage";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";

const getImg = async () => {
  try {
    const res = await contentfulClient.getEntries<TypeImgGallerySkeleton>({
      content_type: "imgGallery",
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};

const Gallery = async () => {
  const data = await getImg();
  return (
    <div className="pt-8 md:pt-14 pb-24">
      <div className="mb-[3rem] md:mb-[6rem] text-center">
        <h1 className="text-4xl uppercase font-bold">gallery</h1>
        <hr className="h-1 w-[10%] mx-auto bg-[#2d2d2d] mt-3" />
        <p className="mt-4">discover our story</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-[5%]">
        {data &&
          data.items?.map((value, index) => (
            <Dialog key={index}>
              <DialogTrigger>
                <div>
                  <Image
                    src={`https:${
                      (value.fields.imgGallery as TypeImgAsset)?.fields.file.url
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
                          (value.fields.imgGallery as TypeImgAsset)?.fields.file
                            .url
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

export default Gallery;
