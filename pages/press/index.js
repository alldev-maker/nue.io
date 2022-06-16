import { Link as ReactScrollLink } from "react-scroll";
import useSWR, { SWRConfig } from "swr";

import qs from "qs";

// Next
import Head from "next/head";

// Components
import Header1 from "@/components/text/Header1";
import Section from "@/components/Section";
import SectionFade from "@/components/SectionFade";
import HeaderP from "@/components/text/HeaderP";

// Strapi API config
import { API_URL } from "@/config/index";
import Loader from "@/components/Loader";
import { MetaTags } from "@/components/MetaTags";

const fetcher = (url, query) => fetch(`${url}?${query}`).then((r) => r.json());

function Careers() {
  const query = qs.stringify(
    {
      sort: ["id:desc"],
      populate: "*",
    },
    {
      encodeValuesOnly: true,
    }
  );

  const { data } = useSWR(
    [`${API_URL}/api/press-articles`, query],
    (url, query) => fetcher(url, query)
  );

  return (
    <>
      <MetaTags
        title="Nue: Current News & Media on RevOps and all things Revenue Lifecycle"
        description="Nue | Press"
        ogURL="/press"
      />
      <Section bgColor="bg-gradient-to-br from-white via-red-50 to-red-100">
        <SectionFade />
        {!data && <Loader />}
        {data && (
          <div className="container relative py-32 lg:py-40">
            <div className="flex justify-center">
              <div className="w-11/12 md:w-full">
                <div className="text-center mb-12 md:mb-24">
                  <div className="mb-6">
                    <Header1>Nue Press</Header1>
                  </div>
                  <HeaderP>
                    For press inquires, contact{" "}
                    <a
                      className="underline font-anMedium"
                      href="mailto:press@nue.io"
                    >
                      press@nue.io
                    </a>
                  </HeaderP>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-between ">
              <div className="w-11/12 lg:w-3/12 mb-6 lg:mb-0 lg:py-12">
                <div className="px-6 py-4 bg-white rounded-lg shadow-lg">
                  <div className="mb-2 border-b pb-2">
                    <p className="text-lg">Articles</p>
                  </div>
                  <div className="">
                    {data.data.map((article, i) => {
                      return (
                        <ReactScrollLink
                          key={i}
                          to={article.attributes.anchor}
                          smooth={true}
                          duration={200}
                          className="text-lg cursor-pointer block mb-2 font-anMedium hover:text-primary transition-colors duration-200"
                        >
                          {article.attributes.title}
                        </ReactScrollLink>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="w-11/12 lg:w-8/12">
                {data.data.map((article, i) => {
                  return (
                    <div
                      className="py-12 border-b"
                      id={article.attributes.anchor}
                      key={i}
                    >
                      <div className="mb-6">
                        <h2 className="text-2xl md:text-5xl font-anMedium">
                          {article.attributes.title}
                        </h2>
                      </div>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: article.attributes.description,
                        }}
                        className="content"
                      ></div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </Section>
    </>
  );
}

export default function Page({ fallback }) {
  return (
    <SWRConfig value={{ fallback }}>
      <Careers />
    </SWRConfig>
  );
}

export async function getStaticProps(context) {
  const query = qs.stringify(
    {
      sort: ["id:desc"],
      populate: "*",
    },
    {
      encodeValuesOnly: true,
    }
  );
  const res = await fetch(`${API_URL}/api/press-articles?${query}`);
  const articles = await res.json();

  if (!articles) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      fallback: {
        [`${API_URL}/api/press-articles`]: {
          data: articles,
        },
      },
    },
  };
}
