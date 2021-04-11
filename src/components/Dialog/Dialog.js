import React from "react";
import Busto from "src/assets/images/busto.png";

export default function Dialog() {
  return (
    <div className="nuevo">
      <div className="container-image">
        <img  className="image" src={Busto}></img>
      </div>
      {/* <div className="div2 caja"><text>Este es un dato curioso</text></div> */}
      <div className="talkbubble">Cris vale vrg 123</div>
    </div>
  );
}
