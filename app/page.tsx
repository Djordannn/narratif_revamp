"use client";

import Cardshirt from "@/app/main_section/cardShirt";
import Jumbotron from "@/app/main_section/jumbotron";
import CardProduct from "@/app/main_section/cardProduct";
import Review from "./main_section/review";

export default function Home() {
  return (
    <div>
      <Jumbotron />
      <Cardshirt />
      <CardProduct />
      <Review />
    </div>
  );
}
