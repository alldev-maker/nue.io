import Header2 from "@/components/text/Header2";
import Link from "next/link";
import {DEMO_BOOK_URL} from "@/config/index";
import Ellipse from "@/components/blobs/Ellipse";

export const GetStarted = (props) => {
  const { title = 'Get Started', imgUrl, description } = props;

  return (
    <div className="relative overflow-hidden flex flex-col items-center text-white md:pt-24 px-4 pt-16 bg-[#555783]">
      <div className="md:block hidden">
        <Header2>{title}</Header2>
      </div>
      <div className="block md:hidden">
        <p className="text-4xl font-anMedium text-white">{title}</p>
      </div>
      <p className="text-white md:text-xl text-lg py-6 text-center max-w-lg">{description}</p>
      <div className="z-10 relative w-full text-center sm:w-1/5 md:w-1/5 lg:w-2/5 xl:w-1/5">
        <Link href={DEMO_BOOK_URL}>
          <a
            target="_blank"
            className="btn btn-secondary btn-big"
          >
            Book a demo
          </a>
        </Link>
      </div>
      <div className="z-10 max-w-[1000px] pt-12">
        <img
          src={imgUrl}
        />
      </div>
      <div className="absolute -bottom-[100px] right-0 left-0">
        <Ellipse/>
      </div>
    </div>
  );
};