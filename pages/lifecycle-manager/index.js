import Head from "next/head";
import Mosaic from "@/components/Mosaic";
import CustomBlob from "@/components/blobs/CustomBlob";
import PurpleSm from "@/components/blobs/PurpleSm";
import RedSm from "@/components/blobs/RedSm";
import Header1 from "@/components/text/Header1";
import Header3 from "@/components/text/Header3";
import { Card } from "@/components/Card";
import { LifecycleManagerBenefits } from "@/data/lifecycle-manager-benefits";
import { FeatureRow } from "@/components/FeatureRow";
import { EyeIcon } from "@/components/icons/Eye";
import { WalletIcon } from "@/components/icons/Wallet";
import { NoteIcon } from "@/components/icons/Note";
import { GetStarted } from "@/components/GetStarted";
import {Animation} from "@/components/Animation";
import {HOST_URL} from "@/config/index";
import {MetaTags} from "@/components/MetaTags";

const LifecycleManager = () => {
  return (
    <>
      <MetaTags
        title="Nue: Streamline Customer Lands & Expands - Lifecycle Manager"
        description="Manage your customer lifecycle with a holistic view so no more quotes, orders, upsells, or renewals ever fall through the cracks."
        socialGraph="images/lifecycle-manager/social-graph.png"
        ogURL="/lifecycle-manager"
      />
      <Mosaic>
        <div className="absolute top-0 h-[1600px] left-0 right-0">
          <CustomBlob
            from={{ color: "#67D5CA", opacity: 0 }}
            to={{ color: "#67D5CA", opacity: 1 }}
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
        <div className="absolute top-[3800px] h-[1000px] right-0">
          <RedSm />
        </div>
        <div className="w-11/12 md:w-full lg:w-11/12 xl:w-9/12 mx-auto relative">
          <div className="container flex items-center justify-between pt-32 lg:pt-40 flex-wrap md:flex-nowrap">
            <div className="md:w-1/2 w-full">
              <p className="text-xl mb-1 font-anRegular uppercase">
                Lifecycle Manager
              </p>
              <Header1>
                Streamline your customer lands and expands
              </Header1>
              <p className="text-2xl mt-6">
                Nue helps you manage your customer lifecycle with a holistic
                view so no more quotes, orders, upsells, and renewals ever fall
                through the cracks.
              </p>
            </div>
            <div className="md:w-1/2 md:mt-0 w-full mt-16 flex justify-center">
              <Animation path="/animations/cycle.json" />
            </div>
          </div>
          <div className="container flex justify-center mt-[100px] mb-12">
            <Header3 className={"text-center"}>
              Nue simplifies and accelerates quotes, orders, and renewals
            </Header3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-5 gap-y-5 pb-24 max-w-[1024px] mx-auto">
            <Card
              icon={WalletIcon}
              title="Spin up quote, get it closed"
              content="Launch a plug-and-play Deal Desk function in Salesforce with optimized discounting, approvals workflows and real-time revenue projections."
            />
            <Card
              icon={NoteIcon}
              title="Make changes, optimize revenue"
              content="Manage customer renewals and changes all within Salesforce – and empower your customers to do it for themselves in your product."
            />
            <Card
              icon={EyeIcon}
              title="See revenue, close gaps"
              content="From quote to order to change order to renewal, Nue shows real-time TCV, ARR, MRR projections for rapid fast Finance thumbs up."
            />
          </div>
          <div className="md:py-12">
            <div className="flex justify-center md:pb-0 pb-8">
              <Header3>Benefits of Nue Lifecycle Manager</Header3>
            </div>
            {LifecycleManagerBenefits.map((benefit, index) => (
              <FeatureRow key={index} {...benefit} />
            ))}
          </div>
        </div>
      </Mosaic>
      <GetStarted
        imgUrl="/images/lifecycle-manager/quote-dashboard.png"
        description="Start streamlining your customer land and expands with Lifecycle Manager"
      />
    </>
  );
};

export default LifecycleManager;
