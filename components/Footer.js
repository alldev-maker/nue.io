import Link from "next/link";
import SectionFade from "./SectionFade";
import Logo from "./Logo";

import { footerLinks } from "@/data/footer";
import { DEMO_BOOK_URL } from "@/config/index";

export default function Footer() {
  return (
    <footer className="py-28 md:px-6 relative overflow-hidden footer">
      <SectionFade />
      <div className="container relative z-10">
        <div className="flex items-center md:items-stretch justify-start flex-wrap lg:flex-row">
          <div className="w-11/12 mb-12 sm:mb-0 mx-auto">
            <div className="flex justify-between flex-wrap">
              <div className="w-full sm:w-4/5 lg:w-3/5 xl:w-4/5 lg:mb-0">
                <div className="flex flex-wrap -mx-6">
                  {footerLinks.map((link, i) => {
                    return (
                      <div key={i} className="w-1/2 sm:w-1/3 px-6 mb-4">
                        <div className="mb-3">
                          {link.link ? (
                            <Link href={link.link}>
                              <a className="uppercase font-anMedium hover:text-blue-500">
                                {link.header}
                              </a>
                            </Link>
                          ) : (
                            <p className="uppercase font-anMedium">
                              {link.header}
                            </p>
                          )}
                        </div>
                        {link.children &&
                          link.children.map((child, j) => {
                            return (
                              <div key={j} className="mb-3 last:mb-0">
                                <Link href={`${child.link}`}>
                                  <a className="hover:text-blue-500 text-grey-600 text-sm transition-colors duration-200">
                                    {child.text}
                                  </a>
                                </Link>
                              </div>
                            );
                          })}
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="w-full sm:text-right sm:w-1/5 md:w-1/5 lg:w-2/5 xl:w-1/5">
                <Link href={DEMO_BOOK_URL}>
                  <a target="_blank" className="btn btn-primary btn-big ">
                    Book a demo
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-11/12 mb-12 sm:mb-0 mx-auto mt-0 flex flex-wrap justify-between items-end">
            <div className="w-1/2 md:w-1/3">
              <div className="flex flex-col justify-between h-full">
                <div>
                  <div className="mb-4 mt-8">
                    <Logo className="w-[72px]"/>
                  </div>
                  <div>
                    <p className="text-grey-600 text-sm">
                      Reinvent your revenue lifecycle
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 flex justify-start sm:justify-center items-end mt-6 ms:mt-0 sm:pl-8">
              <Link href="/terms">
                <a className="hover:text-blue-500 text-grey-600 text-sm transition-colors duration-200 mr-12">
                  Terms
                </a>
              </Link>
              <Link href="/privacy-policy">
                <a className="hover:text-blue-500 text-grey-600 text-sm transition-colors duration-200 mr-12">
                  Privacy
                </a>
              </Link>
              <p className="text-grey-600 text-xs whitespace-nowrap">
                &#169; {new Date().getFullYear()} Nue.io
              </p>
            </div>
            <div className="w-1/2 md:w-1/3 flex mt-8 md:mt-0 md:justify-end">
              <Link href="https://www.linkedin.com/company/nue-io/">
                <a className="font-anMedium hover:text-blue-500 w-10" target="_blank">
                  <img src="/icons/linkedin.png" alt="linkedin" />
                </a>
              </Link>
              <Link href="https://twitter.com/nue_io">
                <a className="font-anMedium hover:text-blue-500 w-10" target="_blank">
                  <img src="/icons/twitter.png" alt="twitter" />
                </a>
              </Link>
              <Link href="https://www.facebook.com/Nueio">
                <a className="font-anMedium hover:text-blue-500 w-10" target="_blank">
                  <img src="/icons/facebook.png" alt="facebook" />
                </a>
              </Link>
            </div>
          </div>
          <div className="w-11/12 md:w-full lg:w-9/12 xl:w-7/12 hidden">
            <div className="flex justify-between flex-wrap ">
              <div className="w-full md:w-3/4 lg:w-4/5 mb-12 md:mb-0"></div>
              <div className="md:w-1/4 lg:w-1/5 text-right flex flex-col justify-between">
                <div className="mb-4"></div>
                <div className="flex items-center justify-between">
                  <Logo />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
