import React from 'react'

const perfil = {
  nombre: 'juan',
  apel: 'romero'
}

export default function Hero({ background }) {
  return (
    <div style={{ background: `url(${background})` }}>
      <div>
        Loja
      </div>
      <div />
    </div>
  )
}
