import React from 'react';

interface HeroProps {
  content: {
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
  };
}

const Hero: React.FC<HeroProps> = ({ content }) => {
  return (
    <section 
      id="attention"
      className="min-h-screen flex items-center justify-center text-center relative overflow-hidden"
    >
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url('https://picsum.photos/1920/1080?random=1&blur=5')` }}
      >
        <div className="absolute inset-0 bg-gray-900 bg-opacity-60"></div>
      </div>
      <div className="relative z-10 px-6">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4 leading-tight tracking-tight">
          {content.titleLine1} <br />
          <span className="text-indigo-400">{content.titleLine2}</span>
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300 mb-8">
          {content.subtitle}
        </p>
        <a 
          href="#interest" 
          className="bg-white text-indigo-600 font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105 inline-block"
        >
          Descubra a Magia
        </a>
      </div>
    </section>
  );
};

export default Hero;
