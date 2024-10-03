import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

import Layout from "@/components/Layout";
import { getLocales } from "@/lib/getLocales";

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

  return (
    <Layout locales={locales} navigation={navigation}>
      <SliceZone slices={page.data.slices} components={components} locales={locales} />
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