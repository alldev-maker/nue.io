import React from "react";
import Head from "next/head";
import Link from "next/link";

// Components
import Header1 from "@/components/text/Header1";
import HeaderLabel from "@/components/text/HeaderLabel";
import Section from "@/components/Section";
import SectionFade from "@/components/SectionFade";
import PopupVideo from "@/components/PopupVideo";
import Header2 from "@/components/text/Header2";

import { PeopleSaying } from "@/data/customers";
import { HOST_URL } from "@/config/index";
import { MetaTags } from "@/components/MetaTags";

const Card = ({ company, name, quote, title }) => {
  return (
    <div className="w-full md:w-1/2 lg:w-4/12 px-3 mb-12">
      <div className="group">
        <div className="mb-2 relative rounded-xl overflow-hidden">
          <div className="absolute w-full h-full inset-0 bg-black bg-opacity-60 z-10 rounded-lg opacity-0"></div>
          <img
            src={`/images/customers/thumbnails/${company}.jpg`}
            alt={company}
          />
          <div className="absolute w-full h-full inset-0 p-6 flex flex-col justify-end z-10">
            <div className="shadow rounded-lg overflow-hidden w-32">
              <img
                src={`/images/customers/logos/${company}.jpg`}
                alt={`${company} logo`}
                style={{ width: "128px" }}
              />
            </div>
          </div>
        </div>
        <div className="mt-4 mb-6">
          <p className="font-anMedium text-xl md:text-2xl">
            &#8220;{quote}&#8221;
          </p>
        </div>
        <div>
          <p className="text-lg font-anMedium">{name}</p>
          <p className="text-lg opacity-50">{title}</p>
        </div>
      </div>
    </div>
  );
};

