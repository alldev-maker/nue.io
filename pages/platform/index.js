import Head from "next/head";
import SectionFade from "@/components/SectionFade";
import Section from "@/components/Section";
import Header1 from "@/components/text/Header1";
import HeaderLabel from "@/components/text/HeaderLabel";

import { platformColumns } from "@/data/platform-columns-legacy";
import { Animation } from "@/components/Animation";
import PriceBuilder from "../price-builder";
import { HOST_URL } from "@/config/index";
import { MetaTags } from "@/components/MetaTags";

const TopCard = ({ icon, title, text }) => {
  return (
    <div className="w-full md:w-1/3 px-6 mb-6 md:mb-0">
      <div className={`text-center`}>
        <div className="mb-6 mx-auto">{icon()}</div>
        <div className="text-center">
          <p className="text-primary font-anMedium text-xl">{title}</p>
          <p className="text-xl">{text}</p>
        </div>
      </div>
    </div>
  );
};

const BottomCard = ({ icon, title, contentColumns }) => {
  return (
    <div className="relative w-full md:mb-0 mb-9 bg-white px-4 py-14 sm:px-14 rounded-xl">
      <div>
        <div className="mb-6 mx-auto">{icon()}</div>
        <div>
          <p className="text-3xl sm:text-5xl font-anDemi">{title}</p>
        </div>
        <div>
          {contentColumns.map((column, index) => (
            <div key={index} className="mt-8">
              <p className="mb-3 font-anBold">{column.title}</p>
              <p>{column.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function Platform() {
  return (
    <>
      <MetaTags
        title="Nue: Manage Customer Revenue Lifecycles with One Platform"
        description="Configure dynamic pricing. Sell on any channel. Expand customer revenue. Know exactly what to bill and when."
        ogURL="/platform"
      />
      <div className="bg-gradient-to-br from-indigo-50 via-white to-blue-50 relative overflow-hidden ">
        <SectionFade />
        <div className="absolute w-full h-full right-0 top-0 transform translate-x-2/3">
          <div className="w-full h-full clip-path-right bg-blue-100 opacity-75"></div>
        </div>
        <div className="absolute w-full h-full left-0 top-48 ">
          <div className="w-full h-full clip-path-left bg-indigo-100 "></div>
        </div>

        <div className="absolute w-96 h-96  left-0 bottom-0 ">
          <div className="w-full h-full  clip-path-left bg-blue-50 opacity-75"></div>
        </div>

        <div className="absolute w-1/2 h-1/2 transform rotate-90  right-0 bottom-0 ">
          <div className="w-full h-full  clip-path-right bg-blue-50 opacity-50"></div>
        </div>

        <Section>
          <div className="container relative">
            <div className="flex justify-center pt-32 lg:pt-40 mb-12">
              <div className="w-11/12 lg:w-8/12 xl:w-6/12">
                <div className="text-center relative z-20">
                  <HeaderLabel>platform</HeaderLabel>
                  <div className="mb-12">
                    <Header1>
                      Manage your customer revenue lifecycles with one platform
                    </Header1>
                  </div>

                  <div className="md:mb-12 flex justify-center">
                    <div className="w-11/12 sm:w-full ">
                      <h2 className="text-lg md:text-2xl">
                        Configure dynamic pricing. Sell on any channel. Expand
                        customer revenue. Know exactly what to bill and when.
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-24 flex justify-center w-full">
              <Animation path="/animations/platform.json" fullW />
            </div>

            <div className="flex justify-center mb-24">
              <div className="w-11/12 md:w-full xl:w-9/12">
                <div className="flex justify-center flex-wrap -mx-6">
                  {platformColumns.top.map((column, i) => (
                    <TopCard
                      key={i}
                      icon={column.icon}
                      title={column.title}
                      text={column.text}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="relative flex justify-center">
              <div
                className="absolute w-[100vw] top-0 bottom-0"
                style={{
                  background:
                    "linear-gradient(124deg, rgba(64, 45, 255, 0.5) 0%, rgba(249,190,246,0.3) 100%)",
                }}
              />
              <div
                className="absolute clip-path-left-lg opacity-20 w-[100vw] bottom-0 top-32"
                style={{
                  background:
                    "linear-gradient(55.46deg, rgba(60, 104, 255, 0.31) 20%, rgba(60, 104, 255, 0.04) 60%)",
                }}
              />
              <div className="relative w-11/12 md:w-full xl:w-9/12">
                <div className="block md:flex ml-0 mt-20 mb-40 gap-9">
                  <div className="md:w-1/2 md:grid md:gap-9">
                    {platformColumns.bottom
                      .filter((_, i) => i % 2 === 0)
                      .map((column, i) => (
                        <BottomCard
                          key={i}
                          icon={column.icon}
                          title={column.title}
                          contentColumns={column.contentColumns}
                        />
                      ))}
                  </div>
                  <div className="md:w-1/2 md:mt-40 mt-8 md:grid md:gap-9">
                    {platformColumns.bottom
                      .filter((_, i) => i % 2 === 1)
                      .map((column, i) => (
                        <BottomCard
                          key={i}
                          icon={column.icon}
                          title={column.title}
                          contentColumns={column.contentColumns}
                        />
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </div>
    </>
  );
}
