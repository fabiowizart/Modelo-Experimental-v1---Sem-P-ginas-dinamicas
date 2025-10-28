import React from 'react';
import StarIcon from './icons/StarIcon';
import SoundWaveIcon from './icons/SoundWaveIcon';
import SmartPhoneIcon from './icons/SmartPhoneIcon';

const featureIcons = [
  <StarIcon className="w-12 h-12 text-indigo-400" />,
  <SoundWaveIcon className="w-12 h-12 text-indigo-400" />,
  <SmartPhoneIcon className="w-12 h-12 text-indigo-400" />,
];

interface Feature {
  title: string;
  description: string;
}

interface FeaturesProps {
  features: Feature[];
}


const Features: React.FC<FeaturesProps> = ({ features }) => {
  return (
    <section id="interest" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Por Que o Nebula é Diferente de Tudo que Você Já Viu?
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          Nebula não é apenas um projetor, é uma experiência de bem-estar completa, projetada pela ciência para melhorar seu sono e relaxamento.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center p-6 bg-gray-800 rounded-lg shadow-lg">
              <div className="mb-4">{featureIcons[index] || featureIcons[0]}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
