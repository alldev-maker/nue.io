import ResourceLabel from "./ResourceLabel";
import Link from "next/link";
import Header2 from "@/components/text/Header2";

export default function ResourceFeaturedRow({
  bannerImage,
  duration,
  topic,
  title,
  brief,
  link,
  btnText,
}) {
  return (
    <div
      className={`flex justify-center sm:justify-between flex-wrap mb-12`}
    >
      <div className="w-full lg:w-7/12 pr-0 sm:pr-6 mb-6 lg:mb-0">
        <div className="relative rounded-xl overflow-hidden">
          <img src={bannerImage} alt={title} className="h-[320px] md:h-[400px] w-full object-cover" />
          {duration && (
            <div className="absolute bottom-3 shadow-lg right-3 bg-indigo-300 text-white rounded-lg flex items-center px-2 py-1">
              <p>{duration}</p>
            </div>
          )}
        </div>
      </div>
      <div className="w-full lg:w-5/12">
        <div className="mb-2">
          <ResourceLabel>{topic}</ResourceLabel>
        </div>
        <div className="mb-6">
          <Header2>{title}</Header2>
        </div>
        <div className="mb-6">
          <p className="text-grey-600 md:text-lg">{brief}</p>
        </div>
        <div>
          <Link href={link}>
            <a className={`btn btn-big bg-blue bg-opacity-30 text-primary whitespace-nowrap`}>{btnText}</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
