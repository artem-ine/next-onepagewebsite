/**
 * @typedef {import("@prismicio/client").Content.LibrarySlice} LibrarySlice
 * @typedef {import("@prismicio/react").SliceComponentProps<LibrarySlice>} LibraryProps
 * @param {LibraryProps}
 */

import { PrismicRichText } from "@prismicio/react";
import "../../app/globals.css";

const Library = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="library"
    >
    {slice.primary.library.map((item, index) => (
      <div key={index}>
         <h2 className="headline">{item.headline}</h2>
        <PrismicRichText field={item.pitch} />
      </div>
    ))}
   </section>
  );
};

export default Library;
