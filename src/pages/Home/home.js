import React from "react";
import { Hero } from "src/components/Hero";
import { Header } from "src/components/Header";
import { BackgroundBubbles } from "src/components/BackgroundBubbles";
import { CardProvince } from "src/components/CardProvince";
import { provinces } from "src/data/provinces";
import BACKGROUND from "src/assets/images/backgroundhome.jpg";
import { HumanDialog } from "src/components/HumanDialog";


export default function Home() {

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
              <div>
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
        </BackgroundBubbles>
      </main>
    </>
  );
}
