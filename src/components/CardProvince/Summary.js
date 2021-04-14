import React from "react";
import { Button } from "../Button";


export default function Summary({showMoreInfo, handleShowMore, maxCharacters, summary}) {
  return (
    <div className='md:w-3/4 flex flex-col'>
      <div
        className={`${
          !showMoreInfo && "detailProvice_line-clamp"} transition-all overflow-hidden overflow-ellipsis`}
      >
        {summary}
      </div>
      <Button onClick={handleShowMore} className="ml-auto text-blue-500 hover:text-blue-400 transition-all p-0 text-sm">
        Mostrar {showMoreInfo ? "menos" : "más"}
      </Button>
    </div>
  );
}
