import React from "react";
import IMAGE from "src/assets/images/human-dialog.png";
import DialogSVG from "../Icons/DialogSVG";

export default function HumanDialog() {
  return (
    <div className="flex justify-center relative max-h-64">
      <div className="relative pr-32">
        <div>
          <img className='max-h-64 w-auto' src={IMAGE} alt="sadsds" />
        </div>
        <div className="absolute top-0 -right-16 pl-3 pb-3">
          <div className="p-4 bg-blue-500 rounded-lg w-64 text-white">
            Hola comsda sdas dasdas dasd asd aso estas
          </div>
          <DialogSVG className="text-blue-500 absolute left-0 bottom-0" />
        </div>
      </div>
    </div>
  );
}
