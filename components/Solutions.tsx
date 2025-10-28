import React from 'react';

interface Solution {
  imageUrl: string;
  title: string;
  description: string;
  buttonText: string;
}

interface SolutionsProps {
  solutions: Solution[];
}

const Solutions: React.FC<SolutionsProps> = ({ solutions }) => {
  return (
    <section id="solutions" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Soluções Para o Seu Bem-Estar
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Veja como o Nebula se adapta à sua vida, trazendo mais tranquilidade e momentos inesquecíveis.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col">
              <img src={solution.imageUrl} alt={solution.title} className="w-full h-56 object-cover" />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-white mb-2">{solution.title}</h3>
                <p className="text-gray-400 mb-4 flex-grow">{solution.description}</p>
                <a href="#comprar" className="mt-auto bg-indigo-600 text-white font-bold py-2 px-4 rounded-full text-center hover:bg-indigo-500 transition duration-300 transform hover:scale-105">
                  {solution.buttonText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
