/**
* @typedef {import("@prismicio/client").Content.NavbarSlice} NavbarSlice
* @typedef {import("@prismicio/react").SliceComponentProps<NavbarSlice>} NavbarProps
* @param {NavbarProps}
*/

import { PrismicNextLink } from "@prismicio/next";

const Navbar = ({ slice }) => {
  return (
    <section
    data-slice-type={slice.slice_type}
    data-slice-variation={slice.variation}
    className="navbar"
    >
      <PrismicNextLink field={slice.primary.home} className="navbar-link">home</PrismicNextLink>
      <PrismicNextLink field={slice.primary.first_article} className="navbar-link">lorem ipsum</PrismicNextLink>
      <PrismicNextLink field={slice.primary.second_article} className="navbar-link">sed ut</PrismicNextLink>
    </section>
  );
};

export default Navbar;


              {/* {locales.map((locale) => (
        <li key={locale.lang} className="first:font-semibold">
          <PrismicNextLink
            locales={locales}
            href={locale.url}
            locale={locale.lang}
            // aria-label={`Change language to ${navigation.data.lang.lang}`}
            >
            {localeLabels[locale.lang] || locale.lang}
            </PrismicNextLink>
            </li>
          ))} */}