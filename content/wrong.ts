import type { Source } from "@/lib/types";

export const wrongPage = {
  title: "Se algo deu errado",
  intro:
    "Respire. Isso acontece com muita gente, inclusive com quem entende de tecnologia. Golpistas usam técnicas pensadas para enganar, e cair não é falta de inteligência. O importante é agir com calma e na ordem abaixo.",
  steps: [
    "Pare de responder e não envie mais dinheiro nem códigos. Não clique em novos links, mesmo que a pessoa diga que vai resolver.",
    "Avise o seu banco pelo aplicativo ou pelo número oficial e peça para contestar a transação. No Pix, procure \"Contestar esta transação\" no extrato ou na seção Pix (o nome pode variar de banco para banco): isso aciona o Mecanismo Especial de Devolução, do Banco Central, e vale por até 80 dias. Quanto antes, maior a chance de o dinheiro ainda estar na conta de destino. A devolução depende de o banco confirmar a fraude e de haver saldo, então não é garantida.",
    "Troque as senhas, começando pelo e-mail principal, e ative a verificação em duas etapas. O e-mail vem primeiro porque é por ele que se recuperam as outras contas.",
    "Se o WhatsApp foi clonado, avise seus contatos por outro meio, como uma ligação, para ninguém cair em pedidos de dinheiro feitos em seu nome.",
    "Guarde as provas: conversas, áudios, números de telefone, links e comprovantes. Prints e comprovantes ajudam o banco na análise.",
    "Registre boletim de ocorrência, pela delegacia online do seu estado (se houver) ou em uma delegacia, e envie uma cópia ao banco para apoiar a análise.",
    "Se envolver dados ou fotos de outras pessoas, avise quem é responsável por eles, como a coordenação da escola ou o setor do seu trabalho.",
    "Se o celular foi roubado ou perdido, registre a ocorrência no Celular Seguro pelo site ou peça a uma pessoa de confiança cadastrada que faça pelo aplicativo.",
  ],
  closing:
    "Contar o que aconteceu para alguém de confiança ajuda você e ajuda os outros a não caírem.",
  sources: [
    {
      label: "Agência Brasil: nova regra do Pix amplia o prazo para contestar golpe",
      url: "https://agenciabrasil.ebc.com.br/economia/noticia/2026-09/nova-regra-do-pix-amplia-prazo-para-contestar-golpe",
    },
    {
      label: "TecMundo: botão para contestar Pix",
      url: "https://www.tecmundo.com.br/mercado/407469-pix-ganha-botao-para-contestar-envios-errados-ou-golpes-saiba-como-usar.htm",
    },
    {
      label: "Governo Federal: serviço Celular Seguro",
      url: "https://www.gov.br/pt-br/servicos/comunicar-roubo-furto-de-aparelho-pelo-aplicativo-celular-seguro",
    },
    {
      label: "O Progresso: Polícia Científica de MS sobre golpes",
      url: "https://progresso.com.br/index.php/2026/06/24/policia-cientifica-de-ms-orienta-idosos-a-reconhecer-golpes-digitais-no-junho-prata/",
    },
  ] as Source[],
  reviewedAt: "2026-11-18",
};
