import React, { useState } from "react";
import PhotoProvince from "./PhotoProvince";
import Summary from "./Summary";
import { StudentEnglish } from "../StudentEnglish";
import { useTranslator } from 'src/context/TranslatorContext'


export default function DetailProvince({
  province,
  summary,
  leftImage,
  path,
  rightImage,
  studentImage,
  studentName,
  studentAudio
}) {

  const [showMoreInfo, setShowMoreInfo] = useState(false)
  const { isTranslator } = useTranslator()


  const handleShowMore = () => setShowMoreInfo(!showMoreInfo)

  return (
    <section className='bg-white max-w-screen-lg mx-auto flex flex-col rounded-2xl shadow p-8 mb-16'>
      <h2 className="text-lg font-semibold mb-4">{province}</h2>
      <article className={`img-animation ${rightImage && 'md:flex-row-reverse'} text-gray-500 md:flex-row flex-col flex-col-reverse flex md:items-center mb-4 `}>
        <PhotoProvince rightImage={rightImage} leftImage={leftImage} province={province} />
        <Summary showMoreInfo={showMoreInfo} handleShowMore={handleShowMore} summary={isTranslator ? summary.english : summary.spanish} />
      </article>
      <hr className='mb-4' />
      <StudentEnglish studentImage={studentImage} studentName={studentName} studentAudio={studentAudio}/>
      <a href={path} target='_blank' className='rounded-lg px-4 btn-press text-center md:ml-auto py-2 text-white bg-blue-500 w-full md:w-auto md:inline-block'>
        Ir al blog
        </a>
    </section>
  );
}
