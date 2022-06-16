// Next
import Head from "next/head";

// React scroll
import { Link as ReactScrollLink } from "react-scroll";

// Components
import Header1 from "@/components/text/Header1";
import Header3Legacy from "@/components/text/Header3Legacy";
import HeaderLabel from "@/components/text/HeaderLabel";
import Section from "@/components/Section";
import FloatingImage from "@/components/FloatingImage";
import SectionFade from "@/components/SectionFade";

import { productSilos } from "@/data/product-silos";
import {DEMO_BOOK_URL, HOST_URL} from "@/config/index";
import Link from "next/link";
import React from "react";
import PriceBuilder from "../price-builder";
import {MetaTags} from "@/components/MetaTags";

export default function Teams() {
  return (
    <>
      <MetaTags
        title="Nue: Unify Your End-to-End ARR Journey from Sales to Finance"
        description="Manage & optimize revenue streams across Sales & Customer Success to deliver a complete overview & predictive analytics to Finance & RevOps."
        ogURL="/teams"
      />
      <div className="bg-gradient-to-br from-indigo-50 via-white to-indigo-50 relative overflow-hidden ">
        <Section>
          <SectionFade />
          <div className="absolute w-full h-full left-0 top-0 transform translate-y-96 ">
            <div className="w-full h-full clip-path-left bg-blue-100"></div>
          </div>
          <div className="absolute w-full h-full right-0 top-0 transform translate-x-2/3">
            <div className="w-full h-full clip-path-right bg-indigo-100 opacity-75"></div>
          </div>
          <div className="container relative">
            <div className="flex justify-center pt-32 lg:pt-40 md:mb-12">
              <div className="w-11/12 lg:w-7/12 xl:w-6/12">
                <div className="text-center relative z-20">
                  <div className="mb-6">
                    <HeaderLabel>for teams</HeaderLabel>
                    <Header1>Unify your end-to-end ARR journey</Header1>
                  </div>

                  <div className="mb-6 flex justify-center">
                    <div className="w-11/12 sm:w-7/12 lg:w-10/12 ">
                      <h2 className="text-lg md:text-2xl">
                        Nue helps teams manage their revenue streams, optimize
                        them, and deliver complete overview and predictive
                        analytics to their finance teams.
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center md:mb-12">
              <FloatingImage
                classes={``}
                src={`/images/product/hero-2.png`}
                alt={`Product hero graphic`}
                width={1228}
                height={627}
              />
            </div>
            <div className="container py-6 md:py-12">
              <div className="flex justify-center flex-wrap items-stretch -mx-1 md:-mx-3">
                {productSilos.map((silo, i) => {
                  return (
                    <div
                      className="w-1/2 md:w-1/4 px-1 md:px-3 mb-2 md:mb-0 "
                      key={i}
                    >
                      <div
                        className={`bg-white shadow-lg rounded-lg p-6 h-full group hover:shadow-xl transition-shadow duration-200 relative z-50 cursor-pointer`}
                      >
                        <ReactScrollLink
                          to={silo.anchor}
                          smooth={true}
                          duration={200}
                          className="absolute w-full h-full inset-0 z-10"
                        ></ReactScrollLink>
                        <div className="flex items-center h-12">
                          {silo.icon.large()}
                        </div>
                        <div className="h-16">
                          <p className="font-anMedium text-base md:text-xl">
                            {silo.label}
                          </p>
                        </div>
                        <div className="flex">
                          <p className="text-indigo-300 flex items-center text-sm md:text-base">
                            Learn more{" "}
                            <span className="inline relative transform transition-transform duration-200 translate-x-2 group-hover:translate-x-2.5">
                              <svg
                                width="5"
                                height="9"
                                viewBox="0 0 5 9"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M1.22354 0.828712L4.78906 4.1593C4.8559 4.22122 4.90895 4.2949 4.94516 4.37607C4.98136 4.45724 5 4.54431 5 4.63224C5 4.72018 4.98136 4.80724 4.94516 4.88842C4.90895 4.96959 4.8559 5.04326 4.78906 5.10519L1.22354 8.43578C1.15725 8.49821 1.07838 8.54777 0.991482 8.58158C0.904584 8.6154 0.811377 8.63281 0.717239 8.63281C0.623101 8.63281 0.529894 8.6154 0.442996 8.58158C0.356097 8.54777 0.277227 8.49821 0.210935 8.43578C0.144097 8.37385 0.0910462 8.30018 0.0548428 8.21901C0.0186395 8.13783 0 8.05077 0 7.96283C0 7.8749 0.0186395 7.78783 0.0548428 7.70666C0.0910462 7.62549 0.144097 7.55181 0.210935 7.48989L3.27728 4.63224L0.210935 1.7746C0.0766549 1.64917 0.00121732 1.47904 0.00121732 1.30166C0.00121732 1.21382 0.0197373 1.12685 0.0557208 1.0457C0.0917043 0.964553 0.144446 0.89082 0.210935 0.828712C0.345215 0.70328 0.527338 0.632812 0.717239 0.632812C0.811269 0.632812 0.904377 0.650113 0.991249 0.683725C1.07812 0.717338 1.15705 0.766604 1.22354 0.828712Z"
                                  fill="#6239EB"
                                />
                              </svg>
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Section>
        {productSilos.map((silo, i) => {
          return (
            <Section key={i}>
              <SectionFade />
              {/* <div className="absolute w-full h-full left-0 bottom-0 transform translate-x-96  ">
                                <div className="w-full h-full clip-path-right bg-green-50"></div>
                            </div> */}
              <SectionBlob pos={silo.blob.pos} color={silo.blob.color} />
              <div className="container relative">
                <div
                  className="flex justify-center py-12 md:py-20"
                  id={silo.anchor}
                >
                  <div className="w-full lg:w-11/12 relative">
                    <div
                      className={`flex flex-wrap justify-center items-center ${
                        i % 2 !== 0 && "flex-row-reverse"
                      }`}
                    >
                      <div className="w-full lg:w-6/12 px-6 mb-6 md:mb-0">
                        <FloatingImage
                          classes={``}
                          src={`/images/product/${silo.img.slug}`}
                          alt={`${silo.section.title} graphic`}
                          width={silo.img.width}
                          height={silo.img.height}
                        />
                      </div>
                      <div className="w-11/12 lg:w-6/12 p-6  ">
                        <div className="flex items-center mb-6">
                          <div className="w-8">{silo.icon.small()}</div>
                          <div className="w-full">
                            <p className="uppercase font-anMedium text-sm md:text-base">
                              FOR {silo.label}
                            </p>
                          </div>
                        </div>

                        <div className="mb-12">
                          <Header3Legacy>{silo.section.title}</Header3Legacy>
                        </div>
                        {silo.section.paras.map((para, j) => {
                          return (
                            <div
                              className="mb-6 last:mb-0 flex justify-start"
                              key={j}
                            >
                              <div className="w-20">{para.icon()}</div>
                              <div className="w-full px-6">
                                <p className="font-anMedium text-lg mb-2">
                                  {para.header}
                                </p>
                                <p className="text-sm text-grey-800">
                                  {para.text}
                                </p>
                              </div>
                            </div>
                          );
                        })}
                        <div className="mt-12 relative z-10">
                          <Link href={DEMO_BOOK_URL}>
                            <a
                              target="_blank"
                              className="cursor-pointer btn btn-big btn-primary"
                            >
                              Book a demo
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Section>
          );
        })}
      </div>
    </>
  );
}

function SectionBlob(props) {
  return (
    <div
      className={`absolute w-full h-full left-0 bottom-0 transform ${props.pos}`}
    >
      <div className={`w-full h-full clip-path-right ${props.color}`}></div>
    </div>
  );
}
