import { Metadata } from "next";

import { SliceZone } from "@prismicio/react";
import * as prismic from "@prismicio/client";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { PrismicRichText } from "@prismicio/react";

// This component renders your homepage.
//
// Use Next's generateMetadata function to render page metadata.
//
// Use the SliceZone to render the content of the page.

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const home = await client.getByUID("page", "home");

  return {
    title: prismic.asText(home.data.title),
    description: home.data.meta_description,
    openGraph: {
      title: home.data.meta_title ?? undefined,
      images: [{ url: home.data.meta_image.url ?? "" }],
    },
  };
}

export default async function Index() {
  // The client queries content from the Prismic API
  const client = createClient();
  const home = await client.getByUID("page", "home", {
        fetchLinks: `faq.title, faq.questions, newsitem.title, newsitem.date, newsitem.image, newsitem.video`
  });
  const settings = await client.getByType("settings");

  return (
    <div>
      <SliceZone slices={home.data.slices} components={components} />
      <footer>
        <a href={`mailto:${settings.results[0].data.mail}`}>{settings.results[0].data.mail}</a>
        <br/><br/>
        <PrismicRichText field={settings.results[0].data.footer_text}/>
      </footer>
    </div>
  );
}
