import React from "react";
import { Hero } from "src/components/Hero";
import { Header } from "src/components/Header";
import { BackgroundBubbles } from "src/components/BackgroundBubbles";
import { CardProvince } from "src/components/CardProvince";
import { provinces } from "src/data/provinces";
import BACKGROUND from "src/assets/images/backgroundhome.jpg";
import { HumanDialog } from "src/components/HumanDialog";
import { useTranslator } from "src/context/TranslatorContext";

export default function Home() {
  const { isTranslator, handleToggle } = useTranslator();

  return (
    <>
      <Header />
      <main className="bg-blue-500">
        <Hero
          background={BACKGROUND}
          height="500px"
          title="Los cantones de la provincia de Loja"
        />
        <BackgroundBubbles className="container mx-auto px-4 z-1 relative z-1 pt-8 pb-16">
          {provinces.map(({ showDialog, dialog, ...province }, index) => {
            return (
              <div key={index}>
                <CardProvince {...province} />
                {showDialog && (
                  <HumanDialog
                    marginBottom={
                      index === provinces.length - 1 ? undefined : "mb-16"
                    }
                    dialog={dialog}
                  />
                )}
              </div>
            );
          })}
          <div className="mt-16 bg-white p-8 rounded-2xl shadow">
            <h2 className="text-center font-bold mb-8">
              Conociendo la megadiversisdad y pluriculturalidad local
            </h2>
            <div className="grid md:grid-cols-2 place-center gap-4 ">
              <div className="aspect-ratio-box">
                <iframe
                  title="Video 1"
                  className="aspect-ratio-box-inside"
                  src="https://drive.google.com/file/d/11M4l-Lg1SsgsNFVZzdwVwRV_rHZRQAqG/preview"
                ></iframe>
              </div>
              <div className="aspect-ratio-box">
                <iframe
                  title="Video 2"
                  className="aspect-ratio-box-inside"
                  src="https://drive.google.com/file/d/1JGWREEZrex5KLdt4Do6OVEwKpZIOk_w8/preview"
                ></iframe>
              </div>
            </div>
          </div>
        </BackgroundBubbles>
        <button
          onClick={handleToggle}
          className="w-16 shadow-inner h-16 z-10 outline-none rounded-full text-white bg-black fixed bottom-4 right-2"
        >
          {isTranslator ? "ES" : "EN"}
        </button>
      </main>
    </>
  );
}
