import React from "react";
import { Hero } from "src/components/Hero";
import { Header } from "src/components/Header";
import { BackgroundBubbles } from "src/components/BackgroundBubbles";
import { CardProvince } from "src/components/CardProvince";

import { provinces } from "src/data/provinces";
import BACKGROUND from "src/assets/images/backgroundhome.jpg"
import HumanDialog from "src/components/HumanDialog/HumanDialog";


export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero background={BACKGROUND} title='Los cantones de la provincia de Loja' />
        <BackgroundBubbles className='container lg:max-w-screen-1200 mx-auto px-4 pt-6'>
          {provinces.map((province, index) => (
            <div className='flex flex-col'>
              <CardProvince key={index} {...province} />
              <HumanDialog />
            </div>
          ))}
        </BackgroundBubbles>
      </main>
    </>
  );
}
