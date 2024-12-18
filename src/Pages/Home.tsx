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
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const banner = bannerRef.current;

    if (!canvas || !banner) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let dots = [];
    const arrayColors = ["#eee", "#545454", "#596d91", "#bb5a68", "#696541"];

    for (let index = 0; index < 50; index++) {
      dots.push({
        x: Math.floor(Math.random() * canvas.width),
        y: Math.floor(Math.random() * canvas.height),
        size: Math.random() * 3 + 5,
        color: arrayColors[Math.floor(Math.random() * 5)],
      });
    }

    const drawDots = () => {
      dots.forEach((dot) => {
        ctx.fillStyle = dot.color;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    const handleMouseMove = (event) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawDots();

      const mouse = {
        x: event.pageX - banner.getBoundingClientRect().left,
        y: event.pageY - banner.getBoundingClientRect().top,
      };

      dots.forEach((dot) => {
        const distance = Math.sqrt(
          (mouse.x - dot.x) ** 2 + (mouse.y - dot.y) ** 2
        );
        if (distance < 300) {
          ctx.strokeStyle = dot.color;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(dot.x, dot.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      });
    };

    const handleMouseOut = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawDots();
    };

    const handleResize = () => {
      canvas.width = banner.offsetWidth;
      canvas.height = banner.offsetHeight;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      dots = [];
      for (let index = 0; index < 50; index++) {
        dots.push({
          x: Math.floor(Math.random() * canvas.width),
          y: Math.floor(Math.random() * canvas.height),
          size: Math.random() * 3 + 5,
          color: arrayColors[Math.floor(Math.random() * 5)],
        });
      }
      drawDots();
    };

    banner.addEventListener("mousemove", handleMouseMove);
    banner.addEventListener("mouseout", handleMouseOut);
    window.addEventListener("resize", handleResize);

    drawDots();

    return () => {
      banner.removeEventListener("mousemove", handleMouseMove);
      banner.removeEventListener("mouseout", handleMouseOut);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className=" h-screen w-full">
        <main className="  h-screen w-full">
          <div
            className="banner flex-col relative overflow-hidden w-full h-full flex items-center justify-center z-10"
            ref={bannerRef}
          >
            <h5 className="text-gray-500">@kayumkhan_sayal</h5>
            <div className="flex items-center justify-center flex-col">
              <h1 className="right text-4xl font-bold uppercase leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-red-400 to-yellow-400">
                KAYUMKHAN_SAYAL
              </h1>
              <h1 className="left text-4xl font-bold uppercase leading-tight bg-clip-text text-transparent bg-gradient-to-l from-blue-500 via-red-400 to-yellow-400">
                Full stack developer
              </h1>
           
            </div>

            <button className="mt-4 px-5 py-2 border border-gray-400 rounded-full bg-gradient-to-b from-gray-100 via-transparent to-gray-100 hover:bg-purple-300 hover:text-gray-900 shadow-lg transition-shadow duration-500">
              Subscribe Now ↗
            </button>
            <canvas
              id="dotsCanvas"
              className="absolute inset-0 pointer-events-none w-full h-screen -z-10"
              ref={canvasRef}
            />
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;
