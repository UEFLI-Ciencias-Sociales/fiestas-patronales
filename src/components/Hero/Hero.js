import React from "react";

export default function Hero({ background, height = '400px', title, subTitle }) {
  return (
    <div className="HeroParallax flex-col" style={{ height: height, backgroundImage: `url(${background})` }}>
        <div className="HeroParallax__text text-4xl underline">{title}
        <div className="HeroParallax__text text-2xl">{subTitle}</div>
        </div>
        <div className="HeroParallax__text mt-16 text-4xl">{"Los Cazntones de la provincia de Loja"}</div>
        
    </div>
  );
}
