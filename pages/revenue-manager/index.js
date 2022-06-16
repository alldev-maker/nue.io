import Head from "next/head";
import Header1 from "@/components/text/Header1";
import Mosaic from "@/components/Mosaic";
import Header3 from "@/components/text/Header3";
import { DollarIcon } from "@/components/icons/Dollar";
import { FeatureRow } from "@/components/FeatureRow";
import { GetStarted } from "@/components/GetStarted";
import { Card } from "@/components/Card";
import CustomBlob from "@/components/blobs/CustomBlob";
import NavySm from "@/components/blobs/NavySm";
import RedSmLeft from "@/components/blobs/RedSmLeft";
import { TimeIcon } from "@/components/icons/Time";
import { WalletIcon } from "@/components/icons/Wallet";
import { RevenueMangerBenefits } from "@/data/revenue-manager-benefits";
import {HOST_URL} from "@/config/index";
import {MetaTags} from "@/components/MetaTags";

const RevenueManager = () => {
  return (
    <>
      <MetaTags
        title="Nue: Accurate, Unified Invoicing into ERP - Revenue Manager"
        description="Integrate with your ERP to get complete, real-time visibility into revenue, accurate RevRec, and seamless sales to finance billing."
        socialGraph="/images/revenue-manager/social-graph.png"
        ogURL="/revenue-manager"
      />
      <Mosaic>
        <div className="absolute top-0 h-[1600px] left-0 right-0">
          <CustomBlob
            from={{ color: "#2F62EF", opacity: 0.1 }}
            to={{ color: "#6239EB", opacity: 0.5 }}
          />
        </div>
        <div className="absolute top-[1200px] h-[1000px] left-0">
          <RedSmLeft />
        </div>
        <div className="absolute top-[2000px] h-[1000px] right-0">
          <NavySm />
        </div>
        <div className="w-11/12 md:w-full lg:w-11/12 xl:w-9/12 mx-auto relative">
          <div className="container flex items-center justify-between pt-32 lg:pt-40 flex-wrap md:flex-nowrap">
            <div className="md:w-1/2 w-full">
              <p className="text-xl mb-1 font-anRegular uppercase">
                Revenue manager
              </p>
              <Header1>Accurate, unified invoicing into ERP</Header1>
              <p className="text-lg md:text-2xl mt-6">
                Nue integrates with your ERP so you have a complete, real-time
                visibility into revenue.
              </p>
            </div>
            <div className="md:w-1/2 md:mt-0 w-full mt-16">
              <img
                src="/images/revenue-manager/invoice.png"
                alt="invoice"
                className="drop-shadow"
              />
            </div>
          </div>
          <div className="container flex justify-center mt-[100px] mb-12">
            <Header3 className={"text-center"}>
              Seamless Sales to Finance billing{" "}
            </Header3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-5 gap-y-5 pb-24 max-w-[1024px] mx-auto">
            <Card
              icon={TimeIcon}
              title="Clean invoices, real-time analytics"
              content={
                "Give Finance (and your whole company) holistic invoice visibility no matter the sales channel or any changes."
              }
            />
            <Card
              icon={DollarIcon}
              title="Simplify billing, maximize ERP"
              content={
                "No need to buy a separate billing platform – simply pass invoices to your ERP for cash and collections."
              }
            />
            <Card
              icon={WalletIcon}
              title="Clear data, clean RevRec"
              content={
                "Nue delivers all the revenue and provisioning details you need for clean, clear revenue recognition."
              }
            />
          </div>
          <div className="md:py-12">
            <div className="flex justify-center md:pb-0 pb-8">
              <Header3>Benefits of Nue Revenue Manager</Header3>
            </div>
            {RevenueMangerBenefits.map((benefit, index) => (
              <FeatureRow key={index} {...benefit} />
            ))}
          </div>
        </div>
      </Mosaic>
      <GetStarted
        imgUrl="/images/revenue-manager/quotes-dashboard.png"
        description="Learn more about Nue today."
      />
    </>
  );
};

export default RevenueManager;
