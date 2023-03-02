import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/svg/Kuda-logo.svg";
import ng from "../assets/svg/Frame.svg";
import uk from "../assets/svg/Frame-2.svg";
import gh from "../assets/svg/Frame-4.svg";
import ugd from "../assets/svg/Frame-3.svg";
import glb from "../assets/svg/Frame-1.svg";

type NavbarProps = {

}

function Navbar() {
  const [hovering, setHovering] = useState(false);
  const [region, setRegion] = useState('')
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();
  const regions = [
    { path: "/", logo: glb, name: "Global", status: true },
    { path: "/nigeria", logo: ng, name: "Nigeria", status: true },
    { path: "/united-kingdom", logo: uk, name: "United-Kingdom", status: true },
    { path: "/ghana", logo: gh, name: "Ghana", status: false },
    { path: "/uganda", logo: ugd, name: "Uganda", status: false },
  ];


  const filteredArray = () => {
    regions.map(item => {
      if (item.path === location.pathname) {
        setRegion(item.logo)
        return item;
      } else {
        return null;
      }
    })
  }

  useEffect(() => {
    filteredArray()
  }, [filteredArray])

  const handleMouseEnter = () => {
    setHovering(true);
  };

  const handleMouseLeave = () => {
    setHovering(false);
  };

  return (
    <div>
      <nav
        className="bg-white text-primary font-medium relative z-20 text-base shadow-lg dark:bg-gray-800"
        style={{ boxShadow: "0 4px 13px rgb(0 0 0 / 7%)" }}
      >
        <div className="container px-6 py-4 mx-auto">
          <div className="lg:flex lg:items-center">
            <div className="flex items-center justify-between">
              <a href="#">
                <img className="w-20 h-2 sm:h-7" src={logo} alt="kuda-logo" />
              </a>

              <div className="flex lg:hidden">
                <div className="md:block flex justify-center mr-5 ">
                  <a
                    href="#"
                    className="mx-2 text-gray-600 transition-colors duration-300 transform dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300"
                    aria-label="Github"
                    onMouseEnter={handleMouseEnter}
                  >
                    <img src={region} alt="country" />

                  </a>
                </div>
                <button
                  type="button"
                  className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                  aria-label="toggle menu"
                  onClick={() => { setIsOpen(!isOpen) }}
                >
                  {!isOpen ? (
                    <svg
                      x-show="!isOpen"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 8h16M4 16h16"
                      />
                    </svg>
                  ) : (
                    <svg
                      x-show="isOpen"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>)}
                </button>
              </div>
            </div>

            <div className="absolute inset-x-0 z-20 flex-1 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center lg:justify-between">
              <div className={`${!isOpen && "hidden lg:block"}`}>
                <div className="flex flex-col font-base capitalize dark:text-gray-300 lg:px-16 lg:-mx-4 lg:flex-row lg:items-center">
                  <a
                    href="#"
                    className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200"
                  >
                    features
                  </a>
                  <a
                    href="#"
                    className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200"
                  >
                    Business{" "}
                    <span className="border rounded-[5px] text-base ml-1 p-1">
                      Beta
                    </span>
                  </a>
                  <a
                    href="#"
                    className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200"
                  >
                    Company
                  </a>
                  <a
                    href="#"
                    className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200"
                  >
                    Help
                  </a>
                </div>
              </div>
              <div className={`${!isOpen && "hidden lg:block"}`}>
                <div className="flex justify-center mt-6 lg:mt-0 lg:-mx-2 items-center">
                  <a
                    href="#"
                    className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200 font-base"
                  >
                    Sign In
                  </a>

                  <a
                    href="#"
                    className="mx-2 text-gray-600 transition-colors duration-300 transform dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300"
                    aria-label="Facebook"
                  >
                    <button className="w-full px-9 py-3 text-white font-bold capitalize transition-colors duration-300 transform  bg-primary rounded-lg lg:w-auto lg:mx-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                      Join Kuda
                    </button>
                  </a>

                  <a
                    href="#"
                    className="mx-2 text-gray-600 transition-colors duration-300 transform dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300"
                    aria-label="Github"
                    onMouseEnter={handleMouseEnter}
                  >
                    <img src={region} alt="country" />

                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </nav>{hovering && (
        <section
          className="bg-[#1b184b1c] fixed z-30 w-screen top-0 right-0 h-screen" onClick={handleMouseLeave}
        ><div className="absolute top-0 right-10 z-40 m-10 mx-4 w-[32rem] bg-[#eff1ff] overflow-hidden rounded-xl border shadow-lg md:pl-2 ">
            <div className="flex flex-col overflow-hidden sm:flex-row md:h-auto">
              <div className="flex text-base w-full flex-col font-normal sm:w-1/2 sm:p-8 lg:w-[55%]">
                <img src={ng} className="w-8" alt="country" />
                <p className="mt-4 mb-2 max-w-md text-gray-800">
                  You’re currently viewing Nigerian content.
                </p>
                <p className="mt-2 mb-2 max-w-md text-gray-800">
                  Choose another country or region to see content
                  specific to your location or stay here.
                </p>
                <a
                  href="#"
                  className="group mt-3 cursor-pointer  text-left underline text-[1rem] text-primary"
                >
                  <span className="text-left font-semibold">
                    Stay here
                  </span>

                </a>
              </div>

              <div className="order-first ml-auto h-48 w-full bg-white sm:order-none sm:h-auto sm:w-1/2 lg:w-[45%]">
                {regions.map((region) => {
                  return (<Link to={`${region.path}`} key={region.name} className={location.pathname === `${region.path}` ? "flex flex-row bg-gray-200 px-7 items-center" : "flex flex-row px-7 items-center"}>
                    <img src={region.logo} className="w-8" alt={region.name} />
                    <span className="font-normal text-xl pl-3 py-4 ">{region.name}</span>
                  </Link>)
                })}

              </div>
            </div>
          </div></section>
      )}
    </div>
  );
}

export default Navbar;
