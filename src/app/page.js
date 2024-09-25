import { SliceZone } from "@prismicio/react";
import * as prismic from "@prismicio/client";
import { createClient } from "@/prismicio";
import { components } from "@/slices";

export async function generateMetadata() {
  const client = createClient();
  const page = await client.getSingle("home");

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}

export default async function Index({ params }) {
  const client = createClient();
  const home = await client.getSingle("home", params.uid, { lang: params.lang});

  return <SliceZone slices={home.data.slices} components={components} />;
}