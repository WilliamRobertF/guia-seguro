import type { Source, TeachSection } from "@/lib/types";

export const teachPage = {
  title: "Conversar e ensinar",
  intro:
    "Quem entende um pouco mais de tecnologia costuma virar a pessoa de confiança da família. Aqui estão formas de ajudar sem assustar.",
  sections: [
    {
      title: "Com crianças e adolescentes",
      items: [
        {
          title: "Converse mais do que proíba",
          body:
            "Especialistas defendem diálogo e relação de confiança em vez de restrição pura. Pergunte o que a criança curte, que jogos e redes usa e com quem conversa, com curiosidade e sem julgamento.",
        },
        {
          title: "Combine regras simples",
          body:
            "Para os menores, comece pelo básico: não compartilhar senhas e não conversar com desconhecidos. Explique o motivo em vez de só proibir. A senha é como a chave de casa, e nem todo mundo na internet é quem diz ser.",
        },
        {
          title: "Deixe a porta aberta",
          body:
            "Deixe claro que a criança pode contar uma experiência ruim sem levar bronca. O guia do CERT.br pede que pais e responsáveis estimulem os filhos a compartilhar essas experiências, e a Polícia Federal orienta acolher em vez de julgar ou punir, lembrando que a culpa nunca é da vítima.",
        },
        {
          title: "Use o controle parental como apoio",
          body:
            "O controle parental ajuda, mas funciona como complemento ao diálogo, não como substituto. Combine com a criança o que será limitado e por quê.",
        },
        {
          title: "Materiais prontos e gratuitos",
          body:
            "O portal Internet Segura (CERT.br e NIC.br) reúne guias gratuitos para crianças de 8 a 12 anos, para pais e responsáveis, para adolescentes (Internet com Responsa) e para educadores.",
        },
        {
          title: "Se algo grave acontecer",
          body:
            "O Disque 100 recebe, de graça e 24 horas por dia, denúncias de violações de direitos de crianças e adolescentes, inclusive no ambiente digital. O Conselho Tutelar orienta as famílias e aplica medidas de proteção. A SaferNet Brasil tem um Canal de Ajuda (canaldeajuda.org.br) com orientação anônima por chat ou e-mail para casos como cyberbullying e vazamento de imagens. Se a violência estiver acontecendo agora, ligue 190. Guarde prints e links como registro, sem compartilhar nem repassar conteúdo ilícito.",
        },
      ],
    },
    {
      title: "Com idosos",
      items: [
        {
          title: "Conheça os golpes mais comuns",
          body:
            "Os mais citados são o falso funcionário de banco, os links falsos, a mensagem de falso parente, o perfil clonado e o pedido de Pix. Conversar sobre eles com exemplos do dia a dia ajuda a pessoa a reconhecer a situação quando ela aparecer.",
        },
        {
          title: "Confirmem com outro familiar",
          body:
            "A regra de ouro é confirmar com outro familiar antes de agir, mesmo com pressa ou comoção. Golpistas contam com a urgência, e uma ligação rápida ajuda a desfazer a história.",
        },
        {
          title: "Ajude sem tomar o controle",
          body:
            "A senha é só do titular, e quem digita é a própria pessoa, com o familiar ao lado explicando. Assim ela ganha autonomia em vez de depender de alguém para cada operação.",
        },
        {
          title: "Cuidado com a senha do gov.br",
          body:
            "Nunca compartilhe a senha do gov.br com terceiros, nem mesmo para ajudar em serviços como a prova de vida do INSS.",
        },
        {
          title: "Guarde as provas",
          body:
            "Se algo acontecer, preserve conversas, áudios, números de telefone, links e comprovantes, e avise o banco logo. Veja também a página \"Se algo deu errado\".",
        },
        {
          title: "Facilite o uso do celular",
          body:
            "Aumentar o tamanho da letra e usar os recursos de acessibilidade do celular ajuda a pessoa a ler com calma e a ter mais autonomia.",
        },
      ],
    },
    {
      title: "Para espalhar bons hábitos",
      items: [
        {
          title: "Ensine fazendo",
          body:
            "Sente junto e configure, por exemplo, a verificação em duas etapas ou a conferência do endereço de um link, em vez de só mandar um texto.",
        },
        {
          title: "Fale de hábitos, não de medo",
          body:
            "Mostre o que fazer, e não só o que pode dar errado. Combine uma palavra-chave da família para casos de voz ou mensagem suspeita.",
        },
        {
          title: "Reaja sem julgar",
          body:
            "Quando alguém cair em um golpe, acolha. Quanto mais cedo a pessoa contar, mais cedo dá para avisar o banco e tentar bloquear o dinheiro.",
        },
        {
          title: "Dê o exemplo",
          body:
            "Quem educa é visto como referência. Use senhas diferentes, confira links e mostre que parar para confirmar é normal.",
        },
      ],
    },
  ] as TeachSection[],
  sources: [
    { label: "Internet Segura (CERT.br e NIC.br)", url: "https://internetsegura.br/" },
    {
      label: "Guia Internet com Responsa para educadores",
      url: "https://internetsegura.br/pdf/guia_internet_com_responsa_na_sua_sala_de_aula.pdf",
    },
    {
      label: "Gazeta SP, diálogo com os filhos",
      url: "https://www.gazetasp.com.br/brasil/dialogar-sobre-conteudos-online-com-filhos-e-mais-eficaz-do-que/",
    },
    {
      label: "Estado de Minas, orientar crianças e adolescentes",
      url: "https://em.com.br/educacao/2025/09/7254949-como-orientar-criancas-e-adolescentes-para-um-uso-seguro-da-internet.html",
    },
    {
      label: "Diário de Pernambuco, guias para crianças e pais",
      url: "https://www.diariodepernambuco.com.br/noticia/brasil/2022/10/amp/guias-orientam-criancas-e-pais-para-uso-seguro-da-internet.html",
    },
    {
      label: "Polícia Federal, orientações aos pais",
      url: "https://www.gov.br/pf/pt-br/assuntos/guardioes-da-infancia/material-educativo/orientacoes-para-os-pais-guardioes-da-infancia-pf.pdf",
    },
    {
      label: "Agência Gov, segurança digital de crianças e adolescentes",
      url: "https://agenciagov.ebc.com.br/noticias/202609/seguranca-digital-como-proteger-criancas-e-adolescentes-no-ambiente-online",
    },
    {
      label: "Santander, segurança dos idosos",
      url: "https://www.santander.com.br/blog/educacao-financeira/seguranca-dos-idosos/",
    },
    {
      label: "Serasa, idosos e aplicativos de banco",
      url: "https://www.serasa.com.br/blog/ensinar-idosos-usar-app-de-bancos/",
    },
    {
      label: "Estado de Minas, prova de vida digital com segurança",
      url: "https://www.em.com.br/trends/2026/05/7426066-inss-como-ajudar-idosos-a-fazer-a-prova-de-vida-digital-com-seguranca.html",
    },
    { label: "Canal de Ajuda da SaferNet", url: "https://canaldeajuda.org.br/" },
  ] as Source[],
  reviewedAt: "2026-11-18",
};
