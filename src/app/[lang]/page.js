import { SliceZone } from "@prismicio/react";
import * as prismic from "@prismicio/client";

import { getLocales } from "@/lib/getLocales";
import { createClient } from "@/prismicio";

import { components } from "@/slices";
import Layout from "@/components/Layout";

export async function generateMetadata({ params: { lang }}) {
  const client = createClient();
  const page = await client.getSingle("home", { lang });

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}

export default async function Index({ params: { lang } }) {
  const client = createClient();
  const home = await client.getSingle("home", { lang });
  const navigation = await client.getSingle("navigation", { lang })
  const locales = await getLocales(home, client);

  return (
    <div>
        <Layout locales={locales} navigation={navigation}>
          <SliceZone slices={home.data.slices} components={components} locales={locales} />;
        </Layout>
    </div>
  )
}

export async function generateStaticParams() {
  const client = createClient();

  const pages = await client.getAllByType("page", {
    lang: "*",
    filters: [prismic.filter.at("my.home.uid", "home")],
  });

  return pages.map((page) => {
    return {
      lang: page.lang,
    };
  });
}