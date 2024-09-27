import * as prismic from "@prismicio/client";
import { PrismicText } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { SliceZone } from "@prismicio/react";
import { createClient } from "@prismicio/client";
import { Suspense } from "react";

const localeLabels = {
  "en-us": "EN",
  "fr-fr": "FR",
};

// navigation path doesn't seem to work to display navbar info + suspense didn't work either when navbar was called there

export default async function Header({navigation, locales}) {

  return (
    <div>
      {/* <Navbar /> */}
      <nav className="flex flex-wrap items-center gap-x-6 gap-y-3 md:gap-x-10">
          <ul className="flex flex-wrap gap-6 md:gap-10">
            {/* {navigation.data?.links.map((item) => (
              <li
                key={prismic.asText(item.label)}
                className="font-semibold tracking-tight text-slate-800"
              >
                <PrismicNextLink field={item.link}>
                  <PrismicText field={item.label} />
                </PrismicNextLink>
              </li>
            ))} */}
        </ul>
          <div className="flex flex-wrap gap-3">
            <span aria-hidden={true}>🌐</span>
            <ul className="flex flex-wrap gap-3">
              {locales.map((locale) => (
                <li key={locale.lang} className="first:font-semibold">
                  <PrismicNextLink
                    href={locale.url}
                    locale={locale.lang}
                    aria-label={`Change language to ${locale.lang_name}`}
                  >
                    {localeLabels[locale.lang] || locale.lang}
                  </PrismicNextLink>
                </li>
              ))}
            </ul>
          </div>
      </nav>
      </div>
    )
}


// tried calling navbar here + tried calling it inside header, either way document was not returned (even with suspense)


// export async function Navbar() {
  
//   const client = createClient();
//   const navigation = await client.getSingle("navigation");
//   const locales = await getLocales(navigation, client);
  
//   return (
//     <div>
//       <SliceZone slices={navigation.data.slices} components={components} locales={locales} />
//     </div>
//   )
// }

// export async function generateStaticParams() {
//   const client = createClient();
  
//   const pages = await client.getAllByType("page", {
//     lang: "*",
//     filters: [prismic.filter.at("my.navigation.uid", "navigation")],
//   });
  
//   return pages.map((page) => {
//     return {
//       lang: page.lang,
//     };
//   });
// }