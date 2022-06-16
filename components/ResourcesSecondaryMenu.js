import Link from "next/link";
export default function ResourcesSecondaryMenu({ active, menus }) {
  return (
    <>
      {menus && (
        <div className="mb-6">
          <ul className="flex flex-wrap justify-between md:justify-start md:-mx-6">
            {menus.map((menu, i) => {
              console.log();
              return (
                <li className="md:px-6" key={i}>
                  <Link href={`/revops/${menu.type}/`}>
                    <a
                      className={`${
                        active === menu.type &&
                        "text-indigo-500 hover:no-underline hover:text-opacity-100 cursor-auto"
                      } hover:text-opacity-50 hover:text-indigo-500 hover:underline font-anMedium transition-colors duration-200`}
                    >
                      {menu.header}
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
}
