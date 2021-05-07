import React from "react";
import { Button } from "../Button";
import { useTranslator } from 'src/context/TranslatorContext'


export default function Summary({showMoreInfo, handleShowMore, maxCharacters, summary}) {
  const { isTranslator } = useTranslator()
  return (
    <div className='md:w-3/4 flex flex-col'>
      <div
        className={`${
          !showMoreInfo && "detailProvice_line-clamp"} transition-all overflow-hidden overflow-ellipsis`}
      >
        {summary}
      </div>
      <Button onClick={handleShowMore} className="ml-auto text-blue-500 hover:text-blue-400 transition-all p-0 text-sm">
      {isTranslator ? showMoreInfo ? "Mostrar menos" : "Mostrar más" : showMoreInfo ? "Show less" : "Show more"}
      </Button>
    </div>
  );
}
