import gsap from "gsap";
import { useEffect, useRef } from "react";
import gLogo from "../../gLogo.svg";
import Button from "../components/Button";
import SideNav from "../components/SideNav";

interface HomeProps {
  buttonRef: React.RefObject<HTMLDivElement>;
  headingRef: React.RefObject<HTMLHeadingElement>;
  desRef: React.RefObject<HTMLHeadingElement>;
}

const Home: React.FC<HomeProps> = ({ buttonRef, headingRef, desRef }) => {
  const logoRef = useRef<HTMLImageElement>(null);

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
          <div ref={buttonRef}>
            <Button
              text="Resume"
              href="/src/components/Resume.html"
           
            />
          </div>
        </div>

        <div className="absolute top-[30%] right-2">
          <SideNav />
        </div>

        <div className="hidden md:block img absolute -top-32 left-[30%] -z-1">
          <img src={gLogo} alt="gLogo" className="-z-1 logoImg" ref={logoRef} />
        </div>
        <div id="scroll-wrapper" className="">
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
