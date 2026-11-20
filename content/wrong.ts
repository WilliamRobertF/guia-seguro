import type { Source } from "@/lib/types";

export const wrongPage = {
  title: "Se algo deu errado",
  intro:
    "Respire. Isso acontece com muita gente, inclusive com quem entende de tecnologia. Golpistas usam técnicas pensadas para enganar, e cair não é falta de inteligência. O importante é agir com calma e na ordem abaixo.",
  steps: [
    "Pare de responder e não envie mais dinheiro nem códigos.",
    "Avise o seu banco pelo aplicativo ou pelo número oficial e peça para contestar a transação. No Pix, procure \"Contestar esta transação\" no extrato ou na seção Pix (o nome pode variar de banco para banco): isso aciona o Mecanismo Especial de Devolução, do Banco Central, e vale por até 80 dias. Quanto antes, maior a chance de o dinheiro ainda estar na conta de destino. A devolução depende de o banco confirmar a fraude e de haver saldo, então não é garantida.",
    "Troque as senhas, começando pelo e-mail principal, e ative a verificação em duas etapas.",
    "Se o WhatsApp foi clonado, avise seus contatos por outro meio.",
    "Guarde as provas: conversas, áudios, números de telefone, links e comprovantes.",
    "Registre boletim de ocorrência.",
    "Se envolver dados ou fotos de alunos, avise a coordenação.",
    "Se o celular foi roubado ou perdido, registre a ocorrência no Celular Seguro pelo site ou peça a uma pessoa de confiança cadastrada que faça pelo aplicativo.",
  ],
  closing:
    "Contar o que aconteceu para alguém de confiança ajuda você e ajuda os outros a não caírem.",
  sources: [
    {
      label: "progresso.com.br",
      url: "https://progresso.com.br/index.php/2026/06/24/policia-cientifica-de-ms-orienta-idosos-a-reconhecer-golpes-digitais-no-junho-prata/",
    },
    {
      label: "idec.org.br",
      url: "https://idec.org.br/dicas-e-direitos/celular-seguro-como-funciona",
    },
  ] as Source[],
  reviewedAt: "2026-11-18",
};
