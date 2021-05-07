import React from "react";

export default function StudentEnglish({
  studentImage,
  studentName,
  studentAudio,
}) {
  return (
    <div className='grid place-content-center mb-4'>
        <div className="flex flex-col md:flex-row items-center">
            <div className="rounded-full md:mb-0 mb-4 h-32 w-32 overflow-hidden justify-self-center col-start-1 col-end-4">
                <img src={studentImage} className="h-full w-full object-cover" alt="Imagen de la estudiante" />
            </div>
            <div className="grid gap-2 items-center md:ml-4">
                <div className="text-xl text-center md:text-left">{studentName}</div>
                {/* <audio controls style={{backgroundColor: '#f1f3f4', borederRadius: '1rem'}}> */}
                <audio controls >
                </audio>
            </div>
        </div>
    </div>
  );
}
