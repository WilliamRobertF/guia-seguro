import type { ReactNode } from "react";
import { PageIndex, type PageIndexItem } from "./PageIndex";

type InternalPageLayoutProps = {
  title: string;
  subtitle?: string;
  breadcrumb?: ReactNode;
  icon?: ReactNode;
  indexItems: PageIndexItem[];
  children: ReactNode;
};

export function InternalPageLayout({
  title,
  subtitle,
  breadcrumb,
  icon,
  indexItems,
  children,
}: InternalPageLayoutProps) {
  return (
    <main id="conteudo" className="shell-internal pb-16" tabIndex={-1}>
      <header className="max-w-[44rem] pt-10 sm:pt-14">
        {breadcrumb ? <div className="mb-5">{breadcrumb}</div> : null}
        <div className="flex items-center gap-4">
          {icon ? <div className="shrink-0">{icon}</div> : null}
          <h1 className="min-w-0 text-[2.25rem] leading-[1.05] font-bold sm:text-[3rem]">
            {title}
          </h1>
        </div>
        {subtitle ? <p className="mt-5 text-xl text-muted">{subtitle}</p> : null}
      </header>

      <div className="mt-10 lg:mt-12 lg:grid lg:grid-cols-[minmax(0,44rem)_16rem] lg:justify-between lg:gap-8">
        <PageIndex items={indexItems} />
        <div className="min-w-0 lg:order-1">{children}</div>
      </div>
    </main>
  );
}
