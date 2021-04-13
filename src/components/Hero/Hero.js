import React from "react";

export default function Hero({ background, height = '400px', title }) {
  return (
    <div className="HeroParallax" style={{ height: height, backgroundImage: `url(${background})` }}>
        <div className="HeroParallax__text text-4xl">{title}</div>
    </div>
  );
}
