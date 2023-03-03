import React from "react";

type SectionLRProps = {
  bigText: string;
  smallText: string;
  imgSvg: string;
};

function Section_LR({ bigText, smallText, imgSvg }: SectionLRProps) {
  return (
    <div>
      <div className="container px-6 py-10 h-[70vh] mx-auto">
        <div className="items-center  h-full lg:flex justify-between">
          <div className="text-center w-[20rem] md:w-1/2 lg:text-left m-auto lg:w-1/3">
            <div className="lg:max-w-sm ">
              <h1 className="text-[2.6rem] font-bold text-primary dark:text-white">
                {bigText}
              </h1>

              <p className="mt-3 text-[.9rem] text-gray-700 font-[400] dark:text-gray-400">
                {smallText}
              </p>
            </div>
          </div>

          <div className=" flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
            <img className="w-[70%] h-full" src={imgSvg} alt="Kuda Clone" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section_LR;
