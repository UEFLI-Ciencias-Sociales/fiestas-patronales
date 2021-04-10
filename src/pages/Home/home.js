import React from "react";
import { DetailProvince } from "src/components/DetailProvince";
import { Header } from "src/components/Header";
import { provinces } from "./provinces";
import { Hero } from "src/components/Hero";

const IMAGE_HERO="https://i.pinimg.com/736x/7d/eb/80/7deb80ae4e7ec859162d7c234f981524--ecuador-monuments.jpg";
const LOJA_HERO="https://galapagosecotours.com/wp-content/uploads/2015/11/loja_ecuador_011.jpg";
export default function Home() {
  return (
    <>
    <Header />
    <Hero background={LOJA_HERO}>Los Cantones de la Provincia de Loja</Hero>
      <main>
        {/* <Hero background='' /> */}
        <div className='container lg:max-w-screen-1200 mx-auto px-4'>
          {provinces.map((item, index) => <DetailProvince {...item} key={index} />)}
        </div>
      </main>
    </>
  );
}
