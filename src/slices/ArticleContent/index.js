/**
* @typedef {import("@prismicio/client").Content.ArticleContentSlice} ArticleContentSlice
* @typedef {import("@prismicio/react").SliceComponentProps<ArticleContentSlice>} ArticleContentProps
* @param {ArticleContentProps}
*/

import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import * as prismic from "@prismicio/client";

const ArticleContent = ({ slice }) => {
  return (
    <section
    data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="article"
    >
      <PrismicNextImage field={slice.primary.article_image} className="article-image" />
      <div className="article-text">
        <span className="article-headline">{slice.primary.article_title}</span>
        <PrismicRichText
          field={slice.primary.article_description}
          components={{
            preformatted: ({ children }) => <code>{children}</code>
        }}/>
        <span>{prismic.asDate(slice.primary.article_date).toLocaleDateString('fr-fr')}</span>
      </div>
    </section>
  );
};

export default ArticleContent;



