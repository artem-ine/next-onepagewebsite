import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

import Layout from "@/components/Layout";
import { getLocales } from "@/lib/getLocales";
import FeaturedArticles from "@/slices/FeaturedArticles";
import ArticleContent from "@/slices/ArticleContent";

export async function generateMetadata() {
  const client = createClient();
  const page = await client.getSingle("gallery");

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}

export default async function Page({ params: { lang } }) {
  const client = createClient();
  const page = await client.getSingle("gallery", { lang });
  const navigation = await client.getSingle("navigation", { lang })
  const locales = await getLocales(page, client);
  const articles = await client.getAllByType("article", {
    orderings: [
      { field: "my.article.article_date", direction: "desc"}
    ]
  })

  return (
    <Layout locales={locales} navigation={navigation}>
      {/* <SliceZone slices={page.data.slices} components={components} locales={locales} /> */}
      <ul className="grid grid-cols-1 gap-16">
        {articles.map((article) => (
          <ArticleContent key={article.id} article={article} slices={article.data.slices} components={components} />
        ))}
      </ul>
    </Layout>
  )
}


export async function generateStaticParams() {
  const client = createClient();

  const pages = await client.getAllByType("gallery", {
    lang: "*",
    filters: [prismic.filter.not("my.gallery.uid", "gallery")],
  });

  return pages.map((page) => {
    return {
      lang: page.lang,
    };
  });
}