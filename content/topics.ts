import type { Topic } from "@/lib/types";

export const topics: Topic[] = [
  {
    slug: "whatsapp-e-codigos",
    title: "WhatsApp: código, número novo e conta clonada",
    summary:
      "Como manter sua conta sob seu controle e o que fazer diante de um pedido estranho.",
    goodNews:
      "Dois hábitos resolvem a maior parte: nunca passar o código e confirmar por ligação antes de enviar dinheiro.",
    howItWorks:
      "Cada conta de WhatsApp é liberada em um aparelho por um código enviado por SMS ou pelo próprio aplicativo. Quem consegue esse código consegue entrar na conta. Por isso ele é alvo de muitos golpes.",
    whatYouMightSee: [
      "Alguém se passa por responsável de uma escola, fala de uma vaga e pede o código que você recebeu. Há relatos desse golpe com professores da rede pública de São Paulo.",
      "Uma mensagem com a foto de um parente, colega ou diretor diz que o número mudou e pede um Pix com urgência, às vezes explicando que o aplicativo do banco não funciona no número novo.",
      "Mensagens de contatos conhecidos pedindo dinheiro, porque a conta deles pode ter sido tomada.",
    ],
    whatToDo: [
      {
        items: [
          "O código de verificação é só seu. Não passe para ninguém, em nenhuma situação.",
          "Antes de qualquer Pix, ligue para a pessoa no número que você já tinha.",
          "Ative a confirmação em duas etapas do WhatsApp. O caminho costuma ser Configurações, Conta, Confirmação em duas etapas. [VERIFICAR] os nomes dos menus no aplicativo atual.",
          "Desconfie de pressa. Quem precisa de ajuda de verdade aceita esperar você ligar.",
        ],
      },
    ],
    ifSomethingWentWrong: [
      'Avise seus contatos por outro meio e siga o passo a passo da página "Se algo deu errado".',
    ],
    sources: [
      { label: "ncnews.com.br", url: "https://ncnews.com.br/?p=47016" },
      {
        label: "tecnoblog.net",
        url: "https://tecnoblog.net/noticias/golpe-via-whatsapp-usa-dados-vazados-e-pede-dinheiro-a-parentes-da-vitima/",
      },
    ],
    reviewedAt: "2026-11-18",
  },
  {
    slug: "dinheiro-a-receber",
    title: "Dinheiro a receber? Confirme antes de pagar qualquer coisa",
    summary: "Um golpe que promete restituições e precatórios e já atingiu professores.",
    goodNews:
      "A regra é simples e vale sempre: quem tem dinheiro a receber não precisa pagar nada antes.",
    howItWorks:
      "Os golpistas entram em contato dizendo que há um valor a receber, às vezes com dados reais do processo, o que passa confiança. Depois pedem uma taxa, por Pix, para liberar o dinheiro.",
    whatYouMightSee: [
      "Supostos advogados ligados a sindicatos de professores, ou pessoas que se dizem diretores e funcionários de sindicato.",
      "Avisos de falsos pagamentos de restituições e precatórios.",
      "Cobrança de uma taxa, como IOF, por Pix.",
    ],
    whatToDo: [
      {
        items: [
          "Ninguém exige pagamento para liberar dinheiro.",
          "Confirme ligando para o número oficial do sindicato ou do advogado, nunca pelo contato que veio na mensagem.",
          "Não clique em links nem baixe arquivos dessas mensagens.",
          "Converse com colegas e com o sindicato antes de responder.",
        ],
      },
    ],
    ifSomethingWentWrong: [
      'Se já pagou, avise o banco na hora, registre boletim de ocorrência e informe o sindicato. Veja a página "Se algo deu errado".',
    ],
    sources: [
      {
        label: "canaltech.com.br",
        url: "https://canaltech.com.br/seguranca/golpe-via-e-mail-e-whatsapp-promete-falsos-pagamentos-a-professores-247815/",
      },
      {
        label: "metropoles.com",
        url: "https://www.metropoles.com/distrito-federal/alerta-professores-do-df-sao-vitimas-de-9-tipos-de-golpes-veja-quais",
      },
    ],
    reviewedAt: "2026-11-18",
  },
  {
    slug: "links-qr-e-ligacoes",
    title: "Links, QR Codes e ligações: como conferir antes de agir",
    summary:
      "Um jeito calmo de verificar mensagens, códigos QR e telefonemas que pedem informações suas.",
    goodNews:
      "Você não precisa reconhecer todos os golpes. Muitos dependem de pressa, e parar para conferir já funciona.",
    howItWorks:
      "Links, QR Codes e ligações falsas tentam fazer você entregar dados, senhas ou dinheiro. Eles imitam bancos, lojas, transportadoras e até pessoas conhecidas.",
    whatYouMightSee: [
      `Mensagens com urgência ou ameaça ("conta bloqueada", "pacote retido", "CPF irregular") ou com prêmio e dinheiro fácil.`,
      "Endereços parecidos com os verdadeiros, com uma letra trocada, como bancodobrasii.com no lugar de bancodobrasil.com.br.",
      "QR Codes em adesivos colados sobre os originais, em mesas, cartazes, estacionamentos e boletos. Esse golpe se chama quishing.",
      `Ligações de falsa central bancária ou de falso motoboy pedindo senha, código, instalação de aplicativo ou um "teste" de Pix.`,
      "Ligações e áudios com voz de parente imitada por inteligência artificial.",
    ],
    whatToDo: [
      {
        items: [
          "No celular, segure o link para ver o endereço de destino. No computador, passe o mouse.",
          "Na dúvida, não clique: abra o aplicativo ou digite o site oficial.",
          "Mesmo vindo de conhecido, confirme por ligação, porque a conta dele pode estar clonada.",
          "Antes de pagar por QR Code, confira o nome de quem recebe no aplicativo do banco.",
          "Banco não pede senha, código, instalação de aplicativo nem teste de Pix por telefone. Desligue e ligue para o número do verso do cartão.",
          "Combine uma palavra-chave com a família e, diante de uma voz suspeita, ligue de volta para o número conhecido.",
          "Para checar um link duvidoso, existem verificadores como o VirusTotal.",
        ],
      },
    ],
    ifSomethingWentWrong: [
      "Se clicou, não digite nada, feche a página, troque as senhas das contas envolvidas e avise o banco se informou dados financeiros.",
    ],
    sources: [
      { label: "serasa.com.br", url: "https://www.serasa.com.br/premium/blog/link-falso/" },
      { label: "blog.pagbank.com.br", url: "https://blog.pagbank.com.br/o-que-e-quishing" },
      {
        label: "olhardigital.com.br",
        url: "https://olhardigital.com.br/2026/10/21/seguranca/golpe-do-qr-code-veja-como-criminosos-desviam-pagamentos-e-como-se-proteger/",
      },
    ],
    reviewedAt: "2026-11-18",
  },
  {
    slug: "senhas-e-duas-etapas",
    title: "Senhas e verificação em duas etapas",
    summary: "O básico que protege suas contas, sem precisar decorar nada.",
    goodNews:
      "Com um gerenciador de senhas e a verificação em duas etapas, você não precisa decorar nada e já fica bem mais protegido.",
    howItWorks:
      "A senha é a primeira trava das suas contas, e o e-mail principal é a mais importante, porque é por ele que se recupera todo o resto. A verificação em duas etapas adiciona uma segunda trava: mesmo com a senha, a pessoa precisa de um segundo código.",
    whatYouMightSee: [
      "Quando uma senha vaza em um site, quem usa a mesma senha em outros sites fica exposto.",
      `Matérias de 2025 apontam sequências como 123456 e "brasil" entre as senhas mais usadas no país.`,
    ],
    whatToDo: [
      {
        items: [
          "Prefira uma frase longa a uma senha curta com símbolos.",
          "Use senha diferente no e-mail, no banco e no WhatsApp.",
          "Considere um gerenciador de senhas, que também ajuda a notar site falso.",
          "Ative a verificação em duas etapas primeiro no e-mail principal, depois no WhatsApp e nos bancos.",
          "Mantenha a conta gov.br no nível ouro, como recomendam órgãos como o TJMG.",
        ],
      },
    ],
    ifSomethingWentWrong: [
      "Troque a senha da conta afetada e a do e-mail, ative a verificação em duas etapas e avise o banco se houver risco financeiro.",
    ],
    sources: [
      {
        label: "cartilha.cert.br",
        url: "https://cartilha.cert.br/guardiao/fasciculo-senhas-egc-saida-grafica.pdf",
      },
      {
        label: "tjmg.jus.br",
        url: "https://tjmg.jus.br/portal-tjmg/acoes-e-programas/tjmg-contra-golpes/boas-praticas-para-prevencao/",
      },
    ],
    reviewedAt: "2026-11-18",
  },
  {
    slug: "wifi",
    title: "Wi-Fi público e Wi-Fi de casa",
    summary:
      "Como usar redes abertas com tranquilidade e deixar a rede de casa bem configurada.",
    goodNews:
      "No dia a dia, o cuidado principal é simples: banco, Pix e compras ficam melhores no 4G ou 5G.",
    howItWorks:
      "Redes abertas, em cafés, shoppings e praças, são compartilhadas por muita gente. Alguém pode criar uma rede com nome parecido ao do local, e o celular costuma conectar sozinho a redes que já conhece.",
    whatYouMightSee: [
      "Uma rede com nome quase igual ao do estabelecimento, ou o celular conectando sozinho a uma rede aberta.",
    ],
    whatToDo: [
      {
        heading: "Em rede pública",
        items: [
          "Confirme o nome da rede com um funcionário do local.",
          "Para banco, Pix e compras, use dados móveis (4G ou 5G) ou o roteamento do próprio celular.",
          "Desative a conexão automática e esqueça a rede ao sair.",
          "VPN é uma camada extra, não uma solução completa. Escolha um serviço confiável.",
          "No Windows, escolha o perfil \"Rede pública\" ao conectar.",
        ],
      },
      {
        heading: "Na rede de casa",
        items: [
          "Troque a senha padrão do roteador e o nome padrão da rede, e use senha forte no Wi-Fi.",
          "Prefira criptografia WPA3 ou WPA2/WPA3. Não use WEP nem WPA.",
          "Mantenha o roteador atualizado e use rede de visitantes com senha própria.",
        ],
      },
    ],
    ifSomethingWentWrong: [
      "Troque as senhas que usou na rede, principalmente a do e-mail e a do banco, e avise o banco se fez alguma operação financeira.",
    ],
    sources: [
      { label: "cartilha.cert.br", url: "https://cartilha.cert.br/guardiao/fasciculo-redes-egc.pdf" },
      {
        label: "serasa.com.br",
        url: "https://www.serasa.com.br/premium/blog/wi-fi-publico-como-usa-lo-com-seguranca-evitar-golpes/",
      },
      {
        label: "exame.com",
        url: "https://exame.com/tecnologia/examelab/wi-fi-publico-sem-risco-como-se-conectar-sem-entregar-suas-senhas/",
      },
    ],
    reviewedAt: "2026-11-18",
  },
  {
    slug: "computador-e-celular",
    title: "Computador de casa e celular",
    summary: "Hábitos de manutenção que evitam dor de cabeça e protegem seus arquivos.",
    goodNews:
      "A maior parte do trabalho é configurar uma vez: atualização automática, backup e bloqueio de tela.",
    howItWorks:
      "O computador da família e o celular guardam banco, trabalho e arquivos importantes. Eles ficam mais seguros com contas separadas, atualizações em dia e cópias de segurança.",
    whatYouMightSee: [
      "Computador usado por toda a família com uma conta só, programas piratas, arquivos sem backup e celular perdido ou roubado.",
    ],
    whatToDo: [
      {
        items: [
          "Computador usado por toda a família: contas separadas, bloqueio de tela e atualizações automáticas.",
          "Faça backup automático dos arquivos importantes (provas, planejamentos, notas), com uma cópia fora do computador.",
          "Evite programas piratas e downloads de sites desconhecidos. Instale aplicativos só nas lojas oficiais e desconfie de permissões incoerentes: um aplicativo de jogo não precisa da sua lista de chamadas.",
          "Deixe senha de tela e biometria ativadas e não deixe o celular desbloqueado em locais públicos.",
          "Celular Seguro (programa do Ministério da Justiça, login gov.br, celularseguro.mj.gov.br): permite bloquear a linha e o acesso a aplicativos de bancos e outros serviços após o alerta de roubo ou perda, e dá para cadastrar pessoas de confiança antes. Ele não rastreia o aparelho, então mantenha também o localizador nativo do Android ou do iPhone.",
        ],
      },
    ],
    ifSomethingWentWrong: [
      "Se o celular foi perdido ou roubado, use o Celular Seguro por outro aparelho, avise o banco e registre boletim de ocorrência. [VERIFICAR] o passo a passo atual no site oficial.",
    ],
    sources: [
      { label: "cartilha.cert.br", url: "https://cartilha.cert.br/guardiao/fasciculo-backup-egc.pdf" },
      {
        label: "gov.br",
        url: "https://www.gov.br/governodigital/pt-br/privacidade-e-seguranca/fasciculos-cert.br/fasciculo-computadores.pdf",
      },
      {
        label: "idec.org.br",
        url: "https://idec.org.br/dicas-e-direitos/celular-seguro-como-funciona",
      },
    ],
    reviewedAt: "2026-11-18",
  },
  {
    slug: "dados-de-terceiros",
    title: "Dados e fotos de outras pessoas",
    // [VERIFICAR] confirmar com a coordenação as regras sobre fotos de alunos, porque as fontes divergem
    notice:
      "Orientação geral, não é parecer jurídico. Em caso de dúvida, consulte as regras da sua instituição ou um profissional da área.",
    summary:
      "Como cuidar da privacidade de quem você conhece, de alunos a familiares e colegas.",
    goodNews: "Um hábito resolve a maior parte: perguntar antes de postar e usar o canal certo.",
    howItWorks:
      "Fotos, contatos, conversas e documentos de outras pessoas ficam guardados no seu celular e no seu computador. Compartilhar sem cuidado pode expor quem confiou em você. Com crianças e adolescentes, o cuidado é maior: a LGPD (art. 14) pede que os dados deles sejam tratados no melhor interesse deles, e o ECA Digital (Lei 15.211/2025), em vigor desde 17/03/2026, reforça isso.",
    whatYouMightSee: [
      "Fotos de crianças e adolescentes em perfil pessoal, grupos de WhatsApp sem regras, arquivos de crianças e adolescentes em pendrive ou no computador da família.",
    ],
    whatToDo: [
      {
        items: [
          "Pergunte antes de postar foto, nome ou conversa de outra pessoa.",
          "Foto de criança ou adolescente só com autorização específica dos responsáveis, para uma finalidade e um canal definidos.",
          "Prefira fotos coletivas e evite marcar, nomear ou geolocalizar.",
          "Em escolas, trabalho e outras instituições, use os canais oficiais e moderados nos grupos de WhatsApp e evite publicar fotos de crianças e adolescentes em perfil pessoal.",
          "Guarde arquivos de terceiros (notas, laudos, documentos) em local protegido por senha, e não em pendrive solto ou computador compartilhado.",
        ],
      },
    ],
    ifSomethingWentWrong: [
      "Retire a publicação, avise a coordenação e os responsáveis envolvidos.",
    ],
    sources: [
      {
        label: "confidata.com.br",
        url: "https://confidata.com.br/blog/escola-pode-postar-foto-de-aluno-eca-digital",
      },
      {
        label: "consed.org.br",
        url: "https://www.consed.org.br/storage/downloads/cZll9BOQjewTcaueobJyUxaDFP3SMuuuI8jK3Aqj.pdf",
      },
    ],
    reviewedAt: "2026-11-18",
  },
];

