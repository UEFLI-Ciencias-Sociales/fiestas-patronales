import React from "react";
import { Link } from 'react-router-dom'
import LOGO from "src/assets/images/logo.png"

export default function Header() {
  return (
    <header >
      <div className='bg-white h-16 shadow py-2 px-4 z-10 w-full fixed'>
        <nav className='flex h-full items-center justify-between mx-auto max-w-screen-lg'>
          <div className="h-full flex items-center">
            <img className="max-h-full" src={LOGO} alt='Logo UEFLI' />
            <span className='ml-2 block md:text-base text-sm'>UEFLI Ciencias Sociales</span>
          </div>
          <Link
            to='/quiz'
            className="px-4 py-2 bg-blue-500 btn-press text-white rounded-lg md:text-base text-sm"
          >
            Iniciar Quiz
          </Link>
        </nav>
      </div>
      <div className='h-16' />
    </header>
  );
}
