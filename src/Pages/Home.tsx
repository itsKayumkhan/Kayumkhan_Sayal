import { useEffect } from "react";
import gLogo from "../../public/assets/gLogo.svg";
import Button from "../components/Button";
import SideNav from "../components/SideNav";
import Terminal from "../components/Terminal";
import gsap from "gsap";

const Home = ({
  buttonRef,
  hadingRef,
  desRef,
}: {
  buttonRef: React.RefObject<HTMLDivElement>;
  hadingRef: React.RefObject<HTMLHeadingElement>;
  desRef: React.RefObject<HTMLHeadingElement>;
}) => {

  useEffect(()=>{
    gsap.from(".logoImg", {
      opacity: 0,
      // y: 00,
      // ease: "power2",
      duration: 1
    })
  })



  return (
    <>
      <main className=" h-[90vh] ms-36 relative  top-20">
        <div className="w-10 absolute right-72 -top-24 shadow-white-xl">
          <Terminal />
        </div>
        <div className="flex flex-col  items-start gap-2 z-10 top-2">
          <h1 className="text-7xl font-bold z-10 shadow-white" ref={hadingRef}>
            Kayumkhan_Sayal
          </h1>
          <h2 className="text-3xl mt-4" ref={desRef}>
            Full Stack Developer
          </h2>
          <div ref={buttonRef}>
            <Button
              text="Resume"
              href="../../public/assets/kayumkhanResume.pdf"
              isDownload={true}
            />
          </div>
        </div>

        <div className="absolute top-[30%] right-2"  >
          <SideNav/>
        </div>

        <div className="img absolute -top-32 left-[30%] -z-1">
          <img src={gLogo} alt="gLogo" className="-z-1 logoImg" />
        </div>
        <div id="scroll-wrapper">
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
