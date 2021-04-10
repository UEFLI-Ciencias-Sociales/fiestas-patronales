import React, { useState } from "react";
import { provinces } from "src/pages/Home/provinces";
import PhotoProvince from "./PhotoProvince";
import Summary from "./Summary";

export default function DetailProvince({
  province,
  summary,
  leftImage,
  path,
  rightImage,
}) {

  const [showMoreInfo, setShowMoreInfo] = useState(false)

  const handleShowMore = () => setShowMoreInfo(!showMoreInfo)

  return (
    <section className='max-w-screen-lg mx-auto flex flex-col rounded-2xl shadow p-8 mb-16'>
      <h2 className="text-lg font-semibold mb-4">{province}</h2>
      <article className={`img-animation ${rightImage && 'md:flex-row-reverse'} text-gray-500 md:flex-row flex-col flex-col-reverse flex md:items-center mb-4 `}>
        <PhotoProvince rightImage={rightImage} leftImage={leftImage} province={provinces} />
        <Summary showMoreInfo={showMoreInfo} handleShowMore={handleShowMore} summary={summary} />
      </article>
      <a href={path} className='rounded-lg px-4 text-center md:ml-auto py-2 text-white bg-blue-500 w-full md:w-auto md:inline-block'>
        Ir a la foro
        </a>
    </section>
  );
}
