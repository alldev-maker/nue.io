import ResourceLabel from "./ResourceLabel";
import Link from "next/link";
import Image from "next/image";
export default function Card({
  bannerImage,
  duration,
  topic,
  title,
  brief,
  link,
}) {
  return (
    <div className="w-full lg:w-1/3 lg:pr-6 mb-6 lg:mb-0">
      <div className="relative w-full lg:w-[480px] max-w-full">
        <img
          className="rounded-xl object-cover w-full lg:h-[240px] h-[240px] sm:h-[300px]"
          src={bannerImage}
          alt={title}
        />
        {duration && (
          <div className="absolute bottom-3 shadow-lg right-3 bg-indigo-300 text-white rounded-lg flex items-center px-2 py-1">
            <p>{duration}</p>
          </div>
        )}
      </div>
      <div className="py-3">
        <div>
          <ResourceLabel>{topic}</ResourceLabel>
          <Link href={link}>
            <a className="text-lg md:text-xl font-anMedium mb-2 hover:text-indigo-300 block">
              {title}
            </a>
          </Link>
          <p className="text-grey-600 md:text-base text-sm ">
            {brief}
          </p>
        </div>
      </div>
    </div>
  );
}
