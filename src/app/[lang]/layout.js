import localFont from "next/font/local";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { client } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";
import { getLocales } from "@/lib/getLocales";
import * as prismic from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import "../globals.css";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });


const localeLabels = {
  "en-us": "EN",
  "fr-fr": "FR",
};

export default async function RootLayout({ children, params: { lang } }) {

  return (
    <html lang="en">
      <body>
        <Navbar lang={lang} />
        {children}
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}

export async function Navbar({lang}) {

  const client = createClient();
  const navigation = await client.getSingle("navigation", { lang });

  return (
      <SliceZone slices={navigation.data.slices} components={components} />
  )
}

export async function generateStaticParams() {
  const client = createClient();
  
  const pages = await client.getAllByType("page", {
    lang: "*",
    filters: [prismic.filter.at("my.navigation.uid", "navigation")],
  });
  
  return pages.map((page) => {
    return {
      lang: page.lang,
    };
  });
}