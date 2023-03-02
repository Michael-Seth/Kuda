import React from "react";

type HeroProps = {
  bigText: string;
  smallText: string;
  button: string;
  imgSvg: string;
};

function Hero({ bigText, smallText, button, imgSvg }: HeroProps) {
  return (
    <div>
      <header className="bg-white">
        <div className="container px-6 py-10 h-[80vh] mx-auto">
          <div className="items-center  h-full lg:flex justify-around">
            <div className="text-center w-[20rem] md:w-1/2 lg:text-left m-auto lg:w-1/4">
              <div className="lg:max-w-sm ">
                <h1 className="text-[2.6rem] font-bold text-primary dark:text-white">
                  {bigText}
                </h1>

                <p className="mt-3 text-[1.05rem] text-gray-700 font-[500] dark:text-gray-400">
                  {smallText}
                </p>

                {button && (
                  <div className="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row">
                    <button className="w-full px-9 py-3 text-white font-bold capitalize transition-colors duration-300 transform  bg-primary rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                      {button}
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div className=" flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
              <img className="w-[80%] h-full" src={imgSvg} alt="Kuda Clone" />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Hero;
