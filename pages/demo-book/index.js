import Head from "next/head";
import Section from "@/components/Section";
import { InlineWidget } from "react-calendly";
import Header1 from "@/components/text/Header1";
import WavePurple3 from "@/components/waves/Purple3";
import BlobPurple4 from "@/components/blobs/Purple4";
import Header3 from "@/components/text/Header3";

const DemoBook = () => {
  return (
    <>
      <Head>
        <title>Thanks for your request!</title>
      </Head>
      <div className="relative overflow-hidden">
        <Section>
          <div
            className="absolute h-full inset-0 opacity-50"
            style={{ top: "-500px", width: "120%", marginLeft: "-20%" }}
          >
            <WavePurple3 />
          </div>
          <div className="absolute w-full h-full inset-0 opacity-30">
            <BlobPurple4 />
          </div>
          <div className="container py-40">
            <div className="w-11/12 xl:w-9/12 mx-auto">
              <div className="relative">
                <div className="flex justify-between flex-wrap lg:flex-nowrap">
                  <div className="w-full">
                    <p className="font-sm font-anMedium text-primary">DEMO</p>
                    <Header1>Thanks for your request!</Header1>
                    <Header3 className="my-6">
                      Go ahead and book a time with us
                    </Header3>
                    <p className="text-lg">
                      Looking forward to learning about your use cases.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative min-h-[700px] -mb-64 md:-mb-32 2xl:-mb-96 mt-24">
                <InlineWidget
                  url="https://calendly.com/nue/kate-1?hide_gdpr_banner=1"
                  styles={{ height: "1100px" }}
                />
              </div>
            </div>
          </div>
        </Section>
      </div>
    </>
  );
};

export default DemoBook;
