import Head from "next/head";
import Header1 from "@/components/text/Header1";
import Mosaic from "@/components/Mosaic";
import Header3 from "@/components/text/Header3";
import { UpIcon } from "@/components/icons/Up";
import { DollarIcon } from "@/components/icons/Dollar";
import { CustomerIcon } from "@/components/icons/Customer";
import { PriceBuilderBenefits } from "@/data/price-builder-benefits";
import { FeatureRow } from "@/components/FeatureRow";
import PurpleSm from "@/components/blobs/PurpleSm";
import RedSm from "@/components/blobs/RedSm";
import { GetStarted } from "@/components/GetStarted";
import { Card } from "@/components/Card";
import CustomBlob from "@/components/blobs/CustomBlob";
import { Animation } from "@/components/Animation";
import { MetaTags } from "@/components/MetaTags";

const PriceBuilder = () => {
  return (
    <>
      <MetaTags
        title="Nue: Deploy Pricing & Promos in Minutes - Price Builder"
        description="Create a unified customer experience with one easy-to-use pricing process for all your sales channels – direct, self-service and partners."
        socialGraph="/images/price-builder/social-graph.png"
        ogURL="/price-builder"
      />

      <Mosaic>
        <div className="absolute top-0 h-[1600px] left-0 right-0">
          <CustomBlob
            from={{ color: "#3C68FF", opacity: 0.4 }}
            to={{ color: "#6239EB", opacity: 1 }}
          />
        </div>
        <div className="absolute top-[1200px] h-[1000px] left-0">
          <PurpleSm />
        </div>
        <div className="absolute top-[2000px] h-[1000px] right-0">
          <RedSm />
        </div>
        <div className="w-11/12 md:w-full lg:w-11/12 xl:w-9/12 mx-auto relative">
          <div className="container flex items-center justify-between pt-32 lg:pt-40 flex-wrap md:flex-nowrap">
            <div className="md:w-1/2 w-full">
              <p className="text-xl mb-1 font-anRegular uppercase">
                Price builder
              </p>
              <Header1>Deploy pricing and promos in minutes</Header1>
              <p className="text-lg md:text-2xl mt-6">
                Create a unified customer experience with one easy-to-use
                pricing process for all your sales channels – direct,
                self-service and partners.
              </p>
            </div>
            <div className="md:w-1/2 md:mt-0 w-full mt-16 flex justify-center">
              <Animation path="/animations/pro-bundle.json" />
            </div>
          </div>
          <div className="container flex justify-center mt-[100px] mb-12">
            <Header3 className={"text-center"}>
              Nue enables agile pricing and promos
            </Header3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-5 gap-y-5 pb-24 max-w-[1024px] mx-auto">
            <Card
              icon={UpIcon}
              title="Faster pricing, faster GTM"
              content={
                "Creating bundles, launching new add-ons, and monetizing features is easy with Nue’s simple, powerful interface."
              }
            />
            <Card
              icon={DollarIcon}
              title="Innovate pricing, increase revenue"
              content={
                "Empower RevOps to creatively layer price and discount strategies on any bundle or product."
              }
            />
            <Card
              icon={CustomerIcon}
              title="A/B test, find customers"
              content={
                "Adapt your pricing and discounting on the fly or test new strategies so you can maximize existing customers and find more."
              }
            />
          </div>
          <div className="md:py-12">
            <div className="flex justify-center md:pb-0 pb-8">
              <Header3>Benefits of Nue Price Builder</Header3>
            </div>
            {PriceBuilderBenefits.map((benefit, index) => (
              <FeatureRow key={index} {...benefit} />
            ))}
          </div>
        </div>
      </Mosaic>
      <GetStarted
        imgUrl="/images/price-builder/bundle-suites.png"
        description="Plan and execute new pricing strategies in minutes with Price Builder"
      />
    </>
  );
};

export default PriceBuilder;
