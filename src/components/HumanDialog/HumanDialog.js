import React from "react";
import IMAGE from "src/assets/images/human-dialog.png";
import DialogSVG from "../Icons/DialogSVG";

export default function HumanDialog({ dialog, marginBottom }) {
  return (
    <div className={`flex mx-auto justify-center relative max-h-64 ${marginBottom && marginBottom}`}>
      <div className="relative pr-32">
        <div>
          <img className='max-h-48 w-auto' src={IMAGE} alt="campecino" />
        </div>
        <div className="bubble-dialog absolute pl-3">
          <div className="p-4 bg-white rounded-lg text-sm md:text-base text-blue-500">
            {dialog}
          </div>
          <DialogSVG className="text-white absolute left-0 top-1" />
        </div>
      </div>
    </div>
  );
}
