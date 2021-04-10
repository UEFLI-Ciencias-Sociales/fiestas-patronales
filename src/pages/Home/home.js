import React from "react";
import { DetailProvince } from "src/components/DetailProvince";
import { provinces } from "./provinces";
import {NavBar} from "src/components/NavBar";

export default function Home() {
  return (
    <>
      <div className="Home"><NavBar/></div>
      <main className="container lg:max-w-screen-1200 mx-auto px-4">
        {/* <h1 className='font-bold text-gray-00 mb-8 text-2xl pb-4 border-gray-50 border-b-2'>Los cantones de la provincia de Loja</h1> */}
        {provinces.map((item, index) => (
          <DetailProvince {...item} key={index} />
        ))}
      </main>
    </>
  );
}
