/**
* @typedef {import("@prismicio/client").Content.ArticleContentSlice} ArticleContentSlice
* @typedef {import("@prismicio/react").SliceComponentProps<ArticleContentSlice>} ArticleContentProps
* @param {ArticleContentProps}
*/

import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

const ArticleContent = ({ slice }) => {
  return (
    <section
    data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="article"
    >
      <PrismicNextImage field={slice.primary.article_image} className="article-image" />
      <div className="article-text">
        <span>{slice.primary.article_title}</span>
        <PrismicRichText
          field={slice.primary.article_description}
          components={{
            preformatted: ({ children }) => <code>{children}</code>
        }}/>
        <span>{slice.primary.article_date}</span>
      </div>
    </section>
  );
};

export default ArticleContent;



