import type { Topic } from "@/lib/types";

export const topics: Topic[] = [
  {
    slug: "whatsapp-e-codigos",
    title: "WhatsApp: código e conta clonada",
    summary:
      "Como manter sua conta sob seu controle e reconhecer pedidos de dinheiro em nome de conhecidos.",
    goodNews:
      "Dois hábitos resolvem a maior parte: nunca passar o código e confirmar por ligação antes de enviar dinheiro.",
    howItWorks:
      "O WhatsApp libera cada conta em um aparelho por meio de um código enviado por SMS ou pelo próprio aplicativo. Quem consegue esse código consegue entrar na conta, e é por isso que ele é alvo de muitos golpes. Com a conta na mão, o golpista escreve para os seus contatos como se fosse você.",
    whatYouMightSee: [
      "Alguém se passa por responsável de uma escola, fala de uma vaga e pede o código que você recebeu. Há relatos desse golpe com professores da rede pública de São Paulo.",
      "Uma mensagem com a foto de um parente, colega ou chefe diz que o número mudou e pede um Pix com urgência. Às vezes explica que o aplicativo do banco não funciona no número novo.",
      "Mensagens de contatos conhecidos pedindo dinheiro, porque a conta deles pode ter sido tomada.",
    ],
    whatToDo: [
      {
        items: [
          "Não passe o código de verificação para ninguém, em nenhuma situação. O mesmo vale para o PIN da confirmação em duas etapas: o WhatsApp não inicia contato para pedir essas informações.",
          "Antes de qualquer Pix, ligue para a pessoa no número que você já tinha. Uma ligação rápida desfaz a dúvida.",
          "Ative a confirmação em duas etapas do WhatsApp. Abra Configurações (no iPhone, Ajustes), toque em Conta, depois em Confirmação em duas etapas e em Ativar. Crie um PIN de seis dígitos e cadastre um e-mail para recuperá-lo se esquecer. Com o PIN, quem tentar cadastrar o seu número em outro aparelho não consegue entrar na conta.",
          "Desconfie de pressa. Quem precisa de ajuda de verdade aceita esperar você ligar.",
        ],
      },
    ],
    ifSomethingWentWrong: [
      'Avise seus contatos por outro meio, como uma ligação, para ninguém cair em pedidos feitos em seu nome, e siga o passo a passo da página "Se algo deu errado".',
    ],
    sources: [
      { label: "NC News: falsa oferta de emprego a professores", url: "https://ncnews.com.br/?p=47016" },
      {
        label: "Tecnoblog: golpe do número novo no WhatsApp",
        url: "https://tecnoblog.net/noticias/golpe-via-whatsapp-usa-dados-vazados-e-pede-dinheiro-a-parentes-da-vitima/",
      },
      {
        label: "TSE: confirmação em duas etapas no WhatsApp",
        url: "https://www.tse.jus.br/comunicacao/noticias/arquivos/whatsapp-e-eleicoes-2020",
      },
      {
        label: "Canaltech: como ativar a verificação em duas etapas",
        url: "https://canaltech.com.br/apps/como-ativar-a-verificacao-em-duas-etapas-no-whatsapp/",
      },
    ],
    reviewedAt: "2026-11-18",
  },
  {
    slug: "dinheiro-a-receber",
    title: "Dinheiro a receber? Confirme antes de pagar",
    summary:
      "Golpes que prometem restituições e precatórios e pedem uma taxa por Pix para liberar o valor.",
    goodNews:
      "A regra é simples e vale sempre: quem tem dinheiro a receber não precisa pagar nada antes.",
    howItWorks:
      "Os golpistas entram em contato dizendo que há um valor para você, às vezes com dados reais do processo, o que passa confiança. Depois pedem uma taxa, por Pix, para liberar o dinheiro. O valor prometido não chega, e a taxa vai para o golpista.",
    whatYouMightSee: [
      "Supostos advogados ligados a sindicatos de professores, ou pessoas que se dizem diretores e funcionários de sindicato, avisando sobre pagamentos de restituições e precatórios. Os relatos citam professores, mas a história pode ser adaptada a qualquer pessoa que espere um valor a receber.",
      "Uma taxa a pagar por Pix, como IOF, para liberar o dinheiro.",
      "Dados reais do processo ou do seu nome, que dão aparência de verdade ao contato.",
    ],
    whatToDo: [
      {
        items: [
          "Lembre que ninguém exige pagamento para liberar dinheiro a que você tem direito.",
          "Confirme ligando para o número oficial do sindicato ou do advogado, nunca pelo contato que veio na mensagem.",
          "Não clique em links nem baixe arquivos dessas mensagens.",
          "Converse com colegas e com o sindicato antes de responder: se o contato for falso, outras pessoas também podem ter recebido.",
        ],
      },
    ],
    ifSomethingWentWrong: [
      'Se já pagou, avise o banco na hora e peça para contestar o Pix, registre boletim de ocorrência e informe o sindicato. O passo a passo completo está na página "Se algo deu errado".',
    ],
    sources: [
      {
        label: "Canaltech: falsos pagamentos a professores",
        url: "https://canaltech.com.br/seguranca/golpe-via-e-mail-e-whatsapp-promete-falsos-pagamentos-a-professores-247815/",
      },
      {
        label: "Metrópoles: golpes contra professores do DF",
        url: "https://www.metropoles.com/distrito-federal/alerta-professores-do-df-sao-vitimas-de-9-tipos-de-golpes-veja-quais",
      },
    ],
    reviewedAt: "2026-11-18",
  },
  {
    slug: "links-qr-e-ligacoes",
    title: "Links, QR Codes e ligações",
    summary:
      "Como conferir mensagens, códigos QR e telefonemas que pedem informações suas antes de agir.",
    goodNews:
      "Você não precisa reconhecer todos os golpes. Muitos dependem de pressa, e parar para conferir já funciona.",
    howItWorks:
      "Links, QR Codes e ligações falsas tentam fazer você entregar dados, senhas ou dinheiro. Eles imitam bancos, lojas, transportadoras e até pessoas conhecidas. O ponto em comum costuma ser a pressa: quem age sem conferir cai com mais facilidade.",
    whatYouMightSee: [
      `Mensagens com urgência ou ameaça, como "conta bloqueada", "pacote retido" ou "CPF irregular", ou com prêmio e dinheiro fácil.`,
      "Endereços parecidos com os verdadeiros, com uma letra trocada, como bancodobrasii.com no lugar de bancodobrasil.com.br.",
      "QR Codes em adesivos colados sobre os originais, em mesas, cartazes, estacionamentos e boletos. Esse golpe se chama quishing e leva a uma página falsa ou a um Pix para a conta do golpista.",
      `Ligações de falsa central bancária ou de falso motoboy pedindo senha, código, instalação de aplicativo ou um "teste" de Pix.`,
      "Ligações e áudios com voz de parente imitada por inteligência artificial.",
    ],
    whatToDo: [
      {
        items: [
          "No celular, segure o link para ver o endereço de destino. No computador, passe o mouse sobre ele sem clicar.",
          "Na dúvida, não clique: abra o aplicativo ou digite o endereço do site oficial.",
          "Mesmo vindo de conhecido, confirme por ligação, porque a conta dele pode estar clonada.",
          "Antes de pagar por QR Code, confira no aplicativo do banco o nome de quem vai receber.",
          "Lembre que banco não pede senha, código, instalação de aplicativo nem teste de Pix por telefone. Desligue e ligue para o número do verso do cartão.",
          "Combine uma palavra-chave com a família e, diante de uma voz suspeita, ligue de volta para o número conhecido.",
          "Para checar um link duvidoso, existem verificadores como o VirusTotal.",
        ],
      },
    ],
    ifSomethingWentWrong: [
      "Se clicou, não digite nada, feche a página, troque as senhas das contas envolvidas e avise o banco se informou dados financeiros.",
    ],
    sources: [
      { label: "Serasa: como identificar um link falso", url: "https://www.serasa.com.br/premium/blog/link-falso/" },
      { label: "PagBank: o que é quishing", url: "https://blog.pagbank.com.br/o-que-e-quishing" },
      {
        label: "Olhar Digital: golpe do QR Code",
        url: "https://olhardigital.com.br/2026/10/21/seguranca/golpe-do-qr-code-veja-como-criminosos-desviam-pagamentos-e-como-se-proteger/",
      },
    ],
    reviewedAt: "2026-11-18",
  },
  {
    slug: "senhas-e-duas-etapas",
    title: "Senhas e verificação em duas etapas",
    summary: "O básico para proteger suas contas, sem precisar decorar nada.",
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
          "Prefira uma frase longa a uma senha curta com símbolos: é mais fácil de lembrar e mais difícil de adivinhar.",
          "Use uma senha diferente no e-mail, no banco e no WhatsApp.",
          "Considere um gerenciador de senhas: ele guarda as senhas por você e ainda ajuda a notar site falso.",
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
        label: "CERT.br: fascículo Senhas",
        url: "https://cartilha.cert.br/guardiao/fasciculo-senhas-egc-saida-grafica.pdf",
      },
      {
        label: "TJMG: boas práticas de prevenção a golpes",
        url: "https://tjmg.jus.br/portal-tjmg/acoes-e-programas/tjmg-contra-golpes/boas-praticas-para-prevencao/",
      },
    ],
    reviewedAt: "2026-11-18",
  },
  {
    slug: "wifi",
    title: "Wi-Fi público e de casa",
    summary:
      "Como usar redes abertas com tranquilidade e deixar o Wi-Fi de casa bem configurado.",
    goodNews:
      "No dia a dia, o cuidado principal é simples: banco, Pix e compras ficam melhores no 4G ou 5G.",
    howItWorks:
      "Redes abertas, em cafés, shoppings e praças, são compartilhadas por muita gente. Alguém pode criar uma rede com nome parecido ao do local, e o celular costuma conectar sozinho a redes que já conhece. Em casa, o roteador é a porta de entrada de todos os seus aparelhos, então vale deixá-lo bem configurado.",
    whatYouMightSee: [
      "Uma rede com nome quase igual ao do estabelecimento, ou o celular conectando sozinho a uma rede aberta.",
      "Roteador de casa com a senha e o nome de fábrica.",
    ],
    whatToDo: [
      {
        heading: "Em rede pública",
        items: [
          "Confirme o nome da rede com um funcionário do local antes de conectar, porque redes falsas copiam o nome do estabelecimento.",
          "Para banco, Pix e compras, use dados móveis (4G ou 5G) ou o roteamento do próprio celular.",
          "Desative a conexão automática e esqueça a rede ao sair. A CERT.br recomenda não permitir conexão automática a redes públicas nem às já visitadas, porque um atacante pode criar uma rede com o mesmo nome.",
          "VPN é uma camada extra, não uma solução completa. Se usar, escolha um serviço confiável.",
          "No Windows, escolha o perfil Rede pública ao conectar.",
        ],
      },
      {
        heading: "Na rede de casa",
        items: [
          "Troque a senha padrão do roteador e o nome padrão da rede, e use uma senha forte no Wi-Fi.",
          "Prefira a criptografia WPA3 ou WPA2/WPA3. Não use WEP nem WPA.",
          "Mantenha o roteador atualizado e use a rede de visitantes, com senha própria, para quem vem à sua casa.",
        ],
      },
    ],
    ifSomethingWentWrong: [
      "Troque as senhas que usou na rede, principalmente a do e-mail e a do banco, e avise o banco se fez alguma operação financeira.",
    ],
    sources: [
      { label: "CERT.br: fascículo Redes", url: "https://cartilha.cert.br/guardiao/fasciculo-redes-egc.pdf" },
      {
        label: "Serasa: Wi-Fi público com segurança",
        url: "https://www.serasa.com.br/premium/blog/wi-fi-publico-como-usa-lo-com-seguranca-evitar-golpes/",
      },
      {
        label: "Exame: Wi-Fi público sem risco",
        url: "https://exame.com/tecnologia/examelab/wi-fi-publico-sem-risco-como-se-conectar-sem-entregar-suas-senhas/",
      },
    ],
    reviewedAt: "2026-11-18",
  },
  {
    slug: "computador-e-celular",
    title: "Computador e celular",
    summary: "Atualizações, backup e o que fazer se o celular for perdido ou roubado.",
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
          "Se o computador é de toda a família, crie uma conta para cada pessoa, ative o bloqueio de tela e deixe as atualizações automáticas ligadas.",
          "Faça backup automático dos arquivos importantes, como documentos, fotos e trabalhos, com uma cópia fora do computador.",
          "Evite programas piratas e downloads de sites desconhecidos. Instale aplicativos só nas lojas oficiais e desconfie de permissões incoerentes: um aplicativo de jogo não precisa da sua lista de chamadas.",
          "Deixe senha de tela e biometria ativadas e não deixe o celular desbloqueado em locais públicos.",
          "Cadastre o Celular Seguro, programa gratuito do Governo Federal (celularseguro.mj.gov.br ou aplicativo). Entre com a sua conta gov.br, toque em registrar telefone (o número precisa estar no seu CPF) e, se quiser, indique pessoas de confiança que poderão bloquear por você. Em caso de roubo, perda ou furto, você registra a ocorrência pelo site ou pelo aplicativo, e o programa bloqueia a linha e o acesso a aplicativos de bancos. Ele não rastreia o aparelho, então mantenha também o localizador do Android ou do iPhone.",
        ],
      },
    ],
    ifSomethingWentWrong: [
      "Registre a ocorrência no Celular Seguro pelo site (ou peça a uma pessoa de confiança cadastrada que faça pelo aplicativo), avise o banco e faça o boletim de ocorrência.",
    ],
    sources: [
      { label: "CERT.br: fascículo Backup", url: "https://cartilha.cert.br/guardiao/fasciculo-backup-egc.pdf" },
      {
        label: "CERT.br: fascículo Computadores",
        url: "https://www.gov.br/governodigital/pt-br/privacidade-e-seguranca/fasciculos-cert.br/fasciculo-computadores.pdf",
      },
      {
        label: "IDEC: como funciona o Celular Seguro",
        url: "https://idec.org.br/dicas-e-direitos/celular-seguro-como-funciona",
      },
      {
        label: "Governo Federal: serviço Celular Seguro",
        url: "https://www.gov.br/pt-br/servicos/comunicar-roubo-furto-de-aparelho-pelo-aplicativo-celular-seguro",
      },
    ],
    reviewedAt: "2026-11-18",
  },
  {
    slug: "dados-de-terceiros",
    title: "Dados e fotos de outras pessoas",
    notice:
      "Orientação geral, não é parecer jurídico. Em caso de dúvida, consulte um profissional da área.",
    summary:
      "Como cuidar da privacidade de quem você conhece, de familiares e amigos a colegas e alunos.",
    goodNews: "Um hábito resolve a maior parte: perguntar antes de postar e usar o canal certo.",
    howItWorks:
      "Fotos, contatos, conversas e documentos de outras pessoas ficam guardados no seu celular e no seu computador. Compartilhar sem cuidado pode expor quem confiou em você. Com crianças e adolescentes, o cuidado é maior: a LGPD (art. 14) pede que os dados deles sejam tratados no melhor interesse deles, e o ECA Digital (Lei 15.211/2025), em vigor desde 17/03/2026, reforça isso.",
    whatYouMightSee: [
      "Foto de criança ou adolescente em perfil pessoal.",
      "Grupos de WhatsApp sem regras, em que fotos e dados circulam à vontade.",
      "Arquivos de outras pessoas, como documentos, em pendrive solto ou no computador da família.",
    ],
    whatToDo: [
      {
        items: [
          "Pergunte antes de postar foto, nome ou conversa de outra pessoa.",
          "Para fotos de crianças e adolescentes, o recomendado é ter autorização específica dos responsáveis, para uma finalidade e um canal definidos.",
          "Prefira fotos coletivas e evite marcar, nomear ou geolocalizar.",
          "Em escolas, trabalho e outras instituições, use os canais oficiais e moderados nos grupos de WhatsApp e evite publicar fotos de crianças e adolescentes em perfil pessoal.",
          "Guarde documentos de terceiros em local protegido por senha, e não em pendrive solto ou computador compartilhado.",
        ],
      },
    ],
    ifSomethingWentWrong: [
      "Retire a publicação, avise as pessoas envolvidas (ou os responsáveis, se forem menores) e quem cuida dos dados na sua instituição.",
    ],
    sources: [
      {
        label: "Confidata: ECA Digital e fotos de alunos",
        url: "https://confidata.com.br/blog/escola-pode-postar-foto-de-aluno-eca-digital",
      },
      {
        label: "CONSED: orientações sobre imagens e dados de alunos",
        url: "https://www.consed.org.br/storage/downloads/cZll9BOQjewTcaueobJyUxaDFP3SMuuuI8jK3Aqj.pdf",
      },
    ],
    reviewedAt: "2026-11-18",
  },
];

