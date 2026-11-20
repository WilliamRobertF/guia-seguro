import type { Source } from "@/lib/types";

export const studentsPage = {
  title: "Para jovens",
  intro:
    "Dicas rápidas para você usar a internet com mais segurança e aproveitar sem susto. Se algo parecer estranho, falar com alguém de confiança é sempre a melhor saída.",
  sections: [
    {
      title: "O código é só seu",
      body:
        "Quando um aplicativo manda um código por SMS ou mensagem, ele serve para entrar na sua conta. Quem tem o código consegue entrar. Por isso, não passe para ninguém, mesmo que a pessoa pareça amiga, banco ou suporte.",
    },
    {
      title: "Uma senha para cada conta",
      body:
        "Se você usa a mesma senha em tudo, um vazamento em um site pode abrir todas as suas contas. Prefira uma frase longa a uma senha curta e ative a verificação em duas etapas nas contas mais importantes, como o e-mail e o WhatsApp.",
    },
    {
      title: "Prêmio, pressa e ameaça: pare e confira",
      body:
        "Mensagens que prometem prêmio, dizem que sua conta vai ser bloqueada ou pedem pressa são sinais de golpe. Antes de clicar, pare, respire e confirme com uma pessoa de confiança ou pelo canal oficial do aplicativo.",
    },
    {
      title: "Estranhos na internet",
      body:
        "Nem todo mundo online é quem diz ser. Não aceite pedidos de desconhecidos nem marque encontros sem que um adulto de confiança saiba.",
    },
    {
      title: "Suas fotos e seus dados são seus",
      body:
        "Antes de postar, pense se aquilo ainda vai estar tudo bem daqui a um tempo. Evite divulgar endereço, escola e rotina. As fotos e os dados dos outros também têm dono, então peça licença antes de postar.",
    },
    {
      title: "Se algo deixar você desconfortável",
      body:
        "Se alguém pressionar, ameaçar, pedir fotos ou fizer você se sentir mal, conte para um adulto de confiança. Você não vai levar bronca por pedir ajuda, e a culpa nunca é de quem foi enganado. Guarde prints e não apague as conversas, porque elas ajudam a resolver. Se preferir, converse de forma anônima, por chat ou e-mail, com o Canal de Ajuda da SaferNet (canaldeajuda.org.br). Se alguém estiver em perigo agora, ligue 190.",
    },
  ],
  sources: [
    { label: "Internet Segura (CERT.br e NIC.br)", url: "https://internetsegura.br/" },
    { label: "Canal de Ajuda da SaferNet", url: "https://canaldeajuda.org.br/" },
    {
      label: "Polícia Federal, orientações aos pais",
      url: "https://www.gov.br/pf/pt-br/assuntos/guardioes-da-infancia/material-educativo/orientacoes-para-os-pais-guardioes-da-infancia-pf.pdf",
    },
  ] as Source[],
  reviewedAt: "2026-11-18",
};
