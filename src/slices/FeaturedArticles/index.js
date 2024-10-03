/**
 * @typedef {import("@prismicio/client").Content.FeaturedArticlesSlice} FeaturedArticlesSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FeaturedArticlesSlice>} FeaturedArticlesProps
 * @param {FeaturedArticlesProps}
 */

import "../../app/globals.css"

import { PrismicNextLink } from "@prismicio/next";

const FeaturedArticles = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
    {slice.primary.featured_articles.map((item, index) => (
      <div key={index}>
        <PrismicNextLink field={item.article1}>{item.article1.uid}</PrismicNextLink>
        <PrismicNextLink field={item.article1}>Link</PrismicNextLink>
      </div>
    ))}
    </section>
  );
};

export default FeaturedArticles;
