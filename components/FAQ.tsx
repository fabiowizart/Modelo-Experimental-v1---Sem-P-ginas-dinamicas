import React, { useState } from 'react';

interface FAQItemData {
  question: string;
  answer: string;
}

interface FAQProps {
  faqData: FAQItemData[];
}

const FAQItem: React.FC<{
  item: { question: string; answer: string };
  isOpen: boolean;
  onClick: () => void;
}> = ({ item, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-700">
      <button
        onClick={onClick}
        className="w-full text-left py-6 flex justify-between items-center focus:outline-none"
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-medium text-white">{item.question}</h3>
        <span className="text-indigo-400 transform transition-transform duration-300">
           <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`w-6 h-6 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <p className="pb-6 pr-4 text-gray-400">{item.answer}</p>
      </div>
    </div>
  );
};

const FAQ: React.FC<FAQProps> = ({ faqData }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-10">
          Perguntas Frequentes
        </h2>
        <div className="bg-gray-900 rounded-lg shadow-xl px-6">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              item={item}
              isOpen={openIndex === index}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
