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


export default async function Header({locales}) {

  return (
    <div>
      <nav className="flex flex-wrap items-center gap-x-6 gap-y-3 md:gap-x-10 justify-center">
          <ul className="flex flex-wrap gap-6 md:gap-10">
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




