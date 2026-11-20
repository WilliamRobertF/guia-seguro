export type Source = { label: string; url: string };
export type ActionGroup = { heading?: string; items: string[] };

export type Topic = {
  slug: string;
  title: string;
  summary: string; // uma frase
  goodNews: string; // frase tranquilizadora no topo
  howItWorks: string; // como funciona
  whatYouMightSee: string[]; // exemplos que a pessoa pode encontrar
  whatToDo: ActionGroup[]; // hábitos e ações
  ifSomethingWentWrong?: string[]; // atalhos, mais link para /se-algo-deu-errado
  notice?: string; // aviso fixo opcional
  sources: Source[];
  reviewedAt: string; // data ISO da última revisão
};

export type TeachSectionItem = {
  title: string;
  body: string;
};

export type TeachSection = {
  title: string;
  items: TeachSectionItem[];
};
