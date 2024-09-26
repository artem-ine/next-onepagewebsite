"use client";

import { PrismicNextLink } from "@prismicio/next";
import { useRouter } from 'next/navigation';

export default function LanguageSwitcher({ locales }) {
  const router = useRouter();
  const currentPath = router.asPath;
  console.log(currentPath);

  return (
    <div>
      {locales.map((locale) => (
        <li key={locale.id}>
          <PrismicNextLink href={router.asPath} locale={locale.id}>
            {locale.lang_name}
          </PrismicNextLink>
        </li>
      ))}
    </div>
  );
}
