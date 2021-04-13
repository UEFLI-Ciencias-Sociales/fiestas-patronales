import React from "react";
import { CardProvince } from "src/components/CardProvince";
import { Header } from "src/components/Header";
import { Hero } from "src/components/Hero";
import { Dialog } from "src/components/Dialog";
import BACKGROUND from "src/assets/images/backgroundhome.jpg"

import { provinces } from "./provinces";

export default function Home() {

  return (
    <>
    <Header />
    <Hero background={BACKGROUND}>
      Los Cantones de la Provincia de Loja
    </Hero>
      {/* <main className=' bg-gray-50'> */}
      <main className='font-image'>
        <div className='container lg:max-w-screen-1200 mx-auto px-4'>
          {provinces.map((item, index) => <>
          <CardProvince {...item} key={index} />
          <Dialog/>
          </>
          )}
        </div>
      </main>
    </>
  );
}