const CustomersIndex = () => {
  const [play, setPlay] = React.useState(false);
  const videoUrl =
    "https://www.youtube.com/embed/WqWm3GPLwKM?modestbranding=1&showinfo=0&rel=0&fs=0";

  return (
    <>
      <MetaTags
        title="Nue: RevOps Teams Do Extraordinary Things with Nue"
        description="Don't simply take our word for it. Hear firsthand from our own customers about what Nue has done for their Sales, RevOps, and Finance teams."
        socialGraph="/images/customers/social-graph.png"
        ogURL="/customers"
      />
      <div className="bg-gradient-to-br from-pink-50 via-white to-indigo-50 relative overflow-hidden ">
        <Section>
          <SectionFade />
          <div className="absolute w-full h-full right-0 top-0 transform translate-x-2/3">
            <div className="w-full h-full clip-path-right bg-pink-50 opacity-75"></div>
          </div>
          <div className="container relative z-20">
            <div className="flex justify-center pt-32 lg:pt-40 md:mb-12">
              <div className="w-11/12 md:w-8/12 lg:w-10/12 xl:w-8/12 xl:px-6">
                <div className="text-center  ">
                  <div className="mb-6">
                    <HeaderLabel>customers</HeaderLabel>
                    <Header1>
                      RevOps teams do extraordinary things with Nue
                    </Header1>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center  ">
              <div className="w-11/12 md:-full lg:w-11/12 xl:w-10/12 ">
                <div className="flex justify-between flex-wrap -mx-3 mb-20">
                  <div className="w-full md:w-6/12 lg:w-5/12 px-3 mb-6 md:mb-0">
                    <div>
                      <div className="w-full md:hidden mb-6 mt-3 px-3">
                        <div
                          className="relative group cursor-pointer rounded-lg overflow-hidden"
                          onClick={(e) => {
                            e.stopPropagation();
                            setPlay(true);
                          }}
                        >
                          <div className="absolute w-full h-full inset-0 bg-black bg-opacity-60 z-10 rounded-lg opacity-0 group-hover:opacity-75 transition duration-200"></div>
                          <img
                            src={`/images/customers/thumbnails/avail.jpg`}
                            alt={`Avail`}
                          />
                          <div className="absolute w-full h-full inset-0 p-6 flex flex-col justify-between z-20">
                            <div className="shadow rounded-lg overflow-hidden w-48 max-w-[128px] md:max-w-[175px]">
                              <img
                                src={`/images/customers/logos/avail.png`}
                                alt={`avail logo`}
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
                      <div className="mb-2 md:mb-8">
                        <Link href={`/customers/avail`}>
                          <a className="text-3xl md:text-5xl font-anDemi hover:text-indigo-300">
                            &#8220;Nue approaches things in just the right way
                            with Sales and Finance.&#8221;
                          </a>
                        </Link>
                      </div>
                      <div className="mb-6">
                        <p className="font-anMedium max-w-[300px]">
                          <strong>Steve Morgan</strong>, CFO and{" "}
                          <strong>Sabine Stafford</strong>, Sr. Director of
                          Business Operations
                        </p>
                      </div>
                      <div>
                        <Link href="/customers/avail">
                          <a
                            target="_blank"
                            className="cursor-pointer btn btn-big btn-primary"
                          >
                            Read story
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-6/12 lg:w-7/12 md:block hidden px-3">
                    <div
                      className="relative group cursor-pointer rounded-lg overflow-hidden"
                      onClick={(e) => {
                        e.stopPropagation();
                        setPlay(true);
                      }}
                    >
                      <div className="absolute w-full h-full inset-0 bg-black bg-opacity-60 z-10 rounded-lg opacity-0 group-hover:opacity-75 transition duration-200"></div>
                      <img
                        src={`/images/customers/thumbnails/avail.jpg`}
                        alt={`Avail`}
                      />
                      <div className="absolute w-full h-full inset-0 p-6 flex flex-col justify-between z-20">
                        <div className="shadow rounded-lg overflow-hidden w-48 max-w-[175px]">
                          <img
                            src={`/images/customers/logos/avail.png`}
                            alt={`avail logo`}
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
                <div className="flex justify-center md:justify-start flex-wrap -mx-3 ">
                  <div className="w-full md:w-6/12 px-3 mb-12">
                    <div className="group">
                      <div className="relative mb-2 ">
                        <Link href={`/customers/demostack`}>
                          <a className="absolute w-full h-full inset-0 z-30"></a>
                        </Link>
                        <div className="absolute w-full h-full inset-0 bg-black bg-opacity-60 z-10 rounded-lg opacity-0 group-hover:opacity-75 transition duration-200"></div>
                        <img
                          src={`/images/customers/thumbnails/demostack.png`}
                          alt={`demostack`}
                        />
                        <div className="absolute w-full h-full inset-0 p-6 flex flex-col justify-end z-10">
                          <div className="shadow rounded-lg overflow-hidden w-40 max-w-[128px] md:max-w-[175px]">
                            <img
                              src={`/images/customers/logos/demostack.png`}
                              alt={`demostack logo`}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="mb-6">
                        <Link href={`/customers/demostack`}>
                          <a className="font-anMedium text-xl md:text-2xl leading-normal group-hover:text-indigo-300">
                            &#8220;We spun up a Deal Desk function in a month
                            using Nue.&#8221;
                          </a>
                        </Link>
                      </div>
                    </div>
                    <Link href="/customers/demostack">
                      <a
                        target="_blank"
                        className="flex text-primary font-anMedium group-hover:text-indigo-300"
                      >
                        <span>Read story</span>
                        <img
                          alt="right arrow"
                          className="ml-2 w-[16px] pt-[2px]"
                          src="/icons/right-arrow.svg"
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="w-full md:w-6/12 px-3 mb-12">
                    <div className="group">
                      <div className="relative mb-2 rounded-lg overflow-hidden">
                        <div className="absolute w-full h-full inset-0 bg-black z-10 opacity-0"></div>
                        <img
                          src={`/images/customers/thumbnails/betterworks.png`}
                          alt={`demostack`}
                        />
                        <div className="absolute w-full h-full inset-0 p-6 flex flex-col justify-end z-10">
                          <div className="shadow rounded-lg overflow-hidden w-40 max-w-[128px] md:max-w-[175px]">
                            <img
                              src={`/images/customers/logos/betterworks.png`}
                              alt={`betterworks logo`}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="mb-6">
                        <p className="font-anMedium text-xl md:text-2xl leading-normal">
                          &#8220;Nue&#39;s implementation team provides
                          strategic expertise to help us minimize SKUs while
                          maximizing our price and discount flexibility.&#8221;
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <Header2 className="font-anDemi text-center mb-16">
                  What people are saying
                </Header2>
                <div className="flex justify-start flex-wrap -mx-3">
                  {PeopleSaying.map((people) => (
                    <Card {...people} key={people.company} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Section>
      </div>
      <PopupVideo videoUrl={videoUrl} play={play} setPlay={setPlay} />
    </>
  );
};

export default CustomersIndex;
