import {DEMO_BOOK_URL} from "@/config/index";
import Image from "next/image";
import Header4 from "@/components/text/Header4";
import Link from "next/link";

export const FeatureRow = ( props ) => {
  const {
    imgUrl,
    imgCols,
    imgOnLeft,
    title,
    content,
    shadow = false,
    btnText = 'Book a demo',
    btnTarget = DEMO_BOOK_URL,
  } = props;

  let imgColClass = 'md:w-6/12 w-full';
  if ( imgCols === 7 ) {
    imgColClass = 'md:w-7/12 w-full';
  } else if ( imgCols === 8 ) {
    imgColClass = 'md:w-8/12 w-full';
  }

  let contentColClass = 'md:w-6/12 w-full';
  if ( imgCols === 7 ) {
    contentColClass = 'md:w-5/12 w-full';
  } else if ( imgCols === 8 ) {
    contentColClass = 'md:w-4/12 w-full';
  }

  return (
    <div className="max-w-[1200px] md:py-24 py-6 flex flex-col-reverse md:flex-row items-center justify-between mx-auto flex-wrap">
      <div className={`relative max-w-[700px] max-h-full ${imgColClass} min-h-[240px] order-2 ${imgOnLeft ? 'md:order-1 md:pr-9' : 'md:order-2 md:pl-9 md:flex md:justify-end'}`}>
        <img
          className={`${shadow ? 'drop-shadow-lg' : '-mx-10'} my-5`}
          src={imgUrl}
          alt={title}
        />
      </div>
      <div className={`max-w-[700px] mt-4 md:mt-0 ${contentColClass} ${imgOnLeft ? 'md:pl-2 md:order-2' : 'md:pr-2 md:order-1'}`}>
        <Header4>{title}</Header4>
        <p className="text-lg my-6" dangerouslySetInnerHTML={{
          __html: content,
        }}></p>
        <div className="w-full sm:w-1/5 md:w-1/5 lg:w-2/5 xl:w-1/5 mb-8 mb:mb-0">
          <Link href={btnTarget}>
            <a
              target="_blank"
              className="btn btn-primary btn-big "
            >
              {btnText}
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};