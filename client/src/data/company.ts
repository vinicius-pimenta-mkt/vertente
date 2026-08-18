// Cartografia Viva — dados institucionais editáveis da Vertente Vegetal.
export const company = {
  name: "Vertente Vegetal",
  descriptor: "Consultoria Agrícola e Ambiental",
  region: "Ibitirama-ES · Caparaó Capixaba",
  instagramUrl: "https://www.instagram.com/vertentevegetal/",
  instagramHandle: "@vertentevegetal",
  phoneDisplay: "(28) 99994-3392",
  phoneLink: "tel:+5528999943392",
  whatsappNumber: "5528999943392",
  email: "vertentevegetal@gmail.com",
  address: "[endereço completo a confirmar]",
  description: "A Vertente Vegetal ajuda produtores a compreender melhor o território, organizar decisões e avançar com mais segurança em questões agrícolas e ambientais.",
  whatsappMessage: "Olá! Vim pelo site e gostaria de uma conversa sobre minha propriedade.",
};

export const whatsappUrl = `https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(company.whatsappMessage)}`;
