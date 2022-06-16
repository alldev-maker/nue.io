import { HOST_URL } from "@/config/index";
import Head from "next/head";

export const MetaTags = ({ title, description, keywords, socialGraph, socialGraphFromCMS, ogURL }) => {

  return (
    <Head>
      <title>{title}</title>
      <link rel="canonical" href={HOST_URL + (ogURL || "")} />
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta property="og:url" content={HOST_URL + (ogURL || "")} />
      <meta
        property="og:image"
        content={socialGraphFromCMS || (HOST_URL + (socialGraph || "/images/social/open-graph.png"))}
      />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
    </Head>
  );
};
