import * as prismic from "@prismicio/client"
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

import { getLocales } from "@/lib/getLocales";
import { PrismicNextLink } from "@prismicio/next";

export async function generateMetadata({ params: { uid, lang } }) {
  const client = createClient();
  const page = await client.getByUID("article", uid, { lang });

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}

export default async function Page({ params: { uid, lang } }) {
  const client = createClient();

  const page = await client.getByUID("article", uid, { lang });
  const locales = await getLocales(page, client);

  return (
    <div>
    <SliceZone slices={page.data.slices} components={components} locales={locales} />;
        {locales.map((locale) => (
        <li key={locale.id}>
          <PrismicNextLink href={locale.url}>{locale.lang_name}</PrismicNextLink>
        </li>
      ))}
    </div>
  )
}


export async function generateStaticParams() {
  const client = createClient();

  const pages = await client.getAllByType("article", {
    lang: "*",
    filters: [prismic.filter.not("my.article.uid", "article")],
  });

  return pages.map((page) => {
    return {
      uid: page.uid,
      lang: page.lang,
    };
  });
}