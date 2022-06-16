import Head from "next/head";
import Mosaic from "@/components/Mosaic";
import CustomBlob from "@/components/blobs/CustomBlob";
import PurpleSm from "@/components/blobs/PurpleSm";
import RedSm from "@/components/blobs/RedSm";
import { Card } from "@/components/Card";
import { FeatureRow } from "@/components/FeatureRow";
import { GetStarted } from "@/components/GetStarted";
import Header1 from "@/components/text/Header1";
import Header3 from "@/components/text/Header3";
import { EyeIcon } from "@/components/icons/Eye";
import { LineChartIcon } from "@/components/icons/LineChart";
import { AnalyticsBenefits } from "@/data/analytics-benefits";
import { TooltipIcon } from "@/components/icons/Tooltop";
import PriceBuilder from "../price-builder";
import {HOST_URL} from "@/config/index";
import {MetaTags} from "@/components/MetaTags";

const Analytics = () => {
  return (
    <>
      <MetaTags
        title="Nue: Get Clean, Real-time Revenue Analytics"
        description="Track revenue across your entire customer lifecycle from a single source of truth to reach your revenue goals without having to cobble together revenue data."
        socialGraph="/images/analytics/social-graph.png"
        ogURL="/analytics"
      />
      <Mosaic>
        <div className="absolute h-[1600px] top-0 left-0 right-0">
          <CustomBlob
            from={{ color: "#FD9090", opacity: 0 }}
            to={{ color: "#FD9090", opacity: 1 }}
          />
        </div>
        <div className="absolute top-[1200px] h-[1000px] left-0">
          <PurpleSm />
        </div>
        <div className="absolute top-[2000px] h-[1000px] right-0">
          <RedSm />
        </div>
        <div className="absolute top-[2800px] h-[1000px] left-0">
          <PurpleSm />
        </div>
        <div className="w-11/12 md:w-full lg:w-11/12 xl:w-9/12 mx-auto relative">
          <div className="container flex items-center justify-between pt-32 lg:pt-40 flex-wrap md:flex-nowrap">
            <div className="md:w-6/12 w-full">
              <p className="text-xl mb-1 font-anRegular uppercase">Analytics</p>
              <Header1>
                Get clean, real-time revenue analytics
              </Header1>
              <p className="text-2xl mt-6">
                No more cobbling together revenue data. Nue gives your teams a
                single source of truth across your entire customer journey so
                you can drive towards your revenue goals.
              </p>
            </div>
            <div className="md:w-6/12 md:mt-0 w-full mt-16 md:ml-8 rounded-2xl drop-shadow-xl overflow-hidden">
              <video autoPlay playsinline muted loop style={{ pointerEvents: "none" }}>
                <source src="/videos/analytics.mp4" type="video/mp4" />
                <source src="/videos/analytics.webm" type="video/webm" />
              </video>
            </div>
          </div>
          <div className="max-w-[600px] text-center container flex justify-center mt-[100px] mb-12">
            <Header3>
              Nue tracks revenue across your entire customer lifecycle
            </Header3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-5 gap-y-5 pb-24 max-w-[1024px] mx-auto">
            <Card
              icon={EyeIcon}
              title="See status, speed up"
              content="Know in real-time where every customer quote, order, and approval is at with one dashboard so you can increase revenue velocity."
            />
            <Card
              icon={LineChartIcon}
              title="See ARR, get aligned"
              content="Enable out-of-the-box analytics including ARR, MRR, TCV and more to align teams against one, real-time source of revenue truth."
            />
            <Card
              icon={TooltipIcon}
              title="Predict challenges, close gaps"
              content="Adapt your strategy with insights into upcoming downsells, renewals and churn probability."
            />
          </div>
          <div className="md:py-12">
            <div className="flex justify-center md:pb-0 pb-8">
              <Header3>Benefits of Nue Analytics</Header3>
            </div>
            {AnalyticsBenefits.map((benefit, index) => (
              <FeatureRow key={index} {...benefit} />
            ))}
          </div>
        </div>
      </Mosaic>
      <GetStarted
        imgUrl="/images/analytics/revenue-dashboard.png"
        description="Get a handle on your revenue today with Nue Analytics"
      />
    </>
  );
};

export default Analytics;
