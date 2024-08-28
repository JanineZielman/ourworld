import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";

/**
 * Props for `Buttons`.
 */
export type ButtonsProps = SliceComponentProps<Content.ButtonsSlice>;

/**
 * Component for "Buttons" Slices.
 */
const Buttons = ({ slice }: ButtonsProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="buttons"
    >
      {slice.primary.buttons.map((item, i) => (
        <PrismicNextLink field={item.button_link} key={`button${i}`}>
          {item.button_text}
        </PrismicNextLink>
      ))}
    </section>
  );
};

export default Buttons;
