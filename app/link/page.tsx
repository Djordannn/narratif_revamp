import { TbBrandShopee } from "react-icons/tb";
import { FaWhatsapp } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";

const Link = () => {
  return (
    <div className="text-center py-14 mb-[6rem]">
      <div className="mb-[3rem] md:mb-[6rem] text-center">
        <h1 className="text-4xl uppercase font-bold">get in touch</h1>
        <hr className="h-1 w-[10%] mx-auto bg-[#2d2d2d] mt-3" />
        <p className="mt-4">create your experience with us</p>
      </div>
      <div className="w-[80%] md:w-[60%] mx-auto">
        <ul className="flex flex-col gap-6 lg:w-[50%] mx-auto">
          <li>
            <a
              href="https://shopee.co.id/c6u0mq247d?page=0&sortBy=pop&tab=0"
              className="text-xl flex items-center justify-between gap-4 bg-[#eeee] py-3 px-6 shadow-lg"
            >
              official shoope
              <p className="text-2xl bg-[#2d2d2d] p-3 text-white">
                <TbBrandShopee />
              </p>
            </a>
          </li>
          <li>
            <a
              href="https://api.whatsapp.com/send?phone=6285712705266"
              className="text-xl flex items-center justify-between gap-4 bg-[#eeee] py-3 px-6 shadow-lg"
            >
              admin
              <p className="text-2xl bg-[#2d2d2d] p-3 text-white">
                <FaWhatsapp />
              </p>
            </a>
          </li>
          <li className="">
            <a
              href="https://linktr.ee/clickhereforinfoadmin?fbclid=PAZXh0bgNhZW0CMTEAAabfkGXR4duIKrL63ayopI3EmgoYxBrysNy9vxh-hRnEu4UXt9nOWRDIY0I_aem_veq4_CVwHtr3loxLN7Uspg"
              className="text-xl flex items-center justify-between gap-4 bg-[#eeee] py-3 px-6 shadow-lg"
            >
              linktree
              <p className="text-2xl bg-[#2d2d2d] p-3 text-white">
                <FaLink />
              </p>
            </a>
          </li>
          <li>
            <a
              href="https://www.tiktok.com/@narratif.apparel?is_from_webapp=1&sender_device=pc"
              className="text-xl flex items-center justify-between gap-4 bg-[#eeee] py-3 px-6 shadow-lg"
            >
              tiktok
              <p className="text-2xl bg-[#2d2d2d] p-3 text-white">
                <FaTiktok />
              </p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Link;
