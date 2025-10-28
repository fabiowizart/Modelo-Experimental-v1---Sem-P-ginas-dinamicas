import React from 'react';

interface CTAProps {
  content: {
    title: string;
    subtitle: string;
    originalPrice: string;
    discountedPrice: string;
    buttonText: string;
  };
}

const CTA: React.FC<CTAProps> = ({ content }) => {
  return (
    <section id="comprar" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="bg-gradient-to-r from-indigo-700 to-purple-800 rounded-lg shadow-2xl p-8 md:p-12 flex flex-col-reverse md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              {content.title}
            </h2>
            <p className="text-indigo-200 mb-6">
              {content.subtitle}
            </p>
            <div className="text-4xl font-bold text-white mb-6">
              <span className="text-lg opacity-70 line-through mr-2">{content.originalPrice}</span>
              {content.discountedPrice}
            </div>
            <a
              href="#"
              className="bg-white text-indigo-600 font-bold py-4 px-10 rounded-full text-lg transition duration-300 transform hover:scale-105 inline-block shadow-lg"
            >
              {content.buttonText}
            </a>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img src="https://picsum.photos/400/400?random=5" alt="Nebula Product" className="rounded-lg shadow-xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
