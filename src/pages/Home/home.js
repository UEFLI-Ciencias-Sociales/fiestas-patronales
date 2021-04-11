import React from "react";
import { CardProvince } from "src/components/CardProvince";
import { Header } from "src/components/Header";
import { Hero } from "src/components/Hero";
import BACKGROUND from "src/assets/images/backgroundhome.jpg"

import { provinces } from "./provinces";

export default function Home() {

  // const FONT_MAIN = {
  //   backgroundImage:`url("/static/media/backgroundhome.cc426b90.jpg")`,
  //   backgroundRepeat: "no-repeat",
  //   backgroundSize: "cover",
  //   backgroundAttachment: "fixed",
  //   backgroundPosition: "center",
  //   display: "flex",
  //   justifyContent: "center",
  //   alignItems: "center",
  //   position: "relative",
  // }

  return (
    <>
    <Header />
    <Hero background={BACKGROUND}>
      Los Cantones de la Provincia de Loja
    </Hero>
      {/* <main className=' bg-gray-50'> */}
      <main className='font-image'>
        <div className='container lg:max-w-screen-1200 mx-auto px-4'>
          {provinces.map((item, index) => <CardProvince {...item} key={index} />)}
        </div>
      </main>
    </>
  );
}
