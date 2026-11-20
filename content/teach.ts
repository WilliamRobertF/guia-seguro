import type { Source, TeachSection } from "@/lib/types";

export const teachPage = {
  title: "Conversar e ensinar",
  intro:
    "Quem entende um pouco mais de tecnologia costuma virar a pessoa de confiança da família e da escola. Aqui estão formas de ajudar sem assustar.",
  sections: [
    {
      title: "Com crianças e adolescentes",
      items: [
        "Conversar vale mais do que proibir. Especialistas defendem diálogo e relação de confiança em vez de restrição pura.",
        "Para os menores, regras simples: não compartilhar senhas e não conversar com desconhecidos.",
        "Deixe claro que a criança pode contar uma experiência ruim sem levar bronca. O guia do CERT.br pede que pais e responsáveis estimulem os filhos a compartilhar essas experiências.",
        "Controle parental é um complemento ao diálogo, não um substituto.",
        "O portal Internet Segura (CERT.br e NIC.br) tem guias gratuitos para crianças de 8 a 12 anos, para pais e responsáveis, para adolescentes (Internet com Responsa) e para educadores.",
        "Para denunciar ou pedir orientação: SaferNet Brasil e Disque 100.",
      ],
    },
    {
      title: "Com idosos",
      items: [
        "Golpes mais citados: falso funcionário de banco, links falsos, mensagem de falso parente, perfil clonado e pedido de Pix.",
        "Regra de ouro: confirmar com outro familiar antes de agir, mesmo com pressa ou comoção.",
        "Ajude sem tomar o controle: a senha é só do titular e quem digita é a própria pessoa, com o familiar ao lado explicando.",
        "Nunca compartilhe a senha do gov.br com terceiros.",
        "Se algo acontecer, preserve as provas: conversas, áudios, números de telefone, links e comprovantes.",
        "Aumentar o tamanho da letra e usar os recursos de acessibilidade do celular ajuda na autonomia.",
      ],
    },
    {
      title: "Para espalhar bons hábitos",
      items: [
        "Ensine fazendo: sente junto e configure (duas etapas, conferir o endereço de um link), em vez de só mandar texto.",
        "Fale de hábitos, não de medo, e combine uma palavra-chave da família.",
        "Reaja sem julgar quando alguém cair, para que a pessoa conte rápido.",
        "Dê o exemplo: quem educa é visto como referência.",
      ],
    },
  ] as TeachSection[],
  sources: [
    { label: "internetsegura.br", url: "https://internetsegura.br/" },
    {
      label: "internetsegura.br (guia para a sala de aula)",
      url: "https://internetsegura.br/pdf/guia_internet_com_responsa_na_sua_sala_de_aula.pdf",
    },
    {
      label: "gazetasp.com.br",
      url: "https://www.gazetasp.com.br/brasil/dialogar-sobre-conteudos-online-com-filhos-e-mais-eficaz-do-que/",
    },
    {
      label: "em.com.br",
      url: "https://em.com.br/educacao/2025/09/7254949-como-orientar-criancas-e-adolescentes-para-um-uso-seguro-da-internet.html",
    },
    {
      label: "diariodepernambuco.com.br",
      url: "https://www.diariodepernambuco.com.br/noticia/brasil/2022/10/amp/guias-orientam-criancas-e-pais-para-uso-seguro-da-internet.html",
    },
    {
      label: "santander.com.br",
      url: "https://www.santander.com.br/blog/educacao-financeira/seguranca-dos-idosos/",
    },
    {
      label: "serasa.com.br",
      url: "https://www.serasa.com.br/blog/ensinar-idosos-usar-app-de-bancos/",
    },
    {
      label: "em.com.br",
      url: "https://www.em.com.br/trends/2026/05/7426066-inss-como-ajudar-idosos-a-fazer-a-prova-de-vida-digital-com-seguranca.html",
    },
  ] as Source[],
  reviewedAt: "2026-11-18",
};
