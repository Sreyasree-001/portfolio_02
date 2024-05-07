import { Button } from "@/components/ui/button";
import { RevealWrapper } from  'next-reveal'

export const Header = () => {

  return (
    <div className="relative">
      {/**<img
          src=""
          className="absolute inset-0 object-cover w-full h-full #6E366E"
          alt=""
        />0000 */}
      <div className="relative bg-opacity-75 bg-purple-700 bg-transparent">
        <svg
          className="absolute inset-x-0 bottom-0 text-black"
          viewBox="0 0 1160 163"
        >
          <path
            fill="currentColor"
            d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
          />
        </svg>
        <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <RevealWrapper origin='right' delay={200} duration={2000} distance='80px' reset={true}>
          <div className="flex flex-col items-center justify-between xl:flex-row">
            <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12 ">
              
              <h2
                className="max-w-lg mb-6 text-2xl font-light
                  text-white sm:text-3xl sm:leading-none "
              >
                <p className="mb-2 uppercase text-xl">Hello! everyone</p>
                <br className="hidden md:block" />
                <span className="font-light uppercase">I'm </span>
                <span className="text-purple-500 font-bold uppercase">
                  Sreyasree Sasmal
                </span>
              </h2>
                
              
              <p className="max-w-xl mb-4 text-base text-gray-200 md:text-3xl">
                <span className="font-semibold text-violet-300">
                  A FULLSTACK WEB DEVELOPER
                </span>
              </p>
              
              <div className="flex flex-col w-32 self-center mt-24 space-y-2 lg:flex-row lg:mt-2 lg:space-x-3">
                <a href="cv.pdf" download="cv1">
                <Button
                  variant="ghost"
                  className="bg-transparent text-white border-gray-600 border-2 hover:bg-violet-300"
                >
                  Download CV 
                </Button>
                </a>
              </div>
            </div>
            <div className="w-full max-w-xl sm:px-2 sm:w-6/12 xl:px-8 xl:w-5/12">
              <div className="bg-purple-300 shadow-2xl rounded-full sm:p-10">
                <img src="./image4.png" className="w-full h-full mb-2 " alt="" />
              </div>
            </div>
            
            {/**<div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                  
                </div>
              </div> */}
          </div>
          </RevealWrapper>
        </div>
      </div>
    </div>
  );
};
