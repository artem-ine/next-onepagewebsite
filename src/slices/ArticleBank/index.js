/**
 * @typedef {import("@prismicio/client").Content.ArticleBankSlice} ArticleBankSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ArticleBankSlice>} ArticleBankProps
 * @param {ArticleBankProps}
 */

import { PrismicRichText } from "@prismicio/react";

const ArticleBank = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {slice.primary.articles.map((item, index) => (
        <div key={index}>
          <h2>{item.headline}</h2>
          <PrismicRichText field={item.pitch} />
        </div>
      ))}
    </section>
  );
};

export default ArticleBank;
