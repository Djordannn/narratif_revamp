"use client";

import React, { useEffect, useState } from "react";
import { TypeInfoSkeleton } from "@/types/typeInfo";
import contentfulClient from "@/lib/contentfulClient";
import { Entry } from "contentful";
import { LuCalendarDays } from "react-icons/lu";
import { LuClock } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import { LuLink } from "react-icons/lu";

const Blog = () => {
  const [data, setData] = useState<Entry<TypeInfoSkeleton>[]>([]);

  const fetchData = async () => {
    try {
      const res = await contentfulClient.getEntries<TypeInfoSkeleton>({
        content_type: "info",
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
    <div className="mx-[8%] lg:mx-[14%] pt-14 pb-14 2xl:pb-44">
      <div className="mb-[5rem] text-center">
        <h1 className="text-4xl uppercase font-bold">Info</h1>
        <hr className="h-1 w-[10%] mx-auto bg-[#2d2d2d] mt-3" />
        <p className="mt-4">discover our story</p>
      </div>
      <div className="w-[100%] gap-y-24 gap-4 md:gap-6 ">
        {data.length > 0 ? (
          data.map((value, index) => (
            <div key={index} className="mb-6">
              <div>
                <h3 className="font-medium">
                  {" "}
                  {value.fields.title && typeof value.fields.title === "string"
                    ? value.fields.title
                    : "No Title"}
                </h3>
                <p className="text-[14px]">
                  {" "}
                  {value.fields.description &&
                  typeof value.fields.description === "string"
                    ? value.fields.description
                    : "No description"}
                </p>
                <div className="mt-2 lg:mt-4">
                  {(value.fields as { linkUrl?: string }).linkUrl && (
                    <a
                      href={(value.fields as { linkUrl?: string }).linkUrl}
                      className="text-[12px]"
                    >
                      <Button variant={"outline"}>
                        link
                        <LuLink />
                      </Button>
                    </a>
                  )}
                </div>
              </div>
              <div className="mt-4 text-sm flex gap-4">
                <div className="flex items-center gap-1">
                  <LuCalendarDays />
                  <p>
                    {typeof value.fields.dateTime === "string"
                      ? value.fields.dateTime.split("T")[0]
                      : "N/A"}
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  <LuClock />
                  <p>
                    {typeof value.fields.dateTime === "string"
                      ? value.fields.dateTime.split("T")[1]
                      : "N/A"}
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Data not found!!</p>
        )}
      </div>
    </div>
  );
};

export default Blog;
