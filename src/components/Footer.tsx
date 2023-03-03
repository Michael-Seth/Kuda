import { Link } from "react-router-dom";
import logo from "../assets/svg/Kuda-logo.svg";
import appStore from "../assets/svg/b.svg";
import playStore from "../assets/svg/c.svg";
import web from "../assets/svg/kuda-web.svg";

function Footer() {
  return (
    <div>
      <hr className="h-px mb-20 bg-gray-200 border-none dark:bg-gray-700" />
      <footer className="bg-white font-body text-base dark:bg-gray-900">
        <div className="container px-6 lg:px-32 mx-auto mb-12">
          <div className="lg:flex">
            <div className="w-full mx-3 lg:w-1/4">
              <div className="">
                <a href="#">
                  <img className=" w-24 h-7" src={logo} alt="logo" />
                </a>
              </div>
            </div>

            <div className="mt-6 lg:mt-0 lg:flex-1">
              <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <div>
                  <h3 className="text-primary mb-4 font-bold text-[0.9rem] dark:text-white">
                    Features
                  </h3>
                  <a
                    href="#"
                    className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                  >
                    Kuda Card
                  </a>
                  <a
                    href="#"
                    className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                  >
                    Investment
                  </a>
                  <a
                    href="#"
                    className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                  >
                    Spend
                  </a>
                  <a
                    href="#"
                    className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                  >
                    Save
                  </a>
                  <a
                    href="#"
                    className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                  >
                    Budget
                  </a>
                  <a
                    href="#"
                    className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                  >
                    Borrow
                  </a>
                </div>

                <div>
                  <h3 className="text-primary mb-4 font-bold text-[0.9rem] dark:text-white">
                    Company
                  </h3>
                  <a
                    href="#"
                    className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                  >
                    Blog
                  </a>
                  <a
                    href="#"
                    className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                  >
                    Press
                  </a>
                  <a
                    href="#"
                    className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                  >
                    Join Our Team
                  </a>
                  <a
                    href="#"
                    className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                  >
                    About Us
                  </a>
                </div>

                <div>
                  <h3 className="text-primary mb-4 font-bold text-[0.9rem] dark:text-white">
                    Help
                  </h3>
                  <a
                    href="#"
                    className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                  >
                    Get Help
                  </a>
                  <a
                    href="#"
                    className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                  >
                    FAQs
                  </a>
                  <a
                    href="#"
                    className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                  >
                    Security
                  </a>
                  <a
                    href="#"
                    className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                  >
                    Contact Us
                  </a>
                </div>

                <div>
                  <h3 className="text-primary mb-4 font-bold text-[0.9rem] dark:text-white">
                    Transparency
                  </h3>
                  <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                    Terms & Conditions
                  </span>
                  <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                    Privacy Policy
                  </span>
                  <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                    Information Security
                  </span>
                  <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                    Cookie Policy
                  </span>
                  <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                    Complaints
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="flex flex-row items-center justify-start mt-14">
              <Link to={""}>
                <img src={playStore} className=" w-28" alt="download" />
              </Link>
              <Link to={""} className="ml-2 ">
                <img src={appStore} className=" w-28" alt="download" />
              </Link>
              <Link to={""} className="ml-2 ">
                <img src={web} className=" w-28" alt="download" />
              </Link>
            </div>
            <p className="text-center text-gray-400 mt-8 dark:text-gray-400">
              Products may vary by country or market.
            </p>
          </div>

          <div className="lg:flex my-16">
            <div className="w-full lg:w-1/4">
              <div>
                <h3 className="text-primary mb-4 font-bold text-[0.9rem] dark:text-white">
                  Contact
                </h3>
                <a
                  href="help@kuda.com"
                  className="text-primary font-bold text-[0.9rem] dark:text-white underline"
                >
                  help@kuda.com
                </a>
              </div>
            </div>

            <div className="mt-6 lg:mt-0 lg:flex-1">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                <div>
                  <h3 className="text-primary mb-4 font-bold text-[0.9rem] dark:text-white">
                    Lagos
                  </h3>
                  <a
                    href="#"
                    className="block mt-0 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                  >
                    151 Herbert Macaulay Way, Yaba, Lagos,
                  </a>
                  <a
                    href="#"
                    className="block mt-0 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                  >
                    Nigeria
                  </a>
                </div>

                <div>
                  <h3 className="text-primary mb-4 font-bold text-[0.9rem] dark:text-white">
                    London
                  </h3>
                  <a
                    href="#"
                    className="block mt-0 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                  >
                    91 Wimpole Street,
                  </a>
                  <a
                    href="#"
                    className="block mt-0 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                  >
                    London W1G 0EF,
                  </a>
                  <a
                    href="#"
                    className="block mt-0 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                  >
                    United Kingdom
                  </a>
                </div>

                <div>
                  <h3 className="text-primary mb-4 font-bold text-[0.9rem] dark:text-white">
                    Cape Town
                  </h3>
                  <a
                    href="#"
                    className="block mt-0 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                  >
                    146 Campground Road,
                  </a>
                  <a
                    href="#"
                    className="block mt-0 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                  >
                    Snakepit Building, Level 4, Newlands, Cape Town
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="text-[12px]">
            <p className="text-left text-gray-400 mt-4 dark:text-gray-400">
              © 2023 Kuda Technologies Ltd (Company No.11472232). All rights
              reserved.
            </p>
            <p className="text-left text-gray-400 mt-4 dark:text-gray-400">
              If you would like to find out more about which Kuda entity you
              receive services from, please reach out to us via the in-app chat
              in the Kuda app. Nigerian banking services offered by Kuda
              Microfinance Bank (RC796975) with registered address at 151 -
              Herbert Macaulay Way, Yaba, Lagos, Nigeria. Kuda Microfinance Bank
              is licensed by the Central Bank of Nigeria. Deposits are insured
              by the Nigerian Deposit Insurance Corporation (NDIC).
            </p>
            <p className="text-left text-gray-400 mt-4 dark:text-gray-400">
              UK services are offered by Kuda EMI Ltd (Company No. 13724208)
              with registered address at 5 New Street Square, London, EC4A 3TW,
              United Kingdom. Kuda EMI Ltd is A Distributor of Modulr FS
              Limited. Modulr FS Limited (Company No 09897919), is regulated by
              the Financial Conduct Authority for issuance of electronic money
              under reference 900573.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
