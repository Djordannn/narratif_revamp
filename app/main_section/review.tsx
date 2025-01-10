"use client";
import React from "react";
import { RxInstagramLogo } from "react-icons/rx";
import Marquee from "react-fast-marquee";

// interface IReview {
//   ig: string;
//   text: string;
// }

const dataReview = [
  {
    ig: "@heru031",
    text: "Because I like the design of the product which is very attractive and has very cool colors, making this product attractive to various groups.",
  },
  {
    ig: "@d_nish127",
    text: "I saw the first impressions of the very interesting narrative product, I can use it for my daily activities and it will also be the vendor of choice when I want to make a new t-shirt.",
  },
  {
    ig: "@miftah_i_saputra",
    text: "Design is simple and can be used to hang out and seen from the material is very good, it doesn't make you feel hot.",
  },
  {
    ig: "@a_rdhifs",
    text: "Narratif's products are very good, good materials combined with contemporary designs, making all your OOTD activities even more awesome.",
  },
];

const Review = () => {
  const newDataReview = dataReview.map((value, index) => {
    return (
      <div
        key={index}
        className="bg-[#eeee] w-[400px] md:w-[450px] h-[230px] md:h-[200px] p-4 flex flex-col justify-between"
      >
        <div className=" ">
          <div className="flex items-center gap-2 mb-2">
            <p className="text-2xl">
              <RxInstagramLogo />
            </p>
            <div className="font-semibold">{value.ig}</div>
          </div>
          <p className="py-3">{value.text}</p>
        </div>
      </div>
    );
  });

  return (
    <div className="pb-24 mb-6 mx-[5%] md:mx-0">
      <div className="text-center md:pr-[5%]">
        <h2 className="text-3xl">what people say</h2>
        <hr className="h-1 w-[10%] mx-auto bg-[#2d2d2d] mt-3" />
        <p className="mt-4 2xl:text-lg">
          what other people say is the result of our hard work
        </p>
      </div>
      <div>
        <Marquee pauseOnClick={true}>
          <div className="mt-[4rem] flex gap-4 pr-0 mx-2">{newDataReview}</div>
        </Marquee>
      </div>
    </div>
  );
};

export default Review;
