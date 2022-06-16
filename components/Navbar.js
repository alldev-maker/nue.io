import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Next
import Link from "next/link";
import { useRouter } from "next/router";

// Icons
import Logo from "./Logo";
import { CloseIcon } from "./icons/Close";
import { HamburgerIcon } from "./icons/Hamburger";
import { CaretIcon } from "./icons/Caret";
import { MenuPointer } from "./icons/MenuPointer";

// Data
import { mainMenus } from "@/data/main-menu";

// Config
import { DEMO_BOOK_URL } from "@/config/index";

export default function Navbar() {
    const [dropDownOpen, setdropDownOpen] = useState("");
    const [mobileOpen, setMobileOpen] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (mobileOpen) {
            setMobileOpen(!mobileOpen);
        }
        setdropDownOpen("");
    }, [router.asPath]);

  const menuConstructor = (mainMenus) => {
    return (
      mainMenus.map((menu, i) => {
        return (
          <li
            className=""
            key={i}
          >
            <div
              className={`main-nav-item font-anMedium select-none relative text-lg py-5 px-9 font-anMedium`}
              onMouseEnter={(
                e
              ) =>
                setdropDownOpen(
                  e.target.innerText.toLowerCase()
                )
              }
              onMouseLeave={() =>
                setdropDownOpen(
                  ""
                )
              }
            >
              <a href={menu.link}>{menu.title}</a>
              {menu.dropdown && !menu.dropdown.isEmpty && (
                <AnimatePresence>
                  {dropDownOpen ===
                    menu.title.toLowerCase() && (
                      <DropDown
                        list={
                          menu.dropdown
                        }
                      />
                    )}
                </AnimatePresence>
              )}
            </div>
          </li>
        );
      })
    )
  }

  return (
    <>
      <nav className="absolute w-full top-0 left-0 right-0 bg-transparent z-50 md:px-6 py-5">
        <div className="container">
          <div className="flex justify-center">
            <div className="w-11/12 md:w-full">
              <div className="flex items-center justify-between ">
                <div className="flex justify-between items-center w-full">
                  <Logo/>
                  <div className="w-full items-center justify-between hidden lg:flex">
                    <div className="px-6">
                      <ul className="flex items-center ">
                        {menuConstructor(mainMenus)}
                      </ul>
                    </div>
                    <div className="flex items-center sm:-mx-3">
                      <NavButton
                        type="white"
                        link="https://app.nue.io/login"
                      >
                        Sign in
                      </NavButton>
                      <NavButton
                        type="primary"
                        link={DEMO_BOOK_URL}
                      >
                        Book a demo
                      </NavButton>
                    </div>
                  </div>

                  <div className="lg:hidden">
                    <a
                      href="#"
                      className="rounded-full h-12 w-12 flex items-center justify-center bg-grey-100 hover:bg-grey-200 transition-colors duration-200"
                      onClick={() => {
                        setMobileOpen(!mobileOpen);
                      }}
                    >
                      <AnimatePresence>
                        {!mobileOpen ? (
                          <HamburgerIcon/>
                        ) : (
                          <CloseIcon/>
                        )}
                      </AnimatePresence>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <AnimatePresence>
        {mobileOpen && <MobileMenu items={mainMenus}/>}
      </AnimatePresence>
    </>
  );
}

function MenuToggle(props) {
  return (
    <div
      className={`transform transition-transform duration-200 origin-center cursor-pointer ${
        props.pos ? "rotate-180" : "rotate-0"
      }`}
    >
      <CaretIcon/>
    </div>
  );
}

function MobileMenu(props) {
  return (
    <motion.div
      initial={{x: "100%"}}
      animate={{x: 0}}
      exit={{x: "100%"}}
      className={`w-full h-full inset-0 fixed bg-white z-40 py-32 lg:hidden`}
    >
      <div className="container">
        <div className="flex justify-center">
          <div className="w-11/12 md:w-full ">
            {props.items.map((menu, i) => {
              return <MobileMenuSection key={i} menu={menu}/>;
            })}
            <div className="flex items-center justify-between sm:-mx-3 mt-6 md:px-6">
              <NavButton
                type="primary"
                link={DEMO_BOOK_URL}
              >
                Book a demo
              </NavButton>
              <NavButton
                type="white"
                link="https://app.nue.io/login"
              >
                Sign in
              </NavButton>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function MobileMenuSection(props) {
  const [sectionOpen, setSectionOpen] = useState(false);
  return (
    <div className="">
      <div
        className="flex items-center justify-between w-full cursor-pointer select-none hover:bg-grey-50 p-6"
        onClick={() => {
          setSectionOpen(!sectionOpen);
        }}
      >
        <div>
          {!!props.menu.dropdown && <p className="font-anMedium text-lg">{props.menu.title}</p>}
          {!props.menu.dropdown &&
            <Link href={props.menu.link}>
              <a className="font-anMedium text-lg" target="_blank">{props.menu.title}</a>
            </Link>
          }
        </div>
        <div>
          {props.menu.dropdown && !props.menu.dropdown.isEmpty && (<MenuToggle pos={sectionOpen}/>)}
        </div>
      </div>
      {sectionOpen && props.menu.dropdown && !props.menu.dropdown.isEmpty && (
        <div className="">
          {props.menu.dropdown.map((item, j) => {
            return <DropDownInner item={item} key={j}/>;
          })}
        </div>
      )}
    </div>
  );
}

function NavButton(props) {
  return (
    <div className="px-2 sm:px-3">
      <Link href={props.link}>
        <a target="_blank" className={`btn btn-${props.type}`}>
          {props.children}
        </a>
      </Link>
    </div>
  );
}

function DropDown(props) {
  return (
    <>
      <motion.div
        initial={{opacity: 0}}
        animate={{
          opacity: 1,
          transition: {
            duration: 0.05,
          },
        }}
        exit={{
          opacity: 0,
          transition: {
            duration: 0.1,
          },
        }}
        className={`bg-white absolute top-[60px] -left-2 w-96 p-6 rounded-lg shadow-lg`}
      >
        <div className="absolute -top-3 left-12 w-12 h-12">
          <MenuPointer/>
        </div>
        {props.list.map((item, i) => {
          return <DropDownInner key={i} item={item}/>;
        })}
      </motion.div>
    </>
  );
}

function DropDownInner(props) {
  return (
    <motion.div
      initial={{y: -20}}
      animate={{
        y: 0,
        transition: {
          duration: 0.1,
        },
      }}
      exit={{
        y: -20,
        transition: {
          duration: 0.1,
        },
      }}
      className="menu-item mb-2 last:mb-0"
    >
      <Link href={props.item.link}>
        <a>
          <div className="flex items-center px-4 py-2 rounded-lg transition-colors duration-200 hover:bg-blue-50">
            <div className="w-12">
              <span>{props.item.icon()}</span>
            </div>
            <div className="w-full">
              <p className="font-anMedium text-sm ">
                {props.item.header}
              </p>
              <p className="text-xs font-anRegular text-grey-600">
                {props.item.description}
              </p>
            </div>
          </div>
        </a>
      </Link>
    </motion.div>
  );
}
