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
<<<<<<< HEAD
          {provinces.map(({showDialog, dialog, ...province}, index) => (
            <div className='flex flex-col'>
              <CardProvince key={index} {...province} />
              {showDialog && <HumanDialog dialog={dialog} />}
=======
          {provinces.map((province, index) => (
            <div className='flex flex-col'>
              <CardProvince key={index} {...province} />
              <HumanDialog />
>>>>>>> 55b8b291a5f31c1b58d46d8dcf0045b779232bd8
            </div>
          ))}
        </BackgroundBubbles>
      </main>
    </>
  );
}
