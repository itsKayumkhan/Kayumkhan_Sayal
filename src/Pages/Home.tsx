import gsap from "gsap";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gLogo from "../../gLogo.svg";
import SideNav from "../components/SideNav";

interface HomeProps {
  buttonRef: React.RefObject<HTMLDivElement>;
  headingRef: React.RefObject<HTMLHeadingElement>;
  desRef: React.RefObject<HTMLHeadingElement>;
}

const Home: React.FC<HomeProps> = ({ buttonRef, headingRef, desRef }) => {
  const logoRef = useRef<HTMLImageElement>(null);
  //   const webRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    gsap.from(".logoImg", {
      opacity: 0,
      duration: 1,
    });
    gsap.from(logoRef.current, {
      x: 700,
      rotateY: 360,
      duration: 1,
    });
    // gsap.from(webRef.current, {
    //   x: 700,
    //   duration:2,
    //   scale:2
    // })
  }, []);

  return (
    <>
      <main className="h-[90vh] ms-12 lg:ms-36 relative top-20 " id="Home">
        {/* <div className="w-10 absolute right-72 -top-24 shadow-white-xl -z-10">
          <Terminal />
        </div> */}
        <div className="flex flex-col items-start gap-2 z-10 top-2">
          <h1
            className="text-4xl lg:text-7xl font-bold z-10 shadow-white"
            ref={headingRef}
          >
            Kayumkhan_Sayal
          </h1>
          <h2 className="text-2xl mt-4" ref={desRef}>
            Full Stack Developer
          </h2>
          <div
            ref={buttonRef}
            className="flex justify-center items-center gap-3 flex-col lg:flex-row"
          >
            <Link
              to="/resume-me"
              className="relative mt-4 inline-flex items-center justify-start   px-7 py-3 overflow-hidden font-bold rounded-full group"
            >
              <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]" />
              <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8" />
              <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">
                Resume
              </span>
              <span className="absolute inset-0 border-2 border-white rounded-full" />
            </Link>

            <a
              href="../../Resume.html"
              className="px-5 py-2 font-bold text-white transition-all duration-200 text-xl underline"
              download="Kayum_Khan_Sayal_Resume"
            >
              Download
            </a>
          </div>
          {/* <h1 ref={webRef} className="text-4xl lg:text-[12rem]  absolute bottom-48 font-bold z-10">WEB DEV</h1> */}
        </div>

        <div className="absolute top-[30%] right-2">
          <SideNav />
        </div>

        <div className="hidden md:block img absolute -top-32 left-[30%] -z-1">
          <img src={gLogo} alt="gLogo" className="-z-1 logoImg" ref={logoRef} />
        </div>
        <div id="scroll-wrapper" className=" absolute ">
          <div id="scroll-wrapper-inner">
            <div id="scroll-title">Scroll</div>
            <div id="scroll-down"></div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
