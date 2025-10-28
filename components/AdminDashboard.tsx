import React from 'react';

const AdminDashboard: React.FC<{ data: any; setData: any }> = ({ data, setData }) => {

  const handleInputChange = (section: string, field: string, value: string) => {
    setData((prev: any) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  const handleListItemChange = (section: string, index: number, field: string, value: string) => {
    setData((prev: any) => ({
      ...prev,
      [section]: prev[section].map((item: any, i: number) =>
        i === index ? { ...item, [field]: value } : item
      ),
    }));
  };

  const InputField = ({ label, value, name, section }: { label: string, value: string, name: string, section: string }) => (
    <div>
      <label htmlFor={`${section}-${name}`} className="block text-sm font-medium text-gray-400 mb-1">{label}</label>
      <input
        type="text"
        id={`${section}-${name}`}
        name={name}
        value={value}
        onChange={(e) => handleInputChange(section, name, e.target.value)}
        className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
    </div>
  );
  
  const TextAreaField = ({ label, value, name, section, index }: { label: string, value: string, name: string, section: string, index?: number }) => (
    <div>
      <label htmlFor={`${section}-${name}-${index}`} className="block text-sm font-medium text-gray-400 mb-1">{label}</label>
      <textarea
        id={`${section}-${name}-${index}`}
        name={name}
        value={value}
        onChange={(e) => handleListItemChange(section, index!, name, e.target.value)}
        rows={3}
        className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
    </div>
  );


  return (
    <div className="bg-gray-900 min-h-screen text-white p-4 sm:p-8">
      <div className="container mx-auto max-w-4xl">
        <header className="flex flex-col sm:flex-row justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-2">Painel de Gerenciamento</h1>
            <p className="text-gray-400">Edite o conteúdo do site aqui.</p>
          </div>
          <a href="/" className="mt-4 sm:mt-0 bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded-full transition duration-300">
            Voltar ao Site
          </a>
        </header>

        <main className="space-y-12">
          {/* Hero Section Form */}
          <fieldset className="border border-gray-700 p-6 rounded-lg">
            <legend className="text-xl font-semibold px-2 text-indigo-400">Seção Hero</legend>
            <div className="space-y-4">
              <InputField label="Título (Linha 1)" name="titleLine1" value={data.hero.titleLine1} section="hero" />
              <InputField label="Título (Linha 2)" name="titleLine2" value={data.hero.titleLine2} section="hero" />
              <InputField label="Subtítulo" name="subtitle" value={data.hero.subtitle} section="hero" />
            </div>
          </fieldset>

          {/* Features Section */}
          <fieldset className="border border-gray-700 p-6 rounded-lg">
            <legend className="text-xl font-semibold px-2 text-indigo-400">Seção de Features</legend>
            {data.features.map((feature: any, index: number) => (
              <div key={index} className="space-y-4 border-b border-gray-800 pb-6 mb-6 last:border-b-0 last:mb-0 last:pb-0">
                <h3 className="text-lg font-medium text-gray-300">Feature {index + 1}</h3>
                <input type="text" value={feature.title} onChange={(e) => handleListItemChange('features', index, 'title', e.target.value)} className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                <textarea value={feature.description} onChange={(e) => handleListItemChange('features', index, 'description', e.target.value)} rows={2} className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              </div>
            ))}
          </fieldset>

          {/* Solutions Section */}
          <fieldset className="border border-gray-700 p-6 rounded-lg">
             <legend className="text-xl font-semibold px-2 text-indigo-400">Seção de Soluções</legend>
             {data.solutions.map((solution: any, index: number) => (
                <div key={index} className="space-y-4 border-b border-gray-800 pb-6 mb-6 last:border-b-0 last:mb-0 last:pb-0">
                  <h3 className="text-lg font-medium text-gray-300">Solução {index + 1}</h3>
                  <input type="text" placeholder="URL da Imagem" value={solution.imageUrl} onChange={(e) => handleListItemChange('solutions', index, 'imageUrl', e.target.value)} className="w-full bg-gray-700 ..."/>
                  <input type="text" placeholder="Título" value={solution.title} onChange={(e) => handleListItemChange('solutions', index, 'title', e.target.value)} className="w-full bg-gray-700 ..."/>
                  <textarea placeholder="Descrição" value={solution.description} onChange={(e) => handleListItemChange('solutions', index, 'description', e.target.value)} rows={2} className="w-full bg-gray-700 ..."/>
                  <input type="text" placeholder="Texto do Botão" value={solution.buttonText} onChange={(e) => handleListItemChange('solutions', index, 'buttonText', e.target.value)} className="w-full bg-gray-700 ..."/>
                </div>
             ))}
          </fieldset>
          
          {/* CTA Section */}
          <fieldset className="border border-gray-700 p-6 rounded-lg">
            <legend className="text-xl font-semibold px-2 text-indigo-400">Seção CTA (Call to Action)</legend>
            <div className="space-y-4">
              <InputField label="Título" name="title" value={data.cta.title} section="cta" />
              <InputField label="Subtítulo" name="subtitle" value={data.cta.subtitle} section="cta" />
              <InputField label="Preço Original" name="originalPrice" value={data.cta.originalPrice} section="cta" />
              <InputField label="Preço com Desconto" name="discountedPrice" value={data.cta.discountedPrice} section="cta" />
              <InputField label="Texto do Botão" name="buttonText" value={data.cta.buttonText} section="cta" />
            </div>
          </fieldset>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
