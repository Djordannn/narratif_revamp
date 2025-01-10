"use client";
import Image from "next/image";
import ImgFutsal from "../../public/image/futsal.jpg";
import ImgRunner from "../../public/image/img-prov.jpg";
import ImgJersey from "../../public/image/jersey.jpg";

const data = [
  {
    title: "futsal",
    imgUrl: ImgFutsal,
  },
  {
    title: "vintage",
    imgUrl: ImgRunner,
  },
  {
    title: "custom",
    imgUrl: ImgJersey,
  },
];

export default function Cardshirt() {
  const newData = data.map((value, index) => {
    return (
      <div key={index} className="card-body relative">
        <div className="img-card">
          <Image
            src={value.imgUrl}
            alt="img-shirt"
            className="w-[100%] h-[300px] lg:h-[300px] 2xl:h-[400px] object-cover object-top"
          />
          <div className="absolute bottom-4 left-5">
            <h3 className="text-2xl text-white tracking-tight">
              {value.title}
            </h3>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="hidden md:block py-14 md:py-[38px] mx-[5%]">
      {/* <h2 className="text-2xl font-semibold">collection</h2> */}
      <div className="card grid grid-cols-1 sm:grid-cols-4 grid-rows-auto gap-4 mt-4 animation">
        <div className="w-[70%] mx-auto text-center md:w-[100%] md:text-left">
          <h2 className="text-3xl md:text-4xl 2xl:text-6xl">
            our jersey products
          </h2>
          <p className="mt-2 2xl:text-xl">
            we have several types of clothing products
          </p>
        </div>
        {newData}
      </div>
    </div>
  );
}
