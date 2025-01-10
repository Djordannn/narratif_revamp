import Image from "next/image";
import imgCustom from "/public/image/ladaPapat.jpg";
import img1 from "../../public/image/vintageRetor.png";
import img2 from "../../public/image/boxing.png";
import img3 from "../../public/image/uns.png";
import img4 from "../../public/image/undip.png";
import img5 from "../../public/image/tennis.png";

const data = [
  {
    title: "name",
    price: 99000,
    imgUrl: img1,
  },
  {
    title: "name",
    price: 99000,
    imgUrl: img2,
  },
  {
    title: "name",
    price: 99000,
    imgUrl: img3,
  },
  {
    title: "name",
    price: 99000,
    imgUrl: img4,
  },
  {
    title: "name",
    price: 99000,
    imgUrl: img5,
  },
];

const CustomJersey = () => {
  const newData = data.map((value, index) => {
    return (
      <div key={index}>
        <Image
          src={value.imgUrl}
          alt="imgCard2.jpg"
          className="w-[100%] h-[230px] md:h-[300px] bg-[#eeee] object-contain pb-7 lg:h-[250px]  2xl:h-[300px]"
        />
        <div className="mt-2">
          <h2 className="text-lg md:text-xl font-thin">{value.title}</h2>
          <p className="text-lg md:text-xl">
            {value.price.toLocaleString("id", {
              style: "currency",
              currency: "IDR",
            })}
          </p>
        </div>
      </div>
    );
  });
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
        {newData}
      </div>
    </div>
  );
};

export default CustomJersey;
