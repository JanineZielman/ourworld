'use client'

import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  console.log(slice)
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="hero"
    >
      <div className="hero-bg">
        <iframe src={`${slice.primary.embed.embed_url}?autoplay=1&muted=1`}/>
      </div>
      <br/>
      {/* <PrismicNextImage field={slice.primary.image} /> */}
      <div className="text-wrap">
        <PrismicRichText field={slice.primary.intro} />
      </div>
    </section>
  );
};

export default Hero;
