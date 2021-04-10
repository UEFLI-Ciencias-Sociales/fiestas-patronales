import React from "react";
import { DetailProvince } from "src/components/DetailProvince";
import { Header } from "src/components/Header";
import { provinces } from "./provinces";
import {NavBar} from "src/components/NavBar";

export default function Home() {
  return (
    <>
    <Header />
      <main>
        <Hero background='' />
        <div className='container lg:max-w-screen-1200 mx-auto px-4'>
          {provinces.map((item, index) => <DetailProvince {...item} key={index} />)}
        </div>
      </main>
    </>
  );
}
