import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TopicLayout } from "@/components/TopicLayout";
import { topics } from "@/content/topics";

export const dynamicParams = false;

export function generateStaticParams() {
  return topics.map((topic) => ({ slug: topic.slug }));
}

type TopicPageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: TopicPageProps): Promise<Metadata> {
  const { slug } = await params;
  const topic = topics.find((item) => item.slug === slug);

  if (!topic) return {};

  return {
    title: topic.title,
    description: topic.summary,
    alternates: { canonical: `/temas/${topic.slug}/` },
    openGraph: {
      title: topic.title,
      description: topic.summary,
    },
  };
}

export default async function TopicPage({ params }: TopicPageProps) {
  const { slug } = await params;
  const topic = topics.find((item) => item.slug === slug);

  if (!topic) notFound();

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const index = topics.findIndex((item) => item.slug === slug);
  const nextTopic = topics[index + 1];

  return (
    <TopicLayout
      topic={topic}
      nextTopic={nextTopic}
      printUrl={siteUrl ? `${siteUrl}/temas/${topic.slug}/` : undefined}
    />
  );
}
