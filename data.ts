import { Testimonial } from './types';

export const initialData = {
  hero: {
    titleLine1: 'Transforme Suas Noites.',
    titleLine2: 'Descubra o Universo com Nebula.',
    subtitle: 'Adormeça sob um céu estrelado personalizado, ao som de paisagens sonoras relaxantes, e desperte sentindo-se completamente renovado.',
  },
  features: [
    {
      title: 'Projeções Hiper-realistas',
      description: 'Nossa tecnologia patenteada mapeia constelações reais e nebulosas vibrantes, criando uma experiência imersiva única no seu teto.',
    },
    {
      title: 'Paisagens Sonoras com IA',
      description: 'Sincronizado com a projeção, o Nebula gera sons ambientes relaxantes que se adaptam ao seu ritmo de sono para uma noite perfeita.',
    },
    {
      title: 'Controle Inteligente',
      description: 'Use nosso aplicativo para escolher seu céu noturno, programar sessões de relaxamento e integrar com sua casa inteligente.',
    },
  ],
  solutions: [
    {
      imageUrl: 'https://picsum.photos/600/400?random=6',
      title: 'Sono Profundo e Restaurador',
      description: 'Crie o ambiente perfeito para adormecer. As projeções calmantes e os sons adaptativos reduzem a ansiedade e promovem um sono mais profundo e reparador.',
      buttonText: 'Melhore seu Sono',
    },
    {
      imageUrl: 'https://picsum.photos/600/400?random=7',
      title: 'Foco para Meditação e Yoga',
      description: 'Transforme qualquer cômodo em um santuário de paz. Use o Nebula para criar um cenário imersivo que aprofunda sua concentração e relaxamento durante a meditação.',
      buttonText: 'Encontre sua Paz',
    },
    {
      imageUrl: 'https://picsum.photos/600/400?random=8',
      title: 'Noites Mágicas para Crianças',
      description: 'Estimule a imaginação dos seus filhos e acalme o medo do escuro. Uma galáxia no teto torna a hora de dormir uma aventura divertida e tranquila.',
      buttonText: 'Encante Seus Filhos',
    },
  ],
  testimonials: [
    {
      name: 'Ana S.',
      role: 'Designer de Interiores',
      quote: 'O Nebula mudou completamente minha rotina de sono. Nunca me senti tão relaxada e inspirada ao acordar. É a peça central do meu quarto.',
      avatarUrl: 'https://picsum.photos/100/100?random=2',
    },
    {
      name: 'Marcos P.',
      role: 'Desenvolvedor de Software',
      quote: 'É como ter um pedaço do universo no meu quarto. Me ajuda a desligar depois de um dia longo de codificação. Meus filhos também adoram!',
      avatarUrl: 'https://picsum.photos/100/100?random=3',
    },
    {
      name: 'Juliana F.',
      role: 'Professora de Yoga',
      quote: 'Uso o Nebula durante minhas sessões de meditação em casa. A combinação das luzes e sons é simplesmente mágica. Recomendo a todos os meus alunos.',
      avatarUrl: 'https://picsum.photos/100/100?random=4',
    },
  ] as Testimonial[],
  faq: [
    {
      question: 'Qual a diferença do Nebula para outros projetores de estrelas?',
      answer: 'O Nebula utiliza projeção a laser de alta definição para mapear constelações reais e é o único com um sistema de som inteligente que se adapta ao seu ambiente e ritmo de sono para uma imersão completa.',
    },
    {
      question: 'A instalação é complicada?',
      answer: 'Não! Basta ligar o Nebula na tomada, conectá-lo ao Wi-Fi através do nosso aplicativo intuitivo e ele está pronto para usar. Leva menos de 5 minutos.',
    },
    {
      question: 'Posso usar minhas próprias músicas ou playlists?',
      answer: 'Sim! O Nebula funciona como uma caixa de som Bluetooth de alta qualidade. Você pode conectar seu celular e ouvir suas músicas, podcasts ou audiolivros favoritos sob as estrelas.',
    },
    {
      question: 'Qual a política de garantia e devolução?',
      answer: 'Oferecemos uma garantia de 1 ano contra defeitos de fabricação e uma política de devolução sem perguntas de 30 dias. Se você não amar seu Nebula, nós devolvemos o seu dinheiro.',
    },
  ],
  cta: {
    title: 'Pronto Para Viajar Pelas Estrelas?',
    subtitle: 'Receba seu Nebula em casa com frete grátis e transforme seu quarto no seu santuário pessoal. Garantia de 30 dias para devolução.',
    originalPrice: 'R$ 1.199,00',
    discountedPrice: 'R$ 899,00',
    buttonText: 'Comprar Agora e Garantir o Seu',
  },
};
