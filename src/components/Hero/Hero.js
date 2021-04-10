import React from "react";

const perfil = {
  nombre: "juan",
  apel: "romero",
};

export default function Hero({ background,children}) {
  const heroStyles = {
    background: `url(${background})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "400px",
    position: "relative",
  };

  const textStyles = {
    color: "#1c1c1c",
    fontWeight: "700",
    fontSize: "50px",
    zIndex: "1",
  };

  return (
    <div style={heroStyles}>
      <div className="text-style" >{children}</div>
      <div className="efect"/>
    </div>
  );
}
