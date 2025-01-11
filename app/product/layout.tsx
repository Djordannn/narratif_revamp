import React, { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import imgBanner from "../../public/image/imgBanner.jpg";
import Sidebar from "./sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

interface ProductLayoutProps {
  children: ReactNode;
}

export default function ProductLayout({ children }: ProductLayoutProps) {
  return (
    <div>
      <div className="pb-[36px] mx-[5%]">
        <div className="md:mb-[3rem] relative">
          <Image
            src={imgBanner}
            alt="img"
            className="w-[100%] h-[170px] lg:h-[250px] 2xl:h-[300px] object-cover object-center"
          />
          <h1 className="absolute bottom-[1rem] left-[1.5rem] text-xl md:text-3xl text-white tracking-wider">
            Product
          </h1>
        </div>
        <div className="md:hidden py-6 flex justify-center">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button variant={"outline"}>Category</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-[#eeee]">
              <Link href="/product/t_shirt">
                <DropdownMenuItem>T-Shirt</DropdownMenuItem>
              </Link>
              <Link href="/product/jersey">
                <DropdownMenuItem>Jersey</DropdownMenuItem>
              </Link>
              <Link href="/product/vintage">
                <DropdownMenuItem>Vintage</DropdownMenuItem>
              </Link>
              <Link href="/product/custom">
                <DropdownMenuItem>Custom</DropdownMenuItem>
              </Link>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="flex gap-4 2xl:pb-8">
          <Sidebar />
          <div className="w-full lg:w-[80%]">
            <div>{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
