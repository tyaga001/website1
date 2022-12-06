import { useState, useEffect } from "react";
import ArrowRight from "../Icons/ArrowRight";
import Logo from "../Icons/Logo";
import classNames from "src/utils/classNames";
import Github from "../Icons/Github";
import Discord from "../Icons/Discord";
import Twitter from "../Icons/Twitter";
import Container from "../layout/Container";
import BurgerMenu from "../Icons/BurgerMenu";
import CloseMenu from "../Icons/CloseMenu";
import HeaderDropdown from "./Dropdown";
import { productLinks, learnLinks } from "./headerLinks";

export default function Header() {
  const [scroll, setScroll] = useState(false);
  const [menuState, setMenuState] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 40);
    });
  }, []);

  const toggleMenu = () => {
    setMenuState(!menuState);
  };

  return (
    <header
      className={classNames(
        scroll ? `bg-slate-1000/80 shadow-lg ` : "",
        `sticky backdrop-blur-sm top-0 left-0 right-0 z-50 transition-colors duration-200`
      )}
    >
      <Container className="flex justify-between items-center  py-5 lg:py-0">
        <div className="flex  items-center w-full">
          <a href="/" className="mr-4">
            <Logo className="text-white w-20 relative top-[2px]" />
          </a>
          <nav
            className={classNames(
              menuState ? `block` : `hidden`,
              `overflow-y-scroll lg:overflow-visible w-full fixed bottom-0 lg:bottom-auto -z-10 lg:z-0 pt-[76px] lg:pt-0 h-screen lg:h-auto max-h-screen top-[0] left-0  right-0  bg-slate-900 lg:bg-transparent lg:static lg:flex`
            )}
          >
            <div className="flex flex-col lg:flex-row items-start lg:items-center w-full">
              <ul className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-0">
                <li className="relative flex items-center group text-white font-medium lg:px-5 lg:py-8 text-sm">
                  <span className="hidden lg:block group-hover:lg:opacity-40 transition-opacity cursor-pointer">
                    Product
                  </span>
                  <HeaderDropdown navLinks={productLinks} />
                </li>
                <li className="relative flex flex-col lg:flex-row lg:items-center group text-white font-medium lg:px-5 lg:py-8 text-sm">
                  <span className="hidden lg:block lg:group-hover:opacity-40 transition-opacity cursor-pointer">
                    Learn
                  </span>
                  <HeaderDropdown navLinks={learnLinks} />
                </li>
                <li>
                  <a
                    href="/pricing?ref=nav"
                    className="flex mt-4 lg:mt-0 items-center text-white font-medium px-8 lg:px-5 py-2 text-sm  hover:opacity-60"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="/blog?ref=nav"
                    className="flex items-center text-white font-medium px-8 lg:px-5 py-2 text-sm  hover:opacity-60"
                  >
                    Blog
                  </a>
                </li>
              </ul>
              <ul className="flex lg:items-center mt-2 lg:mt-0">
                <li>
                  <a
                    href="https://github.com/inngest/inngest"
                    className="flex items-center text-white font-medium px-3.5 py-2 text-sm ml-4  hover:opacity-60"
                  >
                    <Github />
                  </a>
                </li>
                <li>
                  <a
                    href="https://discord.gg/EuesV2ZSnX"
                    className="flex items-center text-white font-medium px-3.5 py-2 text-sm  hover:opacity-60"
                  >
                    <Discord />
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/inngest"
                    className="flex items-center text-white font-medium px-3.5 py-2 text-sm hover:opacity-60"
                  >
                    <Twitter />
                  </a>
                </li>
              </ul>
            </div>
            <div className="px-8 py-8 lg:py-0 lg:px-0 flex gap-6 items-center lg:w-1/3 lg:justify-end">
              <a
                href="https://app.inngest.com/login?ref=nav"
                className="text-white font-medium text-sm  hover:opacity-60 duration-150 transition-all"
              >
                Log In
              </a>

              <a
                href="/sign-up?ref=nav"
                className="group flex gap-0.5 items-center rounded-full text-sm font-medium pl-6 pr-5 py-2  bg-indigo-500 hover:bg-indigo-400 transition-all text-white"
              >
                Sign Up
                <ArrowRight className="group-hover:translate-x-1.5 relative top-px transition-transform duration-150 " />
              </a>
            </div>
          </nav>
        </div>
        <button
          className="text-slate-400 xl:m lg:hidden"
          onClick={() => toggleMenu()}
        >
          {menuState ? <CloseMenu /> : <BurgerMenu />}
        </button>
      </Container>
    </header>
  );
}
