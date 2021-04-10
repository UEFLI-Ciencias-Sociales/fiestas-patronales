import React from "react";

const perfil = {
  nombre: "juan",
  apel: "romero",
};

export default function Hero({ background,children}) {

  const textStyles = {
    color: "#1c1c1c",
    fontWeight: "700",
    fontSize: "50px",
    zIndex: "1",
  };

  return (
    <div style={background=`url("${background}")`} className="hero">
      <div className="text-style" >{children}</div>
      <div className="efect"/>
    </div>
  );
}
