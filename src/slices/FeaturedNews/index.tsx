'use client'

import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `FeaturedNews`.
 */
export type FeaturedNewsProps = SliceComponentProps<Content.FeaturedNewsSlice>;


/**
 * Component for "FeaturedNews" Slices.
 */
const FeaturedNews = ({ slice }: FeaturedNewsProps): JSX.Element => {
  var options:any = { year: 'numeric', month: 'long', day: 'numeric' };
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="section"
    >
      <div className="news">
        <img className="icon" src="https://ourworld.cdn.prismic.io/ourworld/ZtHEaEaF0TcGJlut_world.svg"/>
        <PrismicRichText field={slice.primary.title}/>
        {slice.primary.news.map((item:any, i:number) => {
          var newsDate  = new Date(item.news_item.data?.date);
          return(
            <div className="news-item" key={`newsitem${i}`}>
              <img src={item.news_item.data?.image?.url}/>
              {item.news_item.data?.video?.url &&
                <video width="320" height="240" controls>
                  <source src={item.news_item.data.video?.url} type="video/mp4"/>
                </video>
              }
              <div className="date"><b>{newsDate.toLocaleDateString("en-US", options)}</b></div>
              <PrismicRichText field={item.news_item.data?.title}/>
            </div>
          )
        })}
      </div>
    </section>
  );
};

export default FeaturedNews;
