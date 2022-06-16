import Head from "next/head";
import Link from "next/link";

import Section from "@/components/Section";
import SectionFade from "@/components/SectionFade";

import { customersData } from "@/data/customers";
import React from "react";
import PopupVideo from "@/components/PopupVideo";
import { MetaTags } from "@/components/MetaTags";

export default function CustomersChild({ data }) {
  const [play, setPlay] = React.useState(false);

  return (
    <>
      <MetaTags
        title={data.title}
        description={`Learn how the revops team at ${data.title} do extraordinary things
                    with Nue`}
        ogURL={`/customers/${data.id}`}
        socialGraph={data.socialGraph}
      />
      <div className="bg-gradient-to-br from-pink-50 via-white to-indigo-50 relative overflow-hidden ">
        <Section>
          <SectionFade />

          <div className="absolute w-full h-full right-0 top-0 transform translate-x-2/3">
            <div className="w-full h-full clip-path-right bg-pink-50 opacity-75"></div>
          </div>
          <div className="container relative z-10">
            <div className="flex justify-center pt-32 lg:pt-40">
              <div className="w-11/12 sm:-full lg:w-11/12 xl:w-10/12 ">
                <div className="flex justify-between flex-wrap -mx-3 mb-12">
                  <div className="w-full md:w-6/12 px-3 mb-6 md:mb-0 pr-6 md:pr-10">
                    <div>
                      <div className="mb-2">
                        <p className="text-black text-opacity-60 uppercase">
                          {data.title} customer story
                        </p>
                      </div>
                      <div className="mb-2 md:mb-6">
                        <h1 className="text-3xl md:text-5xl font-anDemi">
                          &#8220;{data.quote.text}&#8221;
                        </h1>
                      </div>
                      `
                      <div
                        dangerouslySetInnerHTML={{
                          __html: data.quote.executives,
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="w-full md:w-6/12 px-3">
                    <div
                      className="relative cursor-pointer group overflow-hidden rounded-lg"
                      onClick={(e) => {
                        e.stopPropagation();
                        setPlay(true);
                      }}
                    >
                      <div className="absolute w-full h-full inset-0 bg-black bg-opacity-60 z-10 opacity-0 group-hover:opacity-75 transition duration-200"></div>
                      <img
                        src={`/images/${data.thumbnail.url}`}
                        alt={`Featured customer thumbnail graphic`}
                      />
                      <div className="absolute w-full h-full inset-0 p-6 flex flex-col justify-between z-20">
                        <div className="shadow rounded-lg overflow-hidden w-48 ">
                          <img
                            src={`/images/${data.logo.url}`}
                            alt={`${data.title} logo`}
                          />
                        </div>
                        <div
                          className="flex items-center items-center cursor-pointer"
                          onClick={(e) => {
                            e.stopPropagation();
                            setPlay(true);
                          }}
                        >
                          <div>
                            <img
                              src={`/images/customers/icons/play-button.png`}
                              alt={`Featured graphic`}
                            />
                          </div>
                          <div className="px-3 w-40">
                            <p className="text-white uppercase font-anDemi">
                              WATCH THEIR STORY
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {data.stats && (
                  <div className="flex flex-wrap w-full md:w-full lg:w-3/4">
                    {data.stats.map((stat, i) => {
                      return (
                        <StatColumn
                          value={stat.value}
                          symbol={stat.symbol}
                          key={i}
                        >
                          {stat.description}
                        </StatColumn>
                      );
                    })}
                  </div>
                )}
                <div className="flex justify-start flex-wrap -mx-6 mt-6">
                  <div className="w-full lg:w-1/4 px-6 order-1">
                    <div className="py-10">
                      {data.company.description && (
                        <div className="mb-6">
                          <ContentSidebarTitle>Company</ContentSidebarTitle>
                          <div>
                            <p className="text-sm">
                              {data.company.description}
                            </p>
                          </div>
                        </div>
                      )}
                      {data.company.link && (
                        <>
                          <div className="mb-6">
                            <a className="text-sm underline text-primary">
                              {data.company.link}
                            </a>
                          </div>
                        </>
                      )}

                      {data.company.headquarters && (
                        <div className="mb-6">
                          <ContentSidebarTitle>
                            Headquarters
                          </ContentSidebarTitle>

                          <div>
                            <ContentSidebarParagraph>
                              {data.company.headquarters}
                            </ContentSidebarParagraph>
                          </div>
                        </div>
                      )}
                      {data.company.key_features && (
                        <>
                          <ContentSidebarTitle>
                            Key features
                          </ContentSidebarTitle>

                          <div>
                            {data.company.key_features.map((feature, i) => {
                              return (
                                <div key={i}>
                                  <Link href={feature.link}>
                                    <a className="text-sm underline text-primary">
                                      {feature.title}
                                    </a>
                                  </Link>
                                </div>
                              );
                            })}
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="w-full md:w-full lg:w-3/4 px-6">
                    <div className="border-t py-10">
                      <Content {...data} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </div>
      <PopupVideo videoUrl={data.videoUrl} play={play} setPlay={setPlay} />
    </>
  );
}

function StatColumn({ value, symbol, children }) {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 mb-6">
      <div className="mb-2">
        <p className="text-indigo-300 text-5xl md:text-6xl xl:text-8xl font-anDemi">
          {value}
          {symbol === "%" && (
            <span className="text-indigo-300 text-xl md:text-4xl font-anMedium">
              %
            </span>
          )}
          {symbol !== "%" && (
            <span className="text-indigo-300 text-5xl md:text-6xl xl:text-8xl font-anMedium">
              {symbol !== "x" && symbol !== "X" ? ` ${symbol}` : symbol}
            </span>
          )}
        </p>
      </div>
      <div className="lg:w-10/12">
        <p className="font-anMedium">{children}</p>
      </div>
    </div>
  );
}

function ContentSidebarTitle({ children }) {
  return (
    <div className="mb-2">
      <p className="font-anDemi text-lg">{children}</p>
    </div>
  );
}

function ContentSidebarParagraph({ children }) {
  return (
    <div className="text-sm">
      <p>{children}</p>
    </div>
  );
}

function Content({ quote2nd, challenges, opportunities }) {
  return (
    <div className="content-customers">
      <p className="text-2xl mb-6">“{quote2nd.text}”</p>
      <div className="flex items-center mb-16">
        <img
          src={`/images/${quote2nd.thumbnail}`}
          alt={quote2nd.name}
          width="60"
          className="rounded-[60px]"
        />
        <div className="ml-5">
          <p>
            <strong>{quote2nd.name}</strong>
          </p>
          <p>{quote2nd.title}</p>
        </div>
      </div>
      <div className="mb-14">
        <p className="text-3xl mb-6 font-anMedium">{challenges.title}</p>
        {challenges.description.map((c, i) => (
          <p className="text-lg text-[#666666] mb-6" key={i}>
            {c}
          </p>
        ))}
      </div>
      <div>
        {opportunities.map((o, i) => (
          <div key={i}>
            <p className="text-3xl mb-6 font-anMedium">{o.title}</p>
            {o.quotes.map((q, i) => (
              <div key={i}>
                {q.content && (
                  <p className="text-lg text-[#666666] mb-6">{q.content}</p>
                )}
                {q.quote && (
                  <div className="py-4 flex items-center mb-6">
                    <div className="py-3 pl-6 text-2xl font-anMedium border-solid border-l-4 border-primary ">
                      {q.quote}
                    </div>
                  </div>
                )}
                {q.image && (
                  <div className={"overflow-hidden rounded-2xl mb-6"}>
                    <img alt="quote" src={`/images/${q.image}`} />
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
export const getStaticProps = async (context) => {
  const { slug } = context.params;
  // console.log(slug);

  const data = customersData.find((customer) => customer.id === slug);

  return {
    props: { data },
  };
};

export const getStaticPaths = async (context) => {
  const posts = customersData.map((customer) => {
    return {
      slug: customer.id,
    };
  });

  const paths = posts.map((post) => {
    return {
      params: post,
    };
  });

  return {
    paths,
    fallback: "blocking", //https://nextjs.org/docs/api-reference/data-fetching/get-static-paths#fallback-blocking
  };
};
