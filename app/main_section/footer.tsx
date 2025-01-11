"use client";
import { AiOutlineMail } from "react-icons/ai";
import { RxInstagramLogo } from "react-icons/rx";
import { FaWhatsapp } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { FiFacebook } from "react-icons/fi";
import { PiTiktokLogo } from "react-icons/pi";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/image/logo.png";

const Footer = () => {
  return (
    <div className="footer py-20 bg-[#2d2d2d] text-[#eeee] px-[5%] font-thin">
      <div className="flex flex-col md:flex-row justify-between items-baseline gap-5">
        <div className="md:w-[40%]">
          <div className="flex items-center gap-4">
            <Image
              src={logo}
              alt="img"
              className="w-[50px] xl:w-[80px] bg-[#ffff] p-3 xl:p-5 rounded-lg"
            />
            <h1 className="text-3xl xl:text-5xl">Narratif</h1>
          </div>
          <p className="md:w-[70%] text-sm mt-3">
            Stories don&apops;t only come from customers, other stories will
            also come from us. Wait and follow our journey further.
          </p>
          <div>
            <ul className="flex flex-col mt-5 gap-4 text-2xl">
              <li className="flex gap-4 items-center">
                <AiOutlineMail />
                <p className="text-sm">example@gmail.com</p>
              </li>
              <li className="flex gap-4 items-center">
                <FaWhatsapp />
                <p className="text-sm">+62 84* **** ****</p>
              </li>
              <li className="flex gap-4 items-center">
                <IoLocationOutline />
                <a href="https://www.google.co.id/maps/search/Jl.+Sinar+kencana+V+no.33,+perum+sinar+Waluyo,+kel+kedungmundu,+kec+tembalang,%C2%A0kota%C2%A0Semarang/@-7.0244552,110.471928,18z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI0MTEwNi4wIKXMDSoASAFQAw%3D%3D">
                  <p className="text-sm hover:opacity-75">
                    Jl. Sinar kencana V no.33, perum sinar Waluyo, kel
                    kedungmundu, kec tembalang, kota Semarang
                  </p>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="md:w-[70%] grid grid-cols-2 md:grid-cols-3 justify-between gap-8 md:gap-0">
          <div>
            <div className="mb-4">
              <h2 className="text-lg mb-2">our service</h2>
              <div className="h-1 bg-white w-[30%] md:w-[60%] xl:w-[40%] rounded"></div>
            </div>
            <ul className="flex flex-col gap-3 justify-center">
              <li>
                <Link href="/info">info</Link>
              </li>
              <li>
                <Link href="/product">product</Link>
              </li>
              <li>
                <Link href="/link">contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="mb-4">
              <h2 className="text-lg mb-2">privacy</h2>
              <div className="h-1 bg-white w-[30%] md:w-[60%] xl:w-[40%] rounded"></div>
            </div>
            <ul className="flex flex-col gap-3 justify-center">
              <li>
                <Link href="#">FAQ</Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="mb-4">
              <h2 className="text-lg mb-2">follow me</h2>
              <div className="h-1 bg-white w-[30%] md:w-[60%] xl:w-[40%] rounded"></div>
            </div>
            <div>
              <ul className="flex gap-3">
                <li className="bg-[#3c3c3c] p-3">
                  <a href="https://www.instagram.com/narratif.apparel?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                    <RxInstagramLogo />
                  </a>
                </li>
                <li className="bg-[#3c3c3c] p-3">
                  <a href="https://www.facebook.com/permalink.php/?story_fbid=122111389718497803&id=61564934109406">
                    <FiFacebook />
                  </a>
                </li>
                <li className="bg-[#3c3c3c] p-3">
                  <a href="https://www.tiktok.com/@narratif.apparel?is_from_webapp=1&sender_device=pc">
                    <PiTiktokLogo />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr className="h-1 my-[4rem] bg-white" />
      <div className="-mt-[2rem] text-center">
        <h3 className="text-sm md:text-lg">
          copyright <span className="font-semibold">@narratif.apparel</span> all
          right reserved
        </h3>
      </div>
    </div>
  );
};

export default Footer;
