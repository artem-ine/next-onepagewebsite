/**
 * @typedef {import("@prismicio/client").Content.TableSlice} TableSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TableSlice>} TableProps
 * @param {TableProps}
 */

import { PrismicRichText } from "@prismicio/react";
import "../../app/globals.css";

const Table = ({ slice }) => {
  
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="table-section"
    >
    <span className="title">
      <PrismicRichText field={slice.primary.title}/>
    </span>
    {
      slice?.primary?.items?.map((item, i) =>
        <table key={i}>
          <tbody>
        <tr>
          <td>
            <PrismicRichText field={item.col1} />
          </td>
          <td>
            <PrismicRichText field={item.col2} />
          </td>
          {
            item.col3 ?
            <td>
              <PrismicRichText field={item.col3} />
            </td>
            : undefined
          }
            </tr>
            </tbody>
      </table>
      )
    }
    </section>
  );
};


export default Table;
