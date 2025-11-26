/* eslint-disable react-hooks/exhaustive-deps */
// Chakra Imports
// Custom Icons
// import { useColorMode } from "@chakra-ui/system";
import { useColorMode } from "@chakra-ui/react";
import React, { useEffect } from "react";

import { RiMoonFill, RiSunFill } from "react-icons/ri";
export default function FixedPlugin(props: { [s: string]: any }) {
  const { ...rest } = props;
  const { colorMode, toggleColorMode } = useColorMode();
  const [darkmode, setDarkmode] = React.useState(
    document.body.classList.contains("dark")
  );
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
    <button
      className="border-px fixed bottom-[30px] right-[35px] !z-[99] flex h-[60px] w-[60px] items-center justify-center rounded-full border-[#6a53ff] bg-gradient-to-br from-brandLinear to-blueSecondary p-0"
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
      {...rest}
    >
      {/* // left={document.documentElement.dir === "rtl" ? "35px" : ""}
      // right={document.documentElement.dir === "rtl" ? "" : "35px"} */}
      <div className="cursor-pointer text-gray-600">
        {colorMode === "dark" ? (
          <RiSunFill className="h-4 w-4 text-white" />
        ) : (
          <RiMoonFill className="h-4 w-4 text-white" />
        )}
      </div>
    </button>
  );
}
