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
