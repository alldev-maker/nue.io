import Link from "next/link";

export default function Logo({ className }) {
  return (
    <div className={className || "w-20 md:w-24"}>
      <Link href="/" replace>
        <a className="font-anMedium text-2xl md:text-4xl md:leading-4">
          <img src={`/logos/nue-logo.png`} alt={`Nue logo`} />
        </a>
      </Link>
    </div>
  );
}
