import { HiX } from "react-icons/hi";
import Links from "./components/Links";
import routes from "routes";
import { Link } from "react-router-dom";
import logoImg from "../../assets/img/precallai-logo.png";
import lightlogo from "../../assets/img/precallai-log-white.png";

const Sidebar = (props: {
  open: boolean;
  onClose: React.MouseEventHandler<HTMLSpanElement>;
  colorMode: any;
}) => {
  const { open, onClose, colorMode } = props;
  return (
    <div
      className={`sm:none duration-175 linear fixed !z-50 flex min-h-full flex-col bg-white pb-10 shadow-2xl shadow-white/5 transition-all dark:!bg-navy-800 dark:text-white md:!z-50 lg:!z-50 xl:!z-0 h-full overflow-auto ${
        open ? "translate-x-0" : "-translate-x-96"
      }`}
    >
      <span
        className="absolute right-4 top-4 block cursor-pointer xl:hidden"
        onClick={onClose}
      >
        <HiX />
      </span>

      <div className={`m-5 flex h-[70px] w-[150px] items-center`}>
        <div className="ml-1 mt-1 h-full w-full  font-poppins text-[26px] font-bold uppercase text-navy-700 dark:text-white">
          <Link to={"/admin/user-list"}>
            {colorMode === "dark" ? (
              <img
                src={lightlogo}
                alt="logo"
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            ) : (
              <img
                src={logoImg}
                alt="logo"
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            )}
          </Link>
        </div>
      </div>
      <div className="mb-7 h-px bg-gray-300 dark:bg-white/30" />

      <ul className="mb-auto pt-1">
        <Links routes={routes} />
      </ul>
    </div>
  );
};

export default Sidebar;
