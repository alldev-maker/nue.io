import Head from "next/head";
import Section from "@/components/Section";
import Header1 from "@/components/text/Header1";
import WavePurple3 from "@/components/waves/Purple3";
import BlobPurple4 from "@/components/blobs/Purple4";
import Header3 from "@/components/text/Header3";
import Header4 from "@/components/text/Header4";
import { MetaTags } from "@/components/MetaTags";
import { DEMO_REQUEST_FORM } from "@/config/index";
import React from "react";

const DemoRequest = () => {
  return (
    <>
      <MetaTags
        title="Nue: Book a Demo"
        description="Learn how to deliver customer proposals 15x faster, calculate revenue impact instantly, and deploy custom quoting & revenue lifecycle manager in under 4 weeks."
        ogURL="/demo-request"
      />
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
            <div className="flex justify-center">
              <div className="w-11/12 xl:w-9/12">
                <div className="relative">
                  <div className="flex justify-between flex-wrap lg:flex-nowrap">
                    <div className="xl:w-1/2 w-full">
                      <p className="font-sm font-anMedium text-primary">DEMO</p>
                      <Header1>Let’s talk revenue</Header1>
                      <Header3 className="my-6">
                        We’d love to answer your questions and show you how Nue
                        can:
                      </Header3>
                      <ul className="pl-6 text-lg check">
                        <li>
                          Deliver customer proposals <strong>15x faster</strong>
                        </li>
                        <li>
                          Save <strong>15 hours</strong> per week on calculating
                          revenue impact
                        </li>
                        <li>
                          Implement customizable quoting & revenue lifecycle
                          manager in less than <strong>4 weeks</strong>
                        </li>
                      </ul>
                      <div className="w-full border-t border-[#E7E7E7] my-12"></div>
                      <Header4 className="text-primary mb-12">
                        “We spun up a Deal Desk function with renewal management
                        in just a month with Nue.”
                      </Header4>
                      <div className="flex items-center">
                        <img
                          src={`/images/customers/people/eric.png`}
                          alt={`Eric`}
                          width="60"
                          className="rounded-[60px] mr-8"
                        />
                        <div>
                          <p className="text-lg font-anBold mb-2">
                            Eric Portugal Welsh,
                          </p>
                          <p className="text-lg">
                            Director of Revenue Operations, Demostack
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="max-w-[400px] xl:max-w-[500px] lg:ml-8 mt-8 lg:mt-0 lg:ml-0 flex overflow-hidden">
                      <iframe
                        style={{
                          width: "450px",
                          height: "650px",
                          borderRadius: "10px",
                          overflow: "hidden",
                        }}
                        src={DEMO_REQUEST_FORM}
                      />
                    </div>
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

export default DemoRequest;
