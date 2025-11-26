/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import Dropdown from "components/dropdown";
import { FiAlignJustify } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { RiMoonFill, RiSunFill } from "react-icons/ri";
import logoImg from "../../assets/img/precallai-log-white.svg";
const Navbar = (props: {
  onOpenSidenav: () => void;
  brandText: string;
  secondary?: boolean | string;
  toggleColorMode: any;
  colorMode: any;
}) => {
  const navigate = useNavigate();
  const { onOpenSidenav, brandText, colorMode, toggleColorMode } = props;
  const [darkmode, setDarkmode] = React.useState(false);

  const handleLogOut = () => {
    navigate("/auth/login");
    localStorage.clear();
  };

  useEffect(() => {
    if (colorMode === "dark" || darkmode) {
      document.body.classList.add("dark");
      setDarkmode(true);
    } else {
      document.body.classList.remove("dark");
      setDarkmode(false);
    }
  }, [colorMode]);

  return (
    <nav className="sticky bottom-3 top-4 z-40 flex flex-row flex-wrap items-center justify-between border-b-2 border-[#CBD5E0] bg-white/10 p-2 backdrop-blur-xl dark:bg-[#0b14374d]">
      <div className="ml-[6px]">
        {/* <div className="h-6 w-[224px] pt-1">
          <a
            className="text-sm font-normal text-navy-700 hover:underline dark:text-white dark:hover:text-white"
            href=" "
          >
            Pages
            <span className="mx-1 text-sm text-navy-700 hover:text-navy-700 dark:text-white">
              {" "}
              /{" "}
            </span>
          </a>
          <Link
            className="text-sm font-normal capitalize text-navy-700 hover:underline dark:text-white dark:hover:text-white"
            to="#"
          >
            {brandText}
          </Link>
        </div> */}
        <p className="shrink text-[33px] capitalize text-navy-700 dark:text-white">
          <Link
            to="#"
            className="font-bold capitalize hover:text-navy-700 dark:hover:text-white"
          >
            {brandText}
          </Link>
        </p>
      </div>
      <div className="relative mt-[3px] flex h-[61px] w-[355px] flex-grow items-center justify-around gap-2 rounded-full bg-white px-2 py-2 shadow-xl shadow-shadow-500 dark:!bg-navy-800 dark:shadow-none md:w-[150px] md:flex-grow-0 md:gap-1 xl:w-[150px] xl:gap-2">
        <span
          className="flex cursor-pointer text-xl text-gray-600 dark:text-white xl:hidden"
          onClick={onOpenSidenav}
        >
          <FiAlignJustify className="h-5 w-5" />
        </span>
        <div
          className="cursor-pointer text-gray-600"
          onClick={() => {
            if (darkmode) {
              document.body.classList.remove("dark");
              setDarkmode(false);
            } else {
              document.body.classList.add("dark");
              setDarkmode(true);
            }
            toggleColorMode();
          }}
        >
          {colorMode === "dark" ? (
            <RiSunFill size={25} className="text-gray-600 dark:text-white" />
          ) : (
            <RiMoonFill size={25} className="text-gray-600 dark:text-white" />
          )}
        </div>
        {/* Profile & Dropdown */}
        <Dropdown
          button={
            <img
              className="h-10 w-10 rounded-full"
              src={logoImg}
              alt="Elon Musk"
            />
          }
          children={
            <div className="flex w-56 flex-col justify-start rounded-[20px] bg-white bg-cover bg-no-repeat pb-4 shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:text-white dark:shadow-none">
              {/* <div className="ml-4 mt-3">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-bold text-navy-700 dark:text-white">
                    👋 Hey, Adela
                  </p>{" "}
                </div>
              </div> */}
              {/* <div className="mt-3 h-px w-full bg-gray-200 dark:bg-white/20 " /> */}

              <div className="ml-4 mt-3 flex flex-col">
                <div
                  className="mt-3 cursor-pointer hover:text-red-500"
                  onClick={handleLogOut}
                >
                  Log Out
                </div>
              </div>
            </div>
          }
          classNames={"py-2 top-8 -left-[180px] w-max"}
        />
      </div>
    </nav>
  );
};

export default Navbar;
