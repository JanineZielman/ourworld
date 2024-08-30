'use client'

import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import React from 'react';
import Collapsible from '@edonec/collapsible';
import '@edonec/collapsible/build/index.css';
import '@edonec/collapsible/build/icons.css';

/**
 * Props for `Section`.
 */
export type SectionProps = SliceComponentProps<Content.SectionSlice>;

interface SectionType {
  type: string;
  data: {
    title: any; // Adjust to the correct type for title
    questions: any;
  };
}

const isSectionType = (section: any): section is SectionType => {
  return section && typeof section.type === 'string';
};


/**
 * Component for "Section" Slices.
 */
const Section = ({ slice }: SectionProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="section"
    >
      {isSectionType(slice.primary.section) && slice.primary.section.type === 'faq' && (
        <div className="faq">
          <img className="icon" src="https://ourworld.cdn.prismic.io/ourworld/ZtHEaEaF0TcGJlut_world.svg"/>
          <PrismicRichText field={slice.primary.section.data.title}/>
          {slice.primary.section.data.questions.map((item:any, i:number) => {
            return(
              <Collapsible open header={item.question} key={`question${i}`}>
                 <PrismicRichText field={item.answer}/>
              </Collapsible>
            )
          })}
        </div>
      )}
    </section>
  );
};

export default Section;
