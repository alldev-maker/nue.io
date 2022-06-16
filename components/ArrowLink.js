import Link from "next/link";

export const ArrowLink = ({ text, href }) => {
  return (
    <Link href={href}>
      <div className="cursor-pointer flex items-center group">
        <div className="text-primary font-anDemi whitespace-nowrap mr-4">
          {text}
        </div>
        <img
          src="/icons/right-arrow.svg"
          alt="right"
          className="transition delay-150 duration-200 group-hover:translate-x-2"
        />
      </div>
    </Link>
  );
};
