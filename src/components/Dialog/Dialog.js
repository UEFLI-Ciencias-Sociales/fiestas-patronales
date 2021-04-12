import React from "react";
import Busto from "src/assets/images/busto.png";

export default function Dialog() {
  return (
    <div className="nuevo">
      <div className="container-image">
        <img className="image" src={Busto} />
      </div>
      <div className="content-talkbubble">
        <div className="talkbubble">esto es un dialogo</div>
      </div>
    </div>
  );
}
