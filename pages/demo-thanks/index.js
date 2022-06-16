import Head from "next/head";
import Section from "@/components/Section";
import Header1 from "@/components/text/Header1";
import WavePurple3 from "@/components/waves/Purple3";
import BlobPurple4 from "@/components/blobs/Purple4";
import Header3 from "@/components/text/Header3";

const DemoThanks = () => {

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
                      We will be contacting you shortly with more information.
                    </Header3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </div>
    </>
  );
};

export default DemoThanks;
