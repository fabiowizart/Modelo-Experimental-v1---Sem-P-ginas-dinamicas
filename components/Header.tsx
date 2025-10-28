
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <svg className="w-8 h-8 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
          <h1 className="text-2xl font-bold text-white tracking-wider">Nebula</h1>
        </div>
        <a 
          href="#comprar" 
          className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded-full transition duration-300 transform hover:scale-105 hidden sm:block"
        >
          Comprar Agora
        </a>
      </div>
    </header>
  );
};

export default Header;
